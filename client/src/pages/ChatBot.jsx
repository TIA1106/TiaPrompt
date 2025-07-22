
// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import Message from '../components/Message';
// // import Navbar from '../components/Navbar';
// // import "../index.css"; 

// // function ChatBot() {
// //   const [messages, setMessages] = useState(() => {
// //     const stored = localStorage.getItem('chatMessages');
// //     return stored ? JSON.parse(stored) : [];
// //   });
// //   const [input, setInput] = useState('');

// //   const handleSend = async () => {
// //     if (!input) return;
// //     try {
// //       const res = await axios.post(
// //         'http://localhost:5000/api/message',
// //         { message: input },
// //         { withCredentials: true }
// //       );

// //       setMessages((prev) => [...prev, { role: 'user', content: input }, { role: 'assistant', content: res.data.reply }]);
// //       setInput('');
// //     } catch (err) {
// //       console.error('Error:', err);
// //     }
// //   };


// //   const clearMessages = () => {
// //     setMessages([]);
// //     localStorage.removeItem('chatMessages');
// //   };

// //   const handleKeyPress = (e) => {
// //     if (e.key === 'Enter') handleSend();
// //   };

// //   return (
// //     <div className="min-h-screen bg-[#0D1117] text-white font-sans">
// //       <Navbar clearMessages={clearMessages} />
//       // <h1 className="text-3xl font-bold mb-2 text-pink-400 flex justify-center">  <span className="heart-pulse text-pink-400 text-2xl animate-sparkle">💖</span>
//       //   Tia's Pyaara Chatbot   <span className="heart-pulse text-pink-400 text-2xl animate-sparkle">💖</span>
//       // </h1>

// //       <div className="flex flex-col items-center px-4">
// //         <div className="w-full max-w-2xl bg-[#161B22] p-4 rounded-2xl shadow-xl flex flex-col space-y-4 overflow-y-auto max-h-[70vh]">
// //           {messages.map((msg, index) => (
// //             <Message key={index} role={msg.role} content={msg.content} />
// //           ))}
// //         </div>

// //         <div className="w-full max-w-2xl mt-4 flex items-center space-x-2">
// //           <input
// //             value={input}
// //             onChange={(e) => setInput(e.target.value)}
// //             onKeyDown={handleKeyPress}
// //             placeholder="Type your message..."
// //             className="flex-1 p-3 rounded-xl bg-[#21262D] text-white focus:outline-none" />
// //           <button
// //             onClick={handleSend}
// //             className="bg-pink-500 hover:bg-pink-600 transition text-white px-4 py-2 rounded-xl"
// //           >
// //             Send
// //           </button>
// //           <button
// //             onClick={clearMessages}
// //             className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-xl"
// //           >
// //             Clear
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default ChatBot;
// // client/src/pages/ChatBot.jsx
// // src/pages/Home.jsx
// // pages/Chatbot.jsx
// // import { useState,useEffect } from "react";
// // import axios from "axios";

// // const Chatbot = () => {
// //   const [prompt, setPrompt] = useState("");
// //   const [messages, setMessages] = useState([]);
// //   const [loading, setLoading] = useState(true);
// // useEffect(() => {
// //   const fetchHistory = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:5000/api/auth/me", { withCredentials: true });
// //       setUser(res.data.user);
// //       const historyRes = await axios.get("http://localhost:5000/api/chat/history", { withCredentials: true });
// //       setHistory(historyRes.data.history);
// //     } catch (err) {
// //       console.error("Failed to load history:", err);
// //       setHistory([]); 
// //       setUser(null); 
// //     }
// //   };
// //   fetchHistory();
// // }, []);

// // if (loading) {
// //   return <div className="text-white text-center mt-20">Loading chat...</div>;
// // }



// //   const sendPrompt = async () => {
// //     if (!prompt.trim()) return;

// //     const userMessage = { sender: "user", text: prompt };
// //     setMessages((prev) => [...prev, userMessage]);

// //     try {
// //       const res = await axios.post("http://localhost:5000/api/chat", { prompt });
// //       const aiMessage = { sender: "bot", text: res.data.reply };
// //       setMessages((prev) => [...prev, aiMessage]);
// //     } catch (err) {
// //       setMessages((prev) => [...prev, { sender: "bot", text: "Something went wrong." }]);
// //     }

// //     setPrompt("");
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-950 text-white px-4 py-8 pt-12 flex flex-col items-center">
// {/* <h1 className="text-3xl font-bold mb-2 text-pink-400 flex justify-center">  <span className="heart-pulse text-pink-400 text-2xl animate-sparkle">💖</span>
//         Pyaara Chatbot   <span className="heart-pulse text-pink-400 text-2xl animate-sparkle">💖</span>
//       </h1> */}
// //       <div className="w-full max-w-2xl bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col gap-4">
// //         <div className="overflow-y-auto max-h-[300px] flex flex-col gap-2">
// //           {messages.map((msg, i) => (
// //             <div key={i} className={`p-2 rounded-lg ${msg.sender === "user" ? "bg-pink-500 self-end" : "bg-gray-700 self-start"}`}>
// //               {msg.text}
// //             </div>
// //           ))}
// //         </div>

// //         <div className="flex gap-2 mt-4">
// //           <input
// //             className="flex-grow px-4 py-2 bg-gray-700 text-white rounded focus:outline-none"
// //             placeholder="Type your message..."
// //             value={prompt}
// //             onChange={(e) => setPrompt(e.target.value)}
// //             onKeyDown={(e) => e.key === "Enter" && sendPrompt()}
// //           />
// //           <button
// //             onClick={sendPrompt}
// //             className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
// //           >
// //             Send
// //           </button>
// // <button onClick={() => setMessages([])} className="bg-red-500 text-white px-3 ml-2 rounded">Clear</button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Chatbot;
// import { useState, useEffect } from "react";
// import axios from "axios";

// const Chatbot = () => {
//   const [prompt, setPrompt] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchHistory = async () => {
//       try {
//         const authRes = await axios.get("http://localhost:5000/api/auth/me", {
//           withCredentials: true,
//         });
//         const historyRes = await axios.get("http://localhost:5000/api/chat/history", {
//           withCredentials: true,
//         });

//         const formattedHistory = historyRes.data.history.flatMap((item) => [
//           { sender: "user", text: item.prompt },
//           { sender: "bot", text: item.response },
//         ]);

//         setMessages(formattedHistory);
//       } catch (err) {
//         console.warn("Guest user or session error, continuing without history.");
//         setMessages([]); 
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchHistory();
//   }, []);

//   const sendPrompt = async () => {
//     if (!prompt.trim()) return;

//     const userMessage = { sender: "user", text: prompt };
//     setMessages((prev) => [...prev, userMessage]);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/chat",
//         { prompt },
//         { withCredentials: true } // ✅ Required for session support
//       );
//       const aiMessage = { sender: "bot", text: res.data.reply };
//       setMessages((prev) => [...prev, aiMessage]);
//     } catch (err) {
//       console.error("Message error:", err);
//       setMessages((prev) => [...prev, { sender: "bot", text: "Something went wrong." }]);
//     }

//     setPrompt("");
//   };

//   if (loading) {
//     return <div className="text-white text-center mt-20">Loading chat...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-gray-950 text-white px-4 py-8 pt-12 flex flex-col items-center">
//      <h1 className="text-3xl font-bold mb-2 text-pink-400 flex justify-center">  <span className="heart-pulse text-pink-400 text-2xl animate-sparkle">💖</span>
//         Pyaara Chatbot   <span className="heart-pulse text-pink-400 text-2xl animate-sparkle">💖</span>
//       </h1>

//       <div className="w-full max-w-2xl bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col gap-4">
//         <div className="overflow-y-auto max-h-[300px] flex flex-col gap-2">
//          {messages.length === 0 ? (
//   <p className="text-gray-400 text-sm text-center">Start chatting!</p>
// ) : (
//   messages.map((msg, i) => (
//     <div
//       key={i}
//       className={`p-2 rounded-lg ${
//         msg.sender === "user" ? "bg-pink-500 self-end" : "bg-gray-700 self-start"
//       }`}
//     >
//       {msg.text}
//     </div>
//   ))
// )}

//         </div>

//         <div className="flex gap-2 mt-4">
//           <input
//             className="flex-grow px-4 py-2 bg-gray-700 text-white rounded focus:outline-none"
//             placeholder="Type your message..."
//             value={prompt}
//             onChange={(e) => setPrompt(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && sendPrompt()}
//           />
//           <button
//             onClick={sendPrompt}
//             className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
//           >
//             Send
//           </button>
//           <button
//             onClick={() => setMessages([])}
//             className="bg-red-500 hover:bg-red-600 text-white px-3 rounded"
//           >
//             Clear
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chatbot;
import { useState, useEffect } from "react";
import axios from "axios";

const Chatbot = () => {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
const [history, setHistory] = useState([]);

 useEffect(() => {
  const fetchHistory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/auth/me", {
        withCredentials: true,
      });

      if (res.data?.user) {
        const historyRes = await axios.get("http://localhost:5000/api/chat/history", {
          withCredentials: true,
        });

        console.log(" Chat History Fetched", historyRes.data.history);

        const formattedHistory = historyRes.data.history.map((msg) => ({
          sender: msg.role === "user" ? "user" : "bot",
          text: msg.content,
        }));

        setMessages(formattedHistory);
      } else {
        console.warn(" Not logged in");
      }
    } catch (err) {
      console.error(" Guest user or history fetch failed:", err);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  fetchHistory();
}, []);



  const sendPrompt = async () => {
    if (!prompt.trim()) return;

    const userMessage = { sender: "user", text: prompt };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/chat",
        { prompt },
        { withCredentials: true }
      );

      const aiMessage = { sender: "bot", text: res.data.reply ?? "..." };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error("Message send failed:", err);
      setMessages((prev) => [...prev, { sender: "bot", text: "Something went wrong." }]);
    }

    setPrompt("");
  };

  if (loading) {
    return <div className="text-white text-center mt-20">Loading chat...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-8 pt-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2 text-pink-400 flex justify-center">
        <span className="heart-pulse text-pink-400 text-2xl animate-sparkle">💖</span>
        Pyaara Chatbot
        <span className="heart-pulse text-pink-400 text-2xl animate-sparkle">💖</span>
      </h1>

      <div className="w-full max-w-2xl bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col gap-4">
        <div className="overflow-y-auto max-h-[300px] flex flex-col gap-2">
          {messages.length === 0 ? (
            <p className="text-gray-400 text-sm text-center">Start chatting!</p>
          ) : (
            messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 p-2 rounded-md max-w-[80%] ${
                  msg.sender === "user" ? "bg-pink-500 self-end" : "bg-gray-700 self-start"
                }`}
              >
                {msg.text}
              </div>
            ))
          )}
        </div>

        <div className="flex gap-2 mt-4">
          <input
            className="flex-grow px-4 py-2 bg-gray-700 text-white rounded focus:outline-none"
            placeholder="Type your message..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendPrompt()}
          />
          <button
            onClick={sendPrompt}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
          >
            Send
          </button>
          <button
            onClick={() => setMessages([])}
            className="bg-red-500 hover:bg-red-600 text-white px-3 rounded"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
