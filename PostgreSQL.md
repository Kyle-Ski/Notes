# SQL
## Table of contents:
* DDL
    - [Constraints](#Constraints)
    - [Alter Table](#ALTER_TABLE)
* DML
    - [Create and Insert](#Create-and-Insert)
    - [Select and Where](#Select-and-Where)
    - [Aggregate Functions](#Aggregate-Functions)
    - [Clauses](https://docs.google.com/presentation/d/1fuwnawYO7q12IiDzNpvEsoyUaopYsAaX8umgXuoPKYg/edit#slide=id.g14d82d5eb8_0_309)
    - [Update](#Update)
    - [Delete](#Delete)
## Creating a Database using psql:
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

# DDL (Data Definition Language)
## Constraints
Allows you to set values to columns instead of null
ex:
```
CREATE TABLE student (
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

[*Practice with constraints and alter table*](https://docs.google.com/presentation/d/1hOQERqa5UFrENm7HXJfXxElmgdBY7jssnW3Mm4RvwWw/edit#slide=id.gf3363e556_2_28)

# DML (Data Manipulation Language)
*Used to retrieve, store, modify, delete, insert and update data in database*
## Create and Insert
Creating an 'instructor' table with column names and data types:
```
CREATE TABLE instructor (id serial, 
first_name varchar, 
last_name varchar, 
title_id int);
```
Inserting data into the 'instructor' table:
```
INSERT INTO instructor VALUES (default, ‘Kyle’, ‘Coberly’, 1);
INSERT INTO instructor VALUES (default, ‘Danny’, ‘Fritz’, 1);
INSERT INTO instructor VALUES (default, ‘Roberto’, ‘Ortega’, 3);
INSERT INTO instructor VALUES (default, ‘Elana’, ‘Kopelevich’, 4);
```

## Select and Where
* Select: `SELECT [column to select] FROM [database];`
    - You always need to have a column to select from ('*' can be used to select all) and a database
* Where:
```
SELECT [column to select] FROM [database]
WHERE [column] [search condition];  
```
* Using `WHERE` you have access to arithmetic, comparison, and logical opperators:
    - Arithmetic: `+  -   *  /  %`
    - Comparison: `=  !=  <>  >  <  >=  <=`
    - [Logical:](https://sqlzoo.net/wiki) `AND  BETWEEN  IN  LIKE  NOT  OR  LIMIT `
    - For use with null use: `IS NULL` or `IS NOT NULL`
        
## Aggregate Functions
* Functions that return a value in a given column
* Must be passed a column name and `FROM` database
* `MIN()` - returns the smallest value in a given column
* `MAX()` - returns the largest value in a given column
* `SUM()` - returns the sum of the numeric values in a given column
* `AVG()` - returns the average value of a given column
* `COUNT()` - returns the total number of values in a given column

## Update
* Allows you to update a value in a column for a given id:
```
UPDATE [table name]
SET [column to change] = 1
WHERE [column to target by] = [data to target in target column];
```
*Make sure you include the `WHERE` to avoid overriding all values*

## Delete
* Will find record you are looking for and take it out (pretty self explanitory)
```
DELETE FROM [table name]
WHERE [column] = [data to delete by];
```
*Need `WHERE` column to tell the database which row you want to delete*