import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());


const readData = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};


const writeData = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};


app.get("/students", (req, res) => {
  const students = readData();
  res.json(students);
});


app.post("/students", (req, res) => {
  const students = readData();
  const newStudent = req.body;

  if (!newStudent.id || !newStudent.name || !newStudent.course || !newStudent.year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  students.push(newStudent);
  writeData(students);

  res.status(201).json({ message: "Student added successfully" });
});


app.put("/students", (req, res) => {
  const students = readData();
  const { id } = req.body;

  const studentIndex = students.findIndex((s) => s.id === id);

  if (studentIndex === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students[studentIndex] = {
    ...students[studentIndex],
    ...req.body
  };

  writeData(students);
  res.json({ message: "Student updated successfully" });
});


app.delete("/students/:id", (req, res) => {
  const students = readData();
  const id = Number(req.params.id);

  const filteredStudents = students.filter((s) => s.id !== id);

  if (students.length === filteredStudents.length) {
    return res.status(404).json({ message: "Student not found" });
  }

  writeData(filteredStudents);
  res.json({ message: "Student deleted successfully" });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
