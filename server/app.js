import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import chatRoutes from "./routes/chatRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/messages", (req, res) => {
  res.json([{ text: "Hello from server!" }]);
});
export default app;
