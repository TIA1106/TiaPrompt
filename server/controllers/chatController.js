import Chat from '../models/Chat.js';

export const getChats = async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const chats = await Chat.find({ userId: req.session.user.userId }).sort({ createdAt: -1 });
    res.json(chats);
  } catch (err) {
    console.error("Failed to fetch chats:", err.message);
    res.status(500).json({ error: "Failed to fetch chats" });
  }
};

export const createChat = async (req, res) => {
  try {
    if (!req.session.user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const { role, content } = req.body;

    const newChat = new Chat({
      userId: req.session.user.userId,
      role,
      content,
    });

    const savedChat = await newChat.save();
    res.status(201).json(savedChat);
  } catch (err) {
    console.error("Failed to create chat:", err.message);
    res.status(500).json({ error: "Failed to create chat" });
  }
};
