import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function CareerTimeline() {
  return (
    <div id="career-history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="October 2024 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Dev at UIC Technology Solutions
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Chicago, IL</h4>
            <ul>
              <li>
                Developed a scalable design system in VueJS with a library of
                reusable UI components used across multiple internal
                applications, reducing code duplication by 30% and speeding up
                feature delivery timelines.
              </li>
              <li>
                Built an advanced testing framework by integrating Vitest for
                component testing and Chromatic for visual regression checks,
                lowering average weekly bug counts from 15 to 3 and improving
                release quality.
              </li>
              <li>
                Ensured 100% accessibility compliance by implementing W3C
                Accessibility Guidelines 3.0, including keyboard operability,
                ARIA labeling, and full screen reader compatibility, resulting
                in inclusive applications for all UIC users.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="June 2025 - August 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer Intern at Mediaocean
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Chicago, IL</h4>
            <ul>
              <li>
                Redesigned the core scheduling tool for advertisers by replacing
                a cluttered interface with a streamlined Handsontable grid and
                powerful filtering options, reducing navigation time by 60% and
                improving usability.
              </li>
              <li>
                Implemented a one-click ad slot creation feature in ReactJS to
                replace a 5-step manual workflow, reducing setup time for ad
                placement by 80% and increasing seller productivity.
              </li>
            </ul>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2020 - July 2024"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              System Engineer at Tata Consultancy Services
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bengaluru, KA
            </h4>
            <ul>
              <li>
                Implemented multi-tenancy and role-based access control using
                Pinia state management, enabling secure tenant isolation and
                multi-customer onboarding on shared infrastructure, cutting
                operational costs by 50%.
              </li>
              <li>
                Led a team to automate UI testing with Cypress end-to-end
                workflows, reducing manual testing effort and shortening release
                cycles from 2 weeks to 4 days.
              </li>
              <li>
                Created interactive performance and usage visualizations with
                Highcharts, helping customers forecast storage needs and costs,
                resulting in a 40% boost in customer retention.
              </li>
              <li>
                Designed a Go-based ransomware defense algorithm to detect and
                block malicious encryption patterns in real time, safeguarding
                over 1,000 files from potential attacks.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February 2020 - June 2020"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Test Automation Intern at Tata Consultancy Services
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Chennai, TN</h4>
            <ul>
              <li>
                Developed a proof-of-concept using Katalon Studio to automate
                and validate complex user workflows that spanned multiple
                software applications and operating systems. The POC tested
                cross-application interactions, ensuring consistent
                functionality, compatibility, and reliability across diverse
                environments.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default CareerTimeline;
