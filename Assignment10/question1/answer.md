1. existing students table
SELECT * FROM students
| id | name         | email           | age | course           | created_at                 |
| -- | ------------ | --------------- | --- | ---------------- | -------------------------- |
| 3  | nasreen      | nove@gmail.com  | 23  | Computer         | 2026-01-22 14:39:03.701612 |
| 4  | Sneha        | sane@gmail.com  | 23  | Computer         | 2026-01-22 14:39:54.289229 |
| 5  | Kritika      | kanee@gmail.com | 22  | Math             | 2026-01-22 14:40:35.397542 |
| 1  | Aarav Sharma | aarav@gmail.com | 22  | Data Science     | 2026-01-22 14:36:00.101683 |
| 2  | Aarav Sharma | aarav@gmail.com | 21  | Computer Science | 2026-01-24 16:06:06.342635 |
| 6  | Divya Patel  | divya@gmail.com | 19  | Biology          | 2026-01-24 16:06:06.342635 |
| 7  | Rohan Verma  | rohan@gmail.com | 22  | Computer Science | 2026-01-24 16:06:06.342635 |
| 8  | Sneha Iyer   | sneha@gmail.com | 20  | English          | 2026-01-24 16:06:06.342635 |
| 9  | Karan Singh  | karan@gmail.com | 23  | Mathematics      | 2026-01-24 16:06:06.342635 |

## STEP 2: Aggregate Queries
1. SELECT COUNT(*) AS total_students FROM students;
| total_students |
| -------------- |
| 9              |
2. SELECT AVG(age) AS average_age FROM students;
| average_age         |
| ------------------- |
| 21.6666666666666667 |
3. SELECT MIN(age) AS min_age, MAX(age) AS max_age FROM students;
| min_age | max_age |
| ------- | ------- |
| 19      | 23      |
4. SELECT course, COUNT(*) AS student_count FROM students GROUP BY course;
| course           | student_count |
| ---------------- | ------------- |
| Math             | 1             |
| Computer Science | 2             |
| English          | 1             |
| Mathematics      | 1             |
| Data Science     | 1             |
| Computer         | 2             |
| Biology          | 1             |
5. SELECT COUNT(*) AS students_above_20 FROM students WHERE age > 20;
| students_above_20 |
| ----------------- |
| 7                 |

## STEP 3: Grouping & Filtering
1. SELECT course, COUNT(*) AS student_count FROM students GROUP BY course;
| course           | student_count |
| ---------------- | ------------- |
| Math             | 1             |
| Computer Science | 2             |
| English          | 1             |
| Mathematics      | 1             |
| Data Science     | 1             |
| Computer         | 2             |
| Biology          | 1             |
2. SELECT course, COUNT(*) AS student_count FROM students GROUP BY course HAVING COUNT(*) > 1;
| course           | student_count |
| ---------------- | ------------- |
| Computer Science | 2             |
| Computer         | 2             |
3. SELECT course, COUNT(*) AS student_count FROM students GROUP BY course ORDER BY student_count DESC;
| course           | student_count |
| ---------------- | ------------- |
| Computer         | 2             |
| Computer Science | 2             |
| Math             | 1             |
| Data Science     | 1             |
| Biology          | 1             |
| Mathematics      | 1             |
| English          | 1             |

## STEP 4: Ordering & Limiting
1. SELECT * FROM students ORDER BY created_at DESC LIMIT 3;
| id | name         | email           | age | course           | created_at                 |
| -- | ------------ | --------------- | --- | ---------------- | -------------------------- |
| 2  | Aarav Sharma | aarav@gmail.com | 21  | Computer Science | 2026-01-24 16:06:06.342635 |
| 6  | Divya Patel  | divya@gmail.com | 19  | Biology          | 2026-01-24 16:06:06.342635 |
| 7  | Rohan Verma  | rohan@gmail.com | 22  | Computer Science | 2026-01-24 16:06:06.342635 |
2. SELECT * FROM students ORDER BY age DESC LIMIT 5;
| id | name         | email           | age | course           | created_at                 |
| -- | ------------ | --------------- | --- | ---------------- | -------------------------- |
| 3  | nasreen      | nove@gmail.com  | 23  | Computer         | 2026-01-22 14:39:03.701612 |
| 4  | Sneha        | sane@gmail.com  | 23  | Computer         | 2026-01-22 14:39:54.289229 |
| 9  | Karan Singh  | karan@gmail.com | 23  | Mathematics      | 2026-01-24 16:06:06.342635 |
| 1  | Aarav Sharma | aarav@gmail.com | 22  | Data Science     | 2026-01-22 14:36:00.101683 |
| 7  | Rohan Verma  | rohan@gmail.com | 22  | Computer Science | 2026-01-24 16:06:06.342635 |
3. SELECT * FROM students WHERE course = 'Computer Science' ORDER BY age DESC;
| id | name         | email           | age | course           | created_at                 |
| -- | ------------ | --------------- | --- | ---------------- | -------------------------- |
| 7  | Rohan Verma  | rohan@gmail.com | 22  | Computer Science | 2026-01-24 16:06:06.342635 |
| 2  | Aarav Sharma | aarav@gmail.com | 21  | Computer Science | 2026-01-24 16:06:06.342635 |




