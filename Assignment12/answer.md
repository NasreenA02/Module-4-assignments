## Schema Design Fundamentals – Relational Databases
## What schema design is and what a database schema represents
- Schema design means planning how data will be arranged in a database before actually creating tables. A database schema shows the structure of the database, like what tables exist, what columns they have, what type of data they store, and how tables are connected. 
-  For example, in a shopping app, the schema may include tables such as users, products, and orders, and define how orders are linked to users.

## Why schema design is required before writing backend code
- Schema design is important before writing backend code because backend logic depends on the database structure. If the schema is not clear, developers may face problems while adding, updating, or fetching data. For example, if the backend expects an email field but the database does not have it, the API will fail. A good schema saves time and avoids rework.

## How poor schema design impacts data consistency, maintenance, and scalability
- Poor schema design causes many problems. It can lead to duplicate or incorrect data, which affects data consistency. Maintenance becomes difficult because changes need to be fixed in multiple places. Scalability also becomes an issue because badly designed tables slow down queries as data grows larger.

## What validations are in schema design and why databases enforce validations (for example: NOT NULL, UNIQUE, DEFAULT, PRIMARY KEY)
- Validations in schema design are rules that control what data is allowed. For example, NOT NULL ensures a value must be provided, UNIQUE prevents duplicate values like emails, DEFAULT sets an automatic value, and PRIMARY KEY uniquely identifies each record. Databases use these validations to keep data correct and reliable.

## The difference between a database schema and a database table
- A database schema is different from a database table. The schema is the complete design of the database, while a table is just one part of it. For example, a schema may include multiple tables such as students and courses, but each table stores specific data.

## Why a table should represent only one entity
- Each table should represent only one entity. For example, a students table should store only student information, not their exam results or fees. Keeping one entity per table makes data organized and easier to manage.

## Why redundant or derived data should be avoided in table design
- Redundant or derived data should be avoided in table design. For example, storing both date of birth and age is unnecessary because age can be calculated from date of birth. Redundant data increases errors and inconsistency.

## The importance of choosing correct data types while designing tables
- Choosing correct data types is also very important. For example, age should be an integer, names should be text, and timestamps should use date-time formats. Correct data types improve performance and reduce errors.