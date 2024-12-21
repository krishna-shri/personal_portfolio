import rhythpic from "../assets/images/rhythpic.png";
import playpal from "../assets/images/playpal.png";
import "../assets/styles/Project.scss";
import { Chip } from "@mui/material";

const rhythpicLabels = [
  "React",
  "TypeScript",
  "JavaScript",
  "ExpressJS",
  "MongoDB",
  "Stable Diffusion",
];

const playpalLabels = [
  "React",
  "TypeScript",
  "JavaScript",
  "ExpressJS",
  "MongoDB",
  "CronJob",
  "Overpass API",
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/skris56uic/RhythPic"
            target="_blank"
            rel="noreferrer"
          >
            <img src={rhythpic} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/skris56uic/RhythPic"
            target="_blank"
            rel="noreferrer"
          >
            <h2>RhythPic</h2>
          </a>
          <p>
            RhythPic is an innovative platform that synchronizes real-time
            AI-generated visuals with music and provides contextual information
            like lyrics and song facts. It addresses the challenges of workflow
            disruptions and context-switching, enhancing user engagement and
            creative flow through seamless integration and emotion-aware visual
            generation.
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {rhythpicLabels.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>
        <div className="project">
          <a
            href="https://github.com/skris56uic/playpal"
            target="_blank"
            rel="noreferrer"
          >
            <img src={playpal} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/skris56uic/playpal"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Playpal</h2>
          </a>
          <p>
            Playpal is your ultimate sports companion, making it easy to find,
            book, and manage recreational spaces anywhere in the world. From
            soccer fields in bustling cities to quiet badminton courts in small
            towns, Playpal leverages geolocation data to help you get in the
            game!
          </p>
          <div className="flex-chips">
            <span className="chip-title">Tech stack:</span>
            {playpalLabels.map((label, index) => (
              <Chip key={index} className="chip" label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
