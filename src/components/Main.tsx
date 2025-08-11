import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
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
            <a
              href="mailto:shri.krishna@example.com"
              target="_blank"
              rel="noreferrer"
            >
              <MailIcon />
            </a>
          </div>
          <h1>Shri Krishna</h1>
          <p>
            Seeking Full-Time Software Engineering Roles | Available May 2026
          </p>
          <br />
          <p>
            🚀 Specialize in designing and developing web applications that
            balance scalability, performance, and usability
          </p>
          <br />
          <p>
            ⚡Excel at transforming complex datasets into clear, actionable
            visualizations that help empower customers to make informed
            decisions
          </p>
          <br />
          <p>
            📊 Adept at building performant backend services with Go/Node.js and
            engineering robust solutions for critical challenges like data
            security and system performance
          </p>
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
