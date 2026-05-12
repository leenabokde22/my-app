import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data } = await supabase
      .from("posts")
      .select("*")
      .order("id", { ascending: false });

    setPosts(data || []);
  }

  async function likePost(id, likes) {
    await supabase
      .from("posts")
      .update({ likes: likes + 1 })
      .eq("id", id);

    fetchPosts();
  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>

        <h2 style={styles.title}>📸 Instagram Feed</h2>

        {posts.map((post) => (
          <div key={post.id} style={styles.card}>

            <img
              src={post.image}
              alt=""
              style={styles.image}
            />

            <div style={styles.content}>

              <p style={styles.caption}>
                {post.caption}
              </p>

              <button
                style={styles.button}
                onClick={() =>
                  likePost(post.id, post.likes)
                }
              >
                ❤️ Like
              </button>

              <p style={styles.likes}>
                ❤️ Likes: {post.likes}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "30px 15px",
    background:
      "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
  },

  wrapper: {
    maxWidth: "550px",
    margin: "0 auto",
  },

  title: {
    textAlign: "center",
    color: "white",
    fontSize: "38px",
    marginBottom: "30px",
    fontWeight: "bold",
    textShadow: "2px 2px 10px rgba(0,0,0,0.3)",
  },

  card: {
    background: "white",
    marginBottom: "30px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },

  image: {
    width: "100%",
    objectFit: "cover",
  },

  content: {
    padding: "20px",
  },

  caption: {
    fontSize: "17px",
    color: "#333",
    marginBottom: "15px",
  },

  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(to right, #833ab4, #fd1d1d)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  likes: {
    marginTop: "15px",
    fontWeight: "bold",
    color: "#444",
  },
};

export default Feed;