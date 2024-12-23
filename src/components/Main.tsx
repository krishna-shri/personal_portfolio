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
            Seeking Summer 2025 Internships | Graduate Assistant @ UIC | Full
            Stack Developer with 4 years of experience building scalable systems
            using ReactJS, Java and Go. Skilled in performance optimization,
            data visualization, and deploying solutions with Ansible, Jenkins
            and MongoDB
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
