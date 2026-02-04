import { supabase } from "../config/supabase.js";

export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;
    const userId = req.user.userId;

    const { error } = await supabase.from("todos").insert([
      { title, userId }
    ]);

    if (error) throw error;

    res.status(201).json({ message: "Todo created" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getTodos = async (req, res) => {
  try {
    const userId = req.user.userId;

    const { data } = await supabase
      .from("todos")
      .select("*")
      .eq("userId", userId);

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const { error } = await supabase
      .from("todos")
      .update(req.body)
      .eq("id", id)
      .eq("userId", userId);

    if (error) throw error;

    res.json({ message: "Todo updated" });
  } catch (err) {
    res.status(403).json({ error: "Not authorized" });
  }
};

export const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;

    const { error } = await supabase
      .from("todos")
      .delete()
      .eq("id", id)
      .eq("userId", userId);

    if (error) throw error;

    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(403).json({ error: "Not authorized" });
  }
};
