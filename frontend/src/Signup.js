import { useState } from "react";
import { supabase } from "./supabaseClient";

function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {

    e.preventDefault();

    const { data, error } =
      await supabase.auth.signUp({
        email,
        password
      });

    if (error) {
      alert(error.message);
    } else {
      alert("Signup Successful");
      console.log(data);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px"
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "white",
          padding: "35px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
        }}
      >

        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            fontSize: "35px",
            color: "#333",
            fontWeight: "bold"
          }}
        >
          📸 Signup
        </h2>

        <form onSubmit={handleSignup}>

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "20px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
              boxSizing: "border-box"
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              width: "100%",
              padding: "14px",
              marginBottom: "25px",
              borderRadius: "10px",
              border: "1px solid #ccc",
              outline: "none",
              fontSize: "16px",
              boxSizing: "border-box"
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "14px",
              border: "none",
              borderRadius: "12px",
              background:
                "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s"
            }}
          >
            Signup 🚀
          </button>

        </form>

      </div>

    </div>
  );
}

export default Signup;