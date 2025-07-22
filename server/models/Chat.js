import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  role: String,
  content: String,
});

const chatSchema = new mongoose.Schema({
  userId: String,
  messages: [messageSchema],
});

const Chat = mongoose.model("Chat", chatSchema);
export default Chat;
