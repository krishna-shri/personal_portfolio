import resumePDF from "../assets/resume/Shri_Krishna_Resume.pdf";
import "../assets/styles/Resume.scss";

export function Resume() {
  return (
    <div id="resume">
      <div className="items-container">
        <h1>Resume</h1>
        <object data={resumePDF} type="application/pdf" className="resume-pdf">
          <p>
            Your web browser doesn't have a PDF plugin. Instead you can click{" "}
            <a href={resumePDF}>
              <span className="download-pdf">here</span>
            </a>{" "}
            to download the resume.
          </p>
        </object>
      </div>
    </div>
  );
}

export default Resume;
