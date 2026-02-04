export const validateSignup = (req, res, next) => {
  const { name, email, age, location, password } = req.body;

  if (!name || !email || !age || !location || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  next();
};
