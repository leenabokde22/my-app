import React, { useState } from "react";

function AddPost() {
  const [post, setPost] = useState({
    image: "",
    caption: ""
  });

  const user = JSON.parse(localStorage.getItem("user"));

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:5000/api/posts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...post,
        user_id: user.id
      })
    });

    alert("Post Added");
  };

  const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f0f2f5"
  },
  form: {
    background: "#fff",
    padding: "25px",
    borderRadius: "10px",
    width: "350px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  heading: {
    marginBottom: "20px",
    color: "#333"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "14px"
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#1877f2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold"
  },
  image: {
    width: "100%",
    marginTop: "15px",
    borderRadius: "8px"
  }
};
  return (
    <div style={styles.container}>
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2 style={styles.heading}>Add Post</h2>

      <input
        name="image"
        placeholder="Image URL"
        onChange={handleChange}
        style={styles.input}
      />

      <input
        name="caption"
        placeholder="Caption"
        onChange={handleChange}
        style={styles.input}
      />

      <button style={styles.button}>Add Post</button>

      {post.image && (
        <img
          src={post.image}
          alt="preview"
          style={styles.image}
        />
      )}
    </form>
  </div>
  );
}

export default AddPost;