## Database Fundamentals – Conceptual Understanding
1. Why db.json is not good for real projects?
- db.json is just a normal file. It is okay for practice, but not good for real applications.
- It becomes slow when data increases because the whole file is read again and again.
- It cannot handle many users at the same time. Data can get messed up.
- If the server crashes while saving data, the file can be corrupted.
- There is no security like login, permissions, or data protection.
- It is hard to scale when users and data grow.



2. Ideal characteristics of a database system
Performance – It should work fast even with large data.
Concurrency – Many users should use it at the same time without problems.
Reliability – Data should not be lost if the server stops.
Data Integrity – Data should always be correct and consistent.
Scalability – It should handle more users and more data easily.
Fault Tolerance – If something fails, the database should recover.


3. Types of databases and their use cases
There are mainly two types of databases.

- a. Relational Databases (SQL)
Data is stored in tables.
Uses SQL language.
Has fixed structures
Examples: MySQL, PostgreSQL
Use cases:
Banking systems
College or student management systems
E-commerce websites

- b. Non-Relational Databases (NoSQL)
Data is stored in documents or objects.
Structure is flexible.
Good for large and fast-changing data.
Examples: MongoDB, Firebase
Use cases:
Social media apps
Chat applications
Real-time applications