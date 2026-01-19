import express from "express";
import fs from "fs";

const router = express.Router();
const DB_PATH = "./src/db.json";

const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
const writeDB = (data) =>
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));


router.post("/add", (req, res) => {
  const db = readDB();
  const newTodo = req.body;

  db.todos.push(newTodo);
  writeDB(db);

  res.status(201).json({ message: "Todo added successfully" });
});


router.get("/", (req, res) => {
  const db = readDB();
  res.json(db.todos);
});


router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find(
    (t) => t.id == req.params.todoId
  );

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
});


router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex(
    (t) => t.id == req.params.todoId
  );

  if (index === -1) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos[index] = { ...db.todos[index], ...req.body };
  writeDB(db);

  res.json({ message: "Todo updated successfully" });
});

router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  const filteredTodos = db.todos.filter(
    (t) => t.id != req.params.todoId
  );

  if (filteredTodos.length === db.todos.length) {
    return res.status(404).json({ message: "Todo not found" });
  }

  db.todos = filteredTodos;
  writeDB(db);

  res.json({ message: "Todo deleted successfully" });
});

export default router;
