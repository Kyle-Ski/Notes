# Cheat Sheet for installing [Knex](https://knexjs.org/)
1. In repo, `npm install knex`
2. `npm install pg`
3. `knex init`
4. `createdb [database name]`
5. in the knexfile.js make sure it looks like:
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