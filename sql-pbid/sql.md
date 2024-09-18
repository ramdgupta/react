Excel vs Database

Excel
Easy to use untrained person can work
Data stored less data
good for one time analysis, quick charts
No data integrity due to manual operation
Low search filter capabilities

DataBase
Tanied person can work
Store large amount of data
Can automate task
High data integrity
High Search filter capibilities


SQL DataBase Structure is Relational Data Base Management System

RDBMS (Databse > table >Data > row column)

Data Base Diagram - it's make before creating data base 


Data Types: 
Data Types of a column defines what value the column can store in table
Defined while creating tables in database
Data types mainly classified into three categories most used
	String: char, varchar etc,
	Numeric: int, float, bool etc,
	Date and Time : date, datetime etc,



Commonly used data types in Sql:
int :used for the integer value,
float: used to specify a decimal point number
bool:used to specify Boolean values true and false
char:fixed length string that can contain numbers, letters, and special characters
Carchar : variable length string that can contain numbers, letters and special characters 
data ; date formate yyyyy-mm-dd
datatime:date3 and time combination, format is yyyy-mm-dd hh:mm:ss


Primary and Foreign Keys:

Primary key :
A primary key is a unique column we set in a table to easily identify and locate data in queries
A table can have only one primary key, which should be unique and NOT NULL
Foreign Keys (FK):
A foreign key is a column used to link two or more tables  together 
A table can have any number of foreign keys, can contain duplicate and NULL values

Constraints
Constraints are used to specify rules for data in a table
This ensures the acuuracy and reliability of the data in the table
Constraints can be specified when the table is created with the create Table statement or 
After the table is created with the ALTER TABLE statement 
Suntax CREATE TABLE table_name(
	column1 datatype constraint,
	column2 datatype constraint,
	column3 datatype constraint,
)

Constraints commonly used in SQL:
NOT NULL - Ensures that a column cannot have a NULL value
UNIQUE - Ensures that all values in a column are different
PRIMARY KEY - A COMBINATION OF A NOT NULL and UNIQUE
FOREIGN KEY - Prevents action that would destroy link between tables (used to link multiple tables together)
CHECK - Ensures that the values in a column satisfies a specific condition
DEFAULT - Sets a default value for a column if no value is specific
CREATE INDEX - Used to create and retrieve data from the data very quickly


Creating Data Base Table in SQL :

The CREATE TABLE statement is used to create a new table in a database 

Syntax
	CREATE TABLE table_name(
		column_name1 datatype constraint,
		column_name2 datatype constraint,
		column_name3 datatype constraint,
	)

Example 
	CREATE TABLE customer(
		"ID" int8 PRIMARY KEY,
		"Name" varchar(50) NOT NULL,
		"Age" int NOT NULL,
		"City" char(50),
		"Salary" numeric
	);


Insert Values in table
The insert INTO statement is used to insert new records in a table

Syntax :
INSERT INTO TABLE_NAME
(column1, column2, column3 ..column)
VALUES
(value1,value2,value3,...valueN);

Example 
INSERT INTO customer
(CustID, CustName, Age, City, Salary)
VALUES
(1,'Sam', 26, 'Delhi',9000),
(2,"Ram", 79 "Banglore",10000),
(3, "Ashu", 27 "Jaipur", 20000),
(4, "Ruby", 32 "Lucknow", 250000);

To check data in table 
SELECT * FROM customer

Update value in table
The UPDATE COMMAND IS USED TO UPDATE EXISTING ROWS in a table

UPDATE TABLE_NAME
SET "Column_name1" = 'value1', "Column_name2" = 'value2'
WHERE "ID" = 'value';

Example 
UPDATE customer 
SET CustName ='Xam', Age =32
WHERE CustId =4;

TO CHECK UPDATED TABLE VALUE

SELECT * FROM customer

Delete Values in table 
the delete statement is used to delete existing records in a table

Syntax
DELETE FROM customer
WHERE CustID =3;


Altered Table : The ALTER TABLE statement is used to add, delete, or modify columns in an existing table

Alter Table - ADD Coulumn Syntax
	ALTER TABLE table_name
	ADD OLUMN column_name;

ALTER TABLE - DROP COLUMN Syntax
	ALTER TABLE table_name
	DROP COLUMN column_name;
ALTER TABLE - ALTER/MODIFY COLUMN Syntax
	ALTER TABLE table_name
	ALTER COLUMN column name datatype

Drop & Truncate Table 

The DROP TABLE command deletes a table in the database 
Syntax 
DROP TABLE table_name;
The TURNCATE TABLE command deletes the data inside a table, but not the table itself

Syntax 
TRUNCATE TABLE table_name


SELECT Statement
the SELECT statement is used to select data from a database
Syntax 
SELECT column_name FROM table_name
To select all the fields available in the table 
Syntax 
	SELECT * FROM table_name

To select distinct/unique fields available in the table 

SELECT DISTINCT Column_name From table_name


WHERE Clause 
The WHERE clause is used to filter records 
it is used to extract only those records that fulfill a specific condtion
SELECT column_name FROM table_name
WHERE conditions;

Example
SELECT name FROM classroom
WHERE grade ='A'


Operators in SQL
The SQL reserved words and characters are called operators, which are used with a WHERE clause in a SQL query

Most used operators:
1- Arithmetic operators:airthmetic operations on numeric values
esample :addition(+), Substraction(-), multiplication(*), Division(/), Modulus(%)
2-Comparision operators :compare two different data of SQL table 
example Equal(=), Not Equal(!=), Greater Than(>), Greater Than Equals(>=)
3- Logical Operators: perform the Boolean operations
example :ALL, IN,BETWEEN,LIKE,AND,OR,NOT, ANY
4- Bitwise operators:perform the bit operations on the 
eample :Bitwise AND(&), Bitwise OR(|)

In WHERE clause there is two other clause
LIMIT Clause and ORDER BY clasue

The LIMIT clause is used to set an upper limit on the number of tuples return by SQL

Example below code will return 5 rows of data
SELECT column_name FROM table_name
LIMIT 5;

the ORDER BY is used to sort the result set in ascending(ASC) or desending order (DESC)
Example : Below code will sort the output data by column name in assending order 

SELECT column_name FROM table_name
ORDER BY column_name ASC.

Import csv file into table

COPY table_name(column1, column2, ......columnN)
FROM 'source path of the file'
DELIMITER ',' // for csv
CSV HEADER;


Function In SQL 
Functions in SQL are the database objects that contains a set of SQL statements to perform a specific task. A function accepts input parameters, perform actions , and then return the result
Type of Function:
1- System Defined Function : these are built in functions 
	Example :rand(), round(), upper(). lower(). count(), sum(), max() etc
2- User Defined Function :once You define a function can call it in the same way as the built in functios

Most Used String FUNCTIONS
String functions are used to perform an operation on input string and return an output string
UPPER() converts the value of a filed to uppercase
LOWER() converts the value of a field to lowercase
LENGTH() returns the length of the value in a text field
SUBSTRING() extacts a substring from a string
NOW() returns the current system date and time
FORMAT() used to set the format of a field
CONCAT() adds two or more strings together
REPLACE() replaces all occurancess of a substring withing a string a new substring
TRIM() remove leading and trailing spaces (or other specified characters) from a string

Aggregate function performance calculation on multiple value and returns a single value
And aggregate functiona are often used with GROUP BY & SELECT statement 
COUNT() returns number of values
SUM() retruns sum of all values
AVG() returns average value
MAX() returns maximum value
MIN() returns minimum value
ROUND() Rounds a number to a specified number of decimal place


Group By Statement 
The GROUP BY statement group rows that have the same value in to summary rows.
it is often used with aggregate functions (COUNT(), MAX(),SUM(),AVG()) to group the result -set by one or more columns
Syntax 
	SELECT column_name(s)
	FROM table_name
	GROUP BY column_name(s)
Example 
	SELECT mode, SUM(amount) AS total
	FROM payment
	GROUP BY mode


Having Clause
The HAVING clause is used to apply a filter on the result of GROUP BY based on the specified condition
The WHERE clause places conditions on the selected columns, whereas the HAVING clause places conditions on groups created by the GROUP BY clause

Syntax 
SELECT column_name(s)
FROM table_name
WHERE condition(s)
GROUP BY column_name(s)
HAVING condition(s)

Example
SELECT mode, COUNT(amount) AS total
FROM payment
GROUP BY mode
HAVING COUNT(amount)>= 3
ORDER BY total DESC





TIMESTAMP
the TIMESTAMP data type is used for values that contain both date and time parts
TIME contains only time, formate HH:MI:SS
DATE contains on date, format YYYY-MM-DD
YEAR contains on year,  format YYYY OR YY
TIMESTAM contains date and time, fromat YYYY-MM-DD HH:MI:SS
TIMESTAPPTZ contains data, time and time zone

TIMESTAMP functions/operators
Below are the TIMESTAMP functions and operators in SQL:
SHOW TIMEZONE
SELECT NOW()
SELECT TIMEOFDAY()
SELECT CURRENT_TIME
SELECT CURRENT_DATE

EXTRACT FUNCTION
The EXTRACT() function extracts a part from a given date value.
Syntax : SELECT EXTRACT(MONTH FROM date_field) FROM Table
YEAR, QUARTER, MONTH, WEEK, DAY, HOUR, MINUTE, DOW, DOY

SQL JOIN
JOIN means to combine something
A JOIN clause is used to combine data from two or more tables, based on a related column between them 
Lets understand the joins thorugh example 

Types of JOINS

INNER JOiN
LEFT JOIN : LEFT OUTER JOIN
RIGHT JOIN :RIHGT OUTER JOIN
FULL JOIN  : FULL OUTER JOIN


INNER JOIN
Syntax:

SELECT column_name(s)
FROM TableA
INNER JOIN TableB
ON TableA.col_name = TableB.col_name

Eample
SELECT * FROM customer AS c
INNER JOIN payment AS p
ON  c.customer_id = p.customer_id



SELFJOIN
A self join is a regular join in which a table is jined to itself
SELFT JOIN are powerful for comparing values in a column of rows with the same table

SELECT columna_name(s)
FROM Table AS T1
JOIN Table AS T2
ON T1.col_name = T2.col_name
 

UNION 
The SQL UNION clause/operator is used to combine/concatenate the result of two or more SELECT statements without returning any duplicate rows and keeps unique records 
To use this UNION clause, each SELECT statement must have 
	The same number of clumns selected and expressions
	The same data type and 
	Have them in the same order
Syntax
	SELECT column_name(s) FROM TableA
	UNION
	SELECT column_name(s) FROM TableB
Esample 
	SELECT cust_name,cust_amount from custA
	UNION
	SELECT cust_name , cust_amount from custB

UINON ALL
In UNION ALL everthing is  same as UNINON, it combines/concatenate two or more table but keepls all records, including duplicates
Syntax
	SELECT column_name(s) FROM TableA
	UINON ALL
	SELECT column_name(s) FROM TableB
Example
	SELECT cust_name, cust_amount FROM custA
	UNINON ALL
	SELECT cust_name,cust_amount FROM custB 


SUB QUERY
A Subquery or Inner query or a Nested query allow us to create complex query on the output of another query
	Sub query syntax involves two SELECT statements
Syntax
	SELECT column_name(s)
	FROM table_name
	WHERE column_name operator
	(SELECT column_name FROM table_name WHERE column name > value)

SUB QUERY Example IN , EXISTS
	Question: Find the detail of customers, whose payment amount is more that the average of total amount paid by all customers
Divide above question into two parts:
	Find the average amount
	Filter the customers whose amount > average amount



WINDOW function
	Window functions applies aggregate, ranking and 	analytic functions over a particular window (set of rows)
	And OVER clause is used with window function to define the window

Syntax : SELECT column_name(s)
	fun() OVER ( 
			[<PARTITION BY Clause>]
			[<ORDER BY clause>]
			[<ROW or RANGE Clause>]	
 		)
fun() : Aggregate function,Ranking function, Analytic function
OVER(): Partition BY, ORDER BY, ROWS

WINDOW FUNCTION TERMS
Lets look at some definitions:
Window function : applies aggregate, ranking and analytic functions over a particular window, for example, sum, avg, or row number
Expression: is the name of the column that we want the window function operated on. This may not be necessary depending on what window function is used
Over: is just to signify that this is a window function
PARTITION BY : Divides the rows into partitions so we can specify which rows to use to compute the window function
ORDER BY : is used so that we can order the rows within each partition.This is optional and does not have to be specified
ROWS: can be used if we want to further limit the rows within partition this is optional and usually not used

WINDOW FUNCTION TYPES
There is no official division of the SQL window functions into categories but high level we can divide into three types

Aggregate : SUM, AVG, COUNT, MIN, MAX
Ranking : ROW_NUMBER, RANK, DENSE_RANK, PERCENT_RANK
Value/Anaalytic: LEAD, LAG, FIRST_VALUE, LAST_VALUE





