import { readDB, writeDB } from "../models/todo.model.js";

/* CREATE TODO */
export const createTodo = (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const db = readDB();
    const newTodo = {
      id: Date.now(),
      title
    };

    db.todos.push(newTodo);
    writeDB(db);

    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: "Failed to create todo" });
  }
};

/* GET ALL TODOS */
export const getTodos = (req, res) => {
  try {
    const db = readDB();
    res.status(200).json(db.todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
};

/* GET SINGLE TODO */
export const getTodoById = (req, res) => {
  try {
    const db = readDB();
    const todo = db.todos.find(t => t.id == req.params.id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ error: "Error fetching todo" });
  }
};

/* UPDATE TODO */
export const updateTodo = (req, res) => {
  try {
    const db = readDB();
    const index = db.todos.findIndex(t => t.id == req.params.id);

    if (index === -1) {
      return res.status(404).json({ error: "Todo not found" });
    }

    db.todos[index] = { ...db.todos[index], ...req.body };
    writeDB(db);

    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to update todo" });
  }
};

/* DELETE TODO */
export const deleteTodo = (req, res) => {
  try {
    const db = readDB();
    const filteredTodos = db.todos.filter(t => t.id != req.params.id);

    if (filteredTodos.length === db.todos.length) {
      return res.status(404).json({ error: "Todo not found" });
    }

    db.todos = filteredTodos;
    writeDB(db);

    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
};
