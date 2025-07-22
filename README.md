# 💬 TiaPrompt — Full-Stack AI Assistant App

TiaPrompt is a secure, full-stack AI chatbot built with the **MERN stack** (MongoDB, Express.js, React, Node.js). It supports user authentication using session cookies, has a clean React frontend styled with Tailwind CSS, and connects to Mistral AI via API.


---

## ⚙️ Features

- ✅ **User Signup/Login** using session cookies
- 🔐 **Secure HTTP-only cookie-based auth**
- 🧠 **AI Assistant UI** (Mistral API ready)
- 🔗 **Frontend-Backend connected**
- 🎨 **Tailwind CSS** for sleek UI
- 💾 **MongoDB/Mongoose** for persistent user data

---

## 🚀 Run the App Locally

### 1️⃣ Prerequisites

- Node.js and npm installed
- MongoDB (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- Mistral AI API key (optional for now)

---

### 2️⃣ Clone the Repository

```bash
git clone https://github.com/TIA1106/TiaPrompt.git
cd TiaPrompt


```
Install Dependencies(open in different terminals)
🔹 Install frontend dependencies\n
cd client
npm install
🔹 Install backend dependencies
cd server
npm install

Set Up Environment Variables
Create a .env file inside /server directory:
MONGO_URI=your_mongodb_connection_string
MISTRAL_API_KEY=your_mistral_api_key
PORT=5000
✅ PORT=5000 is the default backend port
✅ MISTRAL_API_KEY will be used when integrating with Mistral LLM API

Run Both Client and Server
Use two terminal windows/tabs:

▶️ Start Backend (server):
cd server
npm run dev
Runs on: http://localhost:5000

▶️ Start Frontend (React):
bash
Copy code
cd ../client
npm run dev
Runs on: http://localhost:5173


🛠️ Tech Stack
Frontend: React + Vite + Tailwind CSS + Axios

Backend: Express.js, MongoDB, Mongoose, express-session

AI: Mistral API (future integration)

Authentication: Session + Cookies (NOT JWT)


🙌 Built with ❤️ by Tia Sukhnanni
