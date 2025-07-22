import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import axios from "axios";

const Navbar = () => {
  const { user, setUser } = useUserContext();
  const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await axios.post("http://localhost:5000/api/auth/logout", {}, { withCredentials: true });
    setUser(null);       
window.location.replace("/");
    return;                 
  } catch (err) {
    console.error("Logout failed:", err);
  }
};


  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-xl font-bold text-pink-400">
        Tia’s प्यारा AI 💬
      </Link>

      <div className="flex items-center space-x-4">
        {!user ? (
          <>
            <Link to="/login" className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded text-sm font-semibold transition">
              Login
            </Link>
            <Link to="/signup" className="bg-gray-800 border border-pink-500 hover:bg-gray-700 px-4 py-2 rounded text-sm font-semibold transition">
              Signup
            </Link>
          </>
        ) : (
          <>
            <Link to="/chat" className="bg-gray-800 border border-pink-400 hover:bg-gray-700 px-4 py-2 rounded text-sm font-semibold transition">
              Chatbot
            </Link>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-sm font-semibold transition">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
