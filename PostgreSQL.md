## Creating a Table using psql:
* create database: `[home database]=# CREATE DATABASE [name];`
    - from `$` you can also use `createdb [database name]`
* change into new database: `[home database]=# \c [name];`
* create the tale with a name: `[db name]=# CREATE TABLE [table name] ( <return>`
* add a primary key with an id: `[db name](# id serial primary key, <return>`
    - specifically using "serial primary key" will make it a primary key
* create some columns:`[db name](# [another column name] [data type], <return>`
* finish: `[db name](# [another column name] [data type]); <return>`
Then you should see
```
CREATE TABLE
[db name]=#
```
* checkout the data tables you have: `[db name]=# \dt`
* checkout the data in the table: `[db name]=# \d [table name]`
* insert data into table: `[db name]=# INSERT INTO [table name] VALUES (default, [data]);`
    - if you try to do: `[db name]=# INSERT INTO [table name] VALUES ([data], [value]);`
    this will try and add a primary key and will instead return an error message
* list out the records: `[db name]=# SELECT * FROM [table name];`
* quit psql: `\q`
* start psql and immediatly go into the database: `$ psql [database name]`
[More notes on PostgreSQL](https://docs.google.com/presentation/d/167DPjLdsCqT0x-ysgWOjn7q4Y-9AcDHcO9wGPY7bgb4/edit#slide=id.gd7ac0ef0a_0_8)

## Constraints
Allows you to set values to columns instead of null
ex:
```CREATE TABLE student (
    id serial PRIMARY KEY,
    name text NOT NULL,
    email text UNIQUE,
    cohort_id integer REFERENCES cohort(id)
);
```
^^Here the "PRIMARY KEY", "UNIQUE", ect are constraints
* `REFRENCES` is a way to define a foreign key


## `ALTER TABLE`
* Allows you to add a column to a Table: `ALTER TABLE [table name] ADD [column name] [data type];`
* Lets you take a column out of a table: `ALTER TABLE [table name] DROP [column name];`
* Add a default constaint: `ALTER TABLE [table name] ALTER COLUMN [column name] SET DEFAULT [value];`
    - You can also drop a default with `DROP DEFAULT`
* Add a constraint that is unique to a column to a table: `ALTER TABLE [table name] ADD CONSTRAINT [column name] UNIQUE (id);` 
* Re-name a table `RENAME TO` or re-name a column `ALTER TABLE [table name] RENAME COLUMN [column name] TO [new name];`
