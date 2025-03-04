import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import profilePic from "../assets/images/profile.jpeg";

function Main() {
  return (
    <div id="home" className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePic} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/skris56uic"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/shri-krishna-20/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Shri Krishna</h1>
          <p>
            Summer 2025 Internship Seeker
          </p>
          <br />
          <p>🚀 Frontend Artisan @ UIC Technology Solutions</p>
          <br />
          <p>⚡Full-Stack Architect sculpting bulletproof systems with React/Java/Go</p>
          <br />
          <p>📊 Performance whisperer & deployment DJ spinning Ansible/Jenkins pipelines</p>
          <div className="mobile_social_icons">
            <a
              href="https://github.com/skris56uic"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/shri-krishna-20/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
