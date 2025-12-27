import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [downloadLink, setDownloadLink] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setDownloadLink("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("myfile", file);

    try {
      setUploading(true);
      const res = await axios.post("http://localhost:3000/api/files", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (res.data.file) setDownloadLink(res.data.file);
    } catch (error) {
      console.error(error);
      alert("Error uploading file");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      className="upload-page"
      style={{
        background: `linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url('/images/bg.jpg') no-repeat center center`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="upload-card">
        <h1>InShare</h1>
        <p className="subtitle">Upload and share files easily </p>

        <form onSubmit={handleUpload} className="upload-form">
          <label htmlFor="file-upload" className="file-label">
            {file ? file.name : "Choose a file"}
          </label>
          <input
            id="file-upload"
            type="file"
            onChange={handleFileChange}
            hidden
          />

          <button type="submit" className="upload-btn" disabled={uploading}>
            {uploading ? "Uploading..." : "Upload File"}
          </button>
        </form>

        {downloadLink && (
          <div className="download-section">
            <p>Uploaded Successfully!</p>
            <a
              href={downloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="download-btn"
            >
              Download File
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
