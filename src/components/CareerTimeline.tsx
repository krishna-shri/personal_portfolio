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
            date="October 2024 - present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Frontend Dev at UIC Technology Solutions
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Chicago, IL</h4>
            <ul>
              <li>
                Crafted a unified design system in VueJS that became the
                cornerstone for 5+ web apps, slashing code duplication by 30%
                and fostering seamless collaboration across teams obsessed with
                pixel-perfect, inclusive experiences.
              </li>
              <li>
                Pioneered 100% accessibility-first components, rigorously tested
                with Chromatic and Vitest, ensuring every user—regardless of
                ability—engages effortlessly. Result? Bug reports nosedived from
                15 to 3 weekly, freeing devs to innovate, not triage.
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
                Architected a multi-tenant fortress using Pinia, isolating 50+
                tenants on a single infrastructure while slashing operational
                costs by half—no more "spaghetti code" nightmares for
                cross-customer onboarding.
              </li>
              <li>
                Spearheaded a testing revolution by automating 200+ user
                workflows with Cypress, trimming release cycles from 2 weeks to
                4 days and letting QA teams reclaim 20+ hours monthly for
                strategic wins.
              </li>
              <li>
                Transformed raw data into boardroom stories with Highcharts
                dashboards, empowering customers to predict costs and
                usage—sparking a 40% retention boost as clients felt "finally in
                control."
              </li>
              <li>
                Outsmarted ransomware bots with a Go-based defense algorithm
                that analyzed I/O patterns in real-time, blocking encryption
                attacks and shielding 1,000+ files before they even knew they
                were under siege.
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
                Evaluated 50+ CI/CD tools to build secure, streamlined pipelines
                that reduced deployment risks by 60%—while honoring teams'
                existing tech stacks like a code diplomat.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default CareerTimeline;
