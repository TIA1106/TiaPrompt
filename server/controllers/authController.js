import User from '../models/User.js';
export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log("Incoming request body:", req.body); 

    const newUser = new User({ username, email, password });
    const savedUser = await newUser.save();

    res.status(201).json({ message: "User created", user: savedUser });
  } catch (err) {
    console.error("Signup error:", err.message);
    res.status(400).json({ error: "Signup failed", details: err.message });
  }
};
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    req.session.user = {
      username: user.username,
      userId: user._id,
    };

    res.json({ message: "Login successful", user: req.session.user });
  } catch (err) {
    res.status(500).json({ error: "Login failed", details: err.message });
  }
};



export const checkAuth = (req, res) => {
  console.log("🔍 /me route hit!");
  if (req.session.user) {
    console.log("✅ Session User:", req.session.user);
    return res.json({ user: req.session.user });
  } else {
    console.log("❌ No session.user found");
    return res.status(401).json({ message: "Not logged in" });
  }
};




