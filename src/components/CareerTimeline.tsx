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
    <div id="history">
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
              Graduate Assistant at UIC Technology Solutions
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Chicago, IL</h4>
            <ul>
              <li>
                I enhance web development efficiency by creating reusable VueJS
                components, reducing code duplication by 20%.
              </li>
              <li>
                I specialize in frontend testing with Cypress to ensure flawless
                user interfaces. By integrating tests into CI/CD pipelines, I
                maintain high-quality standards, enabling faster and reliable
                releases.
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
                Designed and implemented multi-tenancy and RBAC features for the
                NetApp Service Engine, reducing operational costs by 50% while
                enabling secure, multi-customer infrastructure.
              </li>
              <li>
                Led a team of four engineers to develop automated Cypress test
                suites, eliminating manual UI testing and accelerating release
                cycles by 60%.
              </li>
              <li>
                Engineered interactive dashboards using Angular, Highcharts, and
                Ag-Grid to visualize storage usage and costs, improving customer
                retention by 40%.
              </li>
              <li>
                Built an application handling 1 million requests per minute,
                leveraging caching mechanisms and timeline charts to reduce SLA
                times by 50% and processing time from 1 minute to 30 seconds.
              </li>
              <li>
                Developed detailed charts for monitoring Kafka data pipelines
                and integrated visualization tools to streamline operations,
                enabling faster debugging and issue resolution.
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
                Explore multiple Automation tools/concepts available in the
                Industry and leverage the best fit based on Customer tools
                strategy for DevSecOps Implementation.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default CareerTimeline;
