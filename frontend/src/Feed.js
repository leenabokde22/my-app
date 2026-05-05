import React, { useEffect, useState } from "react";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/posts/all")
      .then(res => res.json())
      .then(data => {
        console.log("API Response:", data); // 👈 debug

        // ✅ FIX: handle both cases
        if (Array.isArray(data)) {
          setPosts(data);
        } else if (Array.isArray(data.posts)) {
          setPosts(data.posts);
        } else {
          setPosts([]); // fallback
        }
      })
      .catch(err => {
        console.error("Error fetching posts:", err);
        setPosts([]);
      });
  }, []);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#f0f2f5",
      minHeight: "100vh",
      padding: "20px"
    },
    title: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "20px",
      color: "#333"
    },
    card: {
      width: "350px",
      background: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      marginBottom: "20px",
      overflow: "hidden"
    },
    image: {
      width: "100%",
      height: "300px",
      objectFit: "cover"
    },
    caption: {
      padding: "10px",
      fontSize: "14px",
      color: "#444"
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Feed</h2>

      {!Array.isArray(posts) || posts.length === 0 ? (
        <p>No posts yet 😢</p>
      ) : (
        posts.map((p) => (
          <div style={styles.card} key={p.id}>
            <img src={p.image} alt="post" style={styles.image} />
            <p style={styles.caption}>{p.caption}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Feed;