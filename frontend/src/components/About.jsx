import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About InShare</h1>
        <p className="about-subtitle">
          Simple. Secure. Fast. File Sharing Made Easy 🚀
        </p>

        <p className="about-text">
          InShare is a modern file-sharing platform that allows users to
          seamlessly upload and share files with anyone, anywhere. Our goal is
          to make file transfers as smooth and reliable as possible — without
          complicated logins or storage limits.
        </p>

        <p className="about-text">
          Built with cutting-edge technology, InShare ensures your files are
          stored securely and can be accessed instantly through a unique
          download link. Whether you’re a student, developer, or business
          professional, InShare keeps your sharing experience simple and safe.
        </p>

        <div className="about-highlight">
          <h3>✨ Our Features</h3>
          <ul>
            <li>🔒 100% Secure Uploads</li>
            <li>⚡ Lightning-Fast File Sharing</li>
            <li>📁 Instant Download Links</li>
            <li>🌍 Share with Anyone, Anytime</li>
          </ul>
        </div>

        <p className="about-footer">
          Made with 💜 by the InShare Team
        </p>
      </div>
    </div>
  );
}
