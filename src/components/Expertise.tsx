import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGolang,
  faJava,
  faFigma,
  faBootstrap,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "Angular",
  "Vue",
  "TypeScript",
  "JavaScript",
  "Go",
  "ExpressJS",
  "Java",
  "MongoDB",
  "MySQL",
  "PrimeNG",
  "RxJS",
];

const labelsSecond = [
  "Highcharts",
  "Figma",
  "D3.js",
  "Material-UI",
  "Bootstrap",
  "TailwindCSS",
  "SASS",
  "Vite",
];

const labelsThird = [
  "Docker",
  "Jenkins",
  "OpenShift",
  "GitHub Actions",
  "Ansible",
  "Cypress",
  "Selenium",
  "Git",
  "VictoriaMetrics",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <FontAwesomeIcon icon={faGolang} size="3x" />
            <FontAwesomeIcon icon={faJava} size="3x" />
            <h3>Full-Stack Development & Scalable Systems</h3>
            <p>
              Expertise in building scalable applications using frameworks like
              ReactJS, Angular, VueJS, and backend technologies like Java, Go,
              and MongoDB. Proven ability to optimize system performance and
              implement complex features like multi-tenancy and RBAC.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faFigma} size="3x" />
            <FontAwesomeIcon icon={faBootstrap} size="3x" />
            <FontAwesomeIcon icon={faCss3Alt} size="3x" />
            <h3>Data Visualization and User-Centric Design</h3>
            <p>
              Strong experience in creating real-time dashboards, interactive
              visualizations, and user-friendly interfaces using tools like
              Highcharts, Figma, and modern frontend frameworks. Demonstrated
              success in improving user retention and decision-making with
              well-designed interfaces.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <FontAwesomeIcon icon={faGitAlt} size="3x" />
            <FontAwesomeIcon icon={faLinux} size="3x" />
            <h3>DevOps and Automation</h3>
            <p>
              Proficiency in CI/CD pipelines using tools like GitHub Actions,
              Jenkins, and Ansible. Experience in streamlining testing processes
              with automation frameworks like Cypress and Selenium, ensuring
              faster and more reliable deployments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
