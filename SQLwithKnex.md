# SQL Joins with Knex

## Migrations With Forgein Keys
### One-to-Many:
```js
exports.up = function (knex, Promise) {
  return knex.schema.createTable('character', function (table) {
    table.increments()
    table.string('name')
    table.integer('height')
    table.integer('mass')
    table.integer('force_id').references('force.id').unsigned().onDelete('cascade') // <-- this
  })

};
```
* The selected line above is a forgein key that `.refrences()` another table
    - specifying a primary key
* the `.unsigned()` makes sure it is a valid positive integer
* `onDelete('cascade')` will drop this data when the parent (in this case the force.id) gets deleted
### Many-to-Many Table example:
```js
exports.up = function (knex, Promise) {
  return knex.schema.createTable('character_movie', function (table) {
    table.increments()
    table.integer('character_id').references('character.id').unsigned().onDelete('cascade')
    table.integer('movie_id').references('movie.id').unsigned().onDelete('cascade')
  })
}
```
**_With both of these tables, you have to set up your migrations and seeds for the refrences first!!_**
Both of these migrations are refrenceing another table so they need to be created after those tables. 

## One to Many Inner Join:
*We want to get the 'side: dark' instead of 'force_id: 1'*
**Before:**
```js
router.get('/', (req, res) => {
  knex('character')
    .orderBy('character.id', 'asc')
    .then(characters => {
      res.json({ characters: characters })
    })
})
```
**With the Inner Join:**
```js
router.get('/', (req, res) => {
  knex('character')
    .select('character.id', 'character.name', 'character.height', 'character.mass', 'force.side')
    .innerJoin('force', 'force.id', 'character.force_id') // <--Here
    .orderBy('character.id', 'asc')
    .then(characters => {
      res.json({ characters: characters })
    })
})
```
* On the selected line above is where we are doing the inner join
    1. We grabbed the character table in the `knex('character')` statement
    2. Then we selected what we wanted in the `.select()`
    3. And joined the force tabel on the keys that match up (forgein key of force_id and primary key of force.id)

## One to Many Inner Join for one param:
**Before:**
```js
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  knex('character')
    .where('id', id)
    .then(character => {
      res.json({ character: character[0] })
    })
})
```
**With the Inner Join:**
```js
router.get('/:id', (req, res, next) => {
  const id = req.params.id
  knex('character')
    .select('character.id', 'character.name', 'character.height', 'character.mass', 'force.side')
    .innerJoin('force', 'force.id', 'character.force_id')
    .where('character.id', id) // <--
    .then(character => {
      res.json({ character: character[0] })
    })  
})
```
* We have to be careful with the selected line above because there are now 2 'id' fields, so we have to specify which id we are going to use as the `req.params.id` 

## Many to Many Get All
*Using the join table to get the movies the character is in as well*
**Before:**
```js
router.get('/', (req, res) => {
  knex('character')
    .select('character.id', 'character.name', 'character.height', 'character.mass', 'force.side')
    .innerJoin('force', 'force.id', 'character.force_id') 
    .orderBy('character.id', 'asc')
    .then(characters => {
      res.json({ characters: characters })
    })
})
```
**Using the join table:**
```js
router.get('/', (req, res) => {
  knex('character') // <-- starting table
    .select('character.id', 'character.name', 'movie.title', 'character.height', 'character.mass', 'force.side')
    .innerJoin('force', 'force.id', 'character.force_id')
    .innerJoin('character_movie', 'character.id', 'character_movie.character_id') // <-- join table
    .innerJoin('movie', 'movie.id', 'character_movie.movie_id') // <-- ending table
    .orderBy('character.id', 'asc')
    .then(characters => {
      res.json({ characters: characters })
    })
})
```