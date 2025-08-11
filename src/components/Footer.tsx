import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
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
        <a href="mailto:skris56@uic.edu?subject=Inquiry%20from%20Portfolio&body=Hi,%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.">
          <MailIcon />
        </a>
      </div>
      <p>
        A portfolio designed & built by{" "}
        <a
          href="https://github.com/krishna-shri/personal_portfolio"
          target="_blank"
          rel="noreferrer"
        >
          Shri Krishna
        </a>{" "}
        with 💜
      </p>
    </footer>
  );
}

export default Footer;
