import resumePDF from "../assets/resume/Shri_Krishna_Resume.pdf";
import "../assets/styles/Resume.scss";

export function Resume() {
  return (
    <div id="resume">
      <div className="items-container">
        <embed src={resumePDF} className="resume-pdf" />
      </div>
    </div>
  );
}

export default Resume;
