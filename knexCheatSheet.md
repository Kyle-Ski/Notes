# Cheat Sheet for installing [Knex](https://knexjs.org/)
1. In repo, `npm install knex`
2. `npm install pg` (install postgresql)
3. `knex init`
    * makes a knexfile.js
4. `createdb [database name]`
    * use the database name in the command below
5. In the knexfile.js make sure it looks like:
```
// Update with your config settings.

module.exports = {

    development: {
        client: 'pg',
        connection: 'postgres://localhost/[database name]'
    },

    production: {
        client: 'postgresql',
        connection: process.env.DATABASE_URL + '?ssl=true'
    }

};
```
*Make sure the connection is a string in the developement object*

6. Create a connection file add things relating to database `mkdir db && touch connection.js`

7. Add the following to the connection file:
```
// Set our environment
const environment = process.env.NODE_ENV || 'development'

// Use connection info from knexfile
const config = require('../knexfile')

// Coordinate the two above accessing either the dev or the production object
const configEnv = config[environment]

// Bring in knex as a library
const knex = require('knex')

// Put it all together
const connection = knex(configEnv)

// Export so we can use it in our routes
module.exports = connection
```
8. Back in route directory run `knex migrate:make [table in database name]`
    * makes a migrations directory
    * this makes code to set up (`exports.up`) our tables and code to remove (`exports.down`) tables
9. In the `exports.up` function add a [schema](https://knexjs.org/#Schema)
    * We need to make the table that doesn't depend on a forigen key
ex:
```
knex.schema.createTable([table name], function (table) {
        table.increments()
        table.string('name')
        table.integer('height')
        table.integer('mass')
    })
```
10. In the `exports.down` add something [like](https://knexjs.org/#Schema-dropTableIfExists)
11. Use `knex migrate:latest` to start migration
    * use `psql [database name]` then `\d [table name]` to check and see if the table was made
12. Now do `knex seed:make [number to denote seedfile]_[table name]`
    * rolling back the migrations will also get rid of the seeds
Inside the boilerplate file that this command created you'll see something like:
```
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex(['table name']).del()
    .then(function () {
        // Inserts seed entries
        return knex(['table name']).insert([
            {id: 1, [add your colName]: ['add your rowValue1']},
            {id: 2, [add your colName]: ['add your rowValue2']},
            {id: 3, [add your colName]: ['add your rowValue3']}
        ]);
    });
};
```

13. Use command `knex seed:run`
    * `psql characters` and then `SELECT * FROM [table name];` to see if the data was seeded