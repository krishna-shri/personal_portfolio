import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function EducationTimeline() {
  return (
    <div id="educational-history">
      <div className="items-container">
        <h1>Education History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="August 2024 - May 2026"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Masters of Science in Computer Science at University of Illinois
              at Chicago
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Chicago, IL</h4>
            <p>
              <strong> Coursework:</strong> Database Systems, User Interface
              Design & Programming, Secure Web Application Development,
              Distributed Computing Systems, Principles of Concurrent
              Programming
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="July 2016 - May 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Bachelor of Technology in Computer Science at SRM Institute of
              Science and Technology
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Chennai, TN</h4>
            <p>
              <strong> Coursework:</strong> Data Structures and Algorithms,
              Integrative Programming and Technologies, Operating Systems,
              Networking and Security, Cryptography, Algorithm Analysis &
              Design, Cloud Computing
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default EducationTimeline;
