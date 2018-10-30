## Creating a Table using psql:
* create the tale with a name: `[db name]=# CREATE TABLE [table name] ( <return>`
* add a primary key with an id: `[db name](# id serial primary key, <return>`
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
* list out the records: `[db name]=# SELECT * FROM [table name];`
