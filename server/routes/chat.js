import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import Chat from "../models/Chat.js"; 
import https from "https";

dotenv.config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { prompt } = req.body;
  const userId = req.session.user?.userId;
if (!userId) return res.status(401).json({ error: "Unauthorized" });

  try {
    const response = await axios.post(
      "https://api.mistral.ai/v1/chat/completions",
      {
        model: "mistral-tiny",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful and friendly assistant. You use emojis to engage people and not bore them. You can speak and write in any language but in the beginning you speak english till someone specifies the language to you, you are a great assistant.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.7,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.MISTRAL_API_KEY}`,
          "Content-Type": "application/json",
        },
httpsAgent: new https.Agent({ keepAlive: true }),

      }
    );

    const reply = response.data.choices[0].message.content;

    let chat = await Chat.findOne({ userId });
   if (!chat) {
  chat = new Chat({ userId, messages: [] });
} else if (!Array.isArray(chat.messages)) {
  chat.messages = [];
}


    chat.messages.push(
      { role: "user", content: prompt },
      { role: "assistant", content: reply }
    );

    await chat.save();

    res.json({ reply });
  } catch (error) {
    console.error("Mistral API Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Mistral AI error" });
  }
});

router.get("/history", async (req, res) => {
  const userId = req.session.user?.userId;
  if (!userId) return res.json({ history: [] });

  const chat = await Chat.findOne({ userId });
  if (!chat) return res.json({ history: [] });

  res.json({ history: chat.messages });
});


export default router;
