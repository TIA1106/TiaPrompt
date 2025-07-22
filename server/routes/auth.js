import express from "express";
import { signup, login, checkAuth } from "../controllers/authController.js";
import { getChats, createChat } from '../controllers/chatController.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", checkAuth);
router.get('/', getChats);
router.post('/', createChat);
router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out" });
  });
});
export default router;
