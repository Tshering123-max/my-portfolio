import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <style>{`
        .home-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
          color: #333;
          background: #f9f9f9;
        }

        .profile-section {
          text-align: center;
          margin-bottom: 40px;
        }

        .profile-pic {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #4a90e2;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .profile-section h1 {
          margin-top: 20px;
          font-size: 2.5rem;
          color: #4a90e2;
        }

        .profile-section p {
          font-size: 1.2rem;
          color: #666;
        }

        .skills-section,
        .projects-section,
        .contact-section {
          margin-bottom: 40px;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }

        .skills-section h2,
        .projects-section h2,
        .contact-section h2 {
          border-bottom: 2px solid #4a90e2;
          padding-bottom: 8px;
          margin-bottom: 20px;
          color: #4a90e2;
        }

        .skills-section ul {
          list-style: none;
          padding-left: 0;
        }

        .skills-section li {
          padding: 6px 0;
          font-size: 1rem;
          color: #444;
        }

        .project {
          margin-bottom: 20px;
        }

        .project h3 {
          color: #333;
          margin-bottom: 5px;
        }

        .project p {
          margin: 5px 0 10px;
          color: #555;
        }

        .project a {
          display: inline-block;
          color: #fff;
          background: #4a90e2;
          padding: 8px 14px;
          border-radius: 6px;
          text-decoration: none;
          transition: background 0.3s ease;
        }

        .project a:hover {
          background: #357ab8;
        }

        .contact-section a {
          color: #4a90e2;
          text-decoration: none;
        }

        .contact-section a:hover {
          text-decoration: underline;
        }

        .nav-links {
          text-align: center;
          margin-top: 40px;
        }

        .nav-links a {
          font-weight: bold;
          color: #4a90e2;
          text-decoration: none;
          padding: 10px 20px;
          border: 2px solid #4a90e2;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .nav-links a:hover {
          background-color: #4a90e2;
          color: white;
        }

        @media (max-width: 600px) {
          .home-container {
            padding: 20px 10px;
          }

          .profile-section h1 {
            font-size: 2rem;
          }

          .profile-pic {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>

      <div className="profile-section">
        <img src="profile.jpg" alt="Profile" className="profile-pic" />
        <h1>Tshering Phuntsho</h1>
        <p>Web Developer | UI/UX Designer</p>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Node.js, Express</li>
          <li>Git, GitHub, Figma</li>
          <li>Responsive Design</li>
        </ul>
      </div>

      <div className="projects-section">
        <h2>Projects</h2>
        <div className="project">
          <h3>Portfolio Website</h3>
          <p>A responsive portfolio built using React and CSS Modules.</p>
          <a href="https://yourportfolio.com" target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
        <div className="project">
          <h3>Weather App</h3>
          <p>Displays weather data using a public API and modern UI design.</p>
          <a href="https://yourweatherapp.com" target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </div>
      </div>

      <div className="contact-section">
        <h2>Contact Me</h2>
        <p>Email: tshering1200@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/tshering"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/tshering
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/jjdolma" target="_blank" rel="noreferrer">
            <github className="com" />
            ttshering
          </a>
        </p>
      </div>

      <nav className="nav-links">
        <Link to="/about">About Me</Link>
      </nav>
    </div>
  );
}

export default Home;
