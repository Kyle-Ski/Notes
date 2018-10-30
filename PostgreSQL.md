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