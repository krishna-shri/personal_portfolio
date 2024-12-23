import resumePDF from "../assets/resume/Shri_Krishna_Resume.pdf";
import "../assets/styles/Resume.scss";

export function Resume() {
  return (
    <div id="resume">
      <div className="items-container">
        <h1>Resume</h1>
        <embed src={resumePDF} className="resume-pdf" />
      </div>
    </div>
  );
}

export default Resume;
