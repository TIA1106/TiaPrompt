import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import MongoStore from "connect-mongo";
import connectDB from './db.js';
import authRoutes from './routes/auth.js';
import session from "express-session";
import userRoutes from './routes/user.js';
import chatRoutes from './routes/chat.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: 'http://localhost:5173',  
  credentials: true                 
}));
app.use(express.json());

app.use(session({
  secret: "pyaara-secret",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }), 
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
  }
}));

app.use("/api/auth", authRoutes);

app.use('/api/user', userRoutes);
app.use('/api/chat', chatRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
