import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div id="home" className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGof-EuPfxSyw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732426955644?e=1740009600&v=beta&t=vO5amrtDTN9CiX7xY0pSo0JzU86CfZzRaiOpHjsOmL4"
            alt="Avatar"
          />
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
