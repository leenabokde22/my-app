import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Feed from "./Feed";
import Login from "./Login";
import Signup from "./Signup";
import AddPost from "./AddPost";

function App() {
  return (
    <BrowserRouter>

      {/* 🔥 Navbar */}
      <nav
        style={{
          padding: "20px 20px",
          background: "#222",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          position: "sticky",
          top: 0,
          zIndex: 1000
        }}
      >
        {/* 📸 Instagram Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          style={{ width: "60px", height: "60px" }}
        />

        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Feed
        </Link>

        <Link to="/add" style={{ color: "white", textDecoration: "none" }}>
          Add Post
        </Link>

        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
          Login
        </Link>

        <Link to="/signup" style={{ color: "white", textDecoration: "none" }}>
          Signup
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/add" element={<AddPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;