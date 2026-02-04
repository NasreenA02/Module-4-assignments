import { supabase } from "../config/supabaseClient.js";
import bcrypt from "bcrypt";

// SIGNUP
export const signup = async (req, res) => {
  try {
    const { name, email, age, location, password } = req.body;

    // Check duplicate email
    const { data: existingUser } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (existingUser) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const { error } = await supabase.from("users").insert([
      {
        name,
        email,
        age,
        location,
        password: hashedPassword
      }
    ]);

    if (error) throw error;

    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET PROFILE
export const getProfile = async (req, res) => {
  try {
    const { name } = req.query;

    const { data, error } = await supabase
      .from("users")
      .select("id, name, email, age, location")
      .eq("name", name)
      .single();

    if (error || !data) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
