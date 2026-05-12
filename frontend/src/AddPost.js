import { useState } from "react";
import { supabase } from "./supabaseClient";

function UploadPost() {
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!image) return alert("Please select image");

    setLoading(true);

    const fileName = `${Date.now()}-${image.name}`;

    const { error } = await supabase.storage
      .from("posts")
      .upload(fileName, image);

    if (error) {
      console.log(error);
      setLoading(false);
      return;
    }

    const { data: urlData } = supabase.storage
      .from("posts")
      .getPublicUrl(fileName);

    await supabase.from("posts").insert([
      {
        image: urlData.publicUrl,
        caption,
        likes: 0,
      },
    ]);

    setLoading(false);
    setImage(null);
    setCaption("");
    alert("Uploaded 🚀");
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.title}>📤 Upload Post</h2>

        <form onSubmit={handleUpload}>

          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Write caption..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            style={styles.input}
          />

          <button style={styles.button}>
            {loading ? "Uploading..." : "Upload"}
          </button>

        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background:
      "linear-gradient(to right, #833ab4, #fd1d1d, #fcb045)",
  },

  box: {
    width: "100%",
    maxWidth: "400px",
    background: "white",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    textAlign: "center",
    transition: "0.3s",
  },

  title: {
    marginBottom: "20px",
    color: "#333",
    fontSize: "22px",
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    outline: "none",
    fontSize: "14px",
    boxSizing: "border-box",
    transition: "0.3s",
  },

  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "linear-gradient(to right, #833ab4, #fd1d1d)",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "15px",
    transition: "0.3s",
  },
};

export default UploadPost;