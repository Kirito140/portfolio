import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap, faStar } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";
import { TimelineIcons } from "../utils/enums";
import { TimelineItem } from "../utils/types";

const iconMap = {
  [TimelineIcons.WORK]: faBriefcase,
  [TimelineIcons.EDUCATION]: faGraduationCap,
  [TimelineIcons.OTHER]: faStar,
};

const timeline: TimelineItem[] = [
  {
    id: 1,
    title: (
      <h3 className="vertical-timeline-element-title">
        Bac STI2D - <small>Lycée Maximilien Perret</small>
      </h3>
    ),
    location: {
      city: "Alfortville",
      country: "France",
    },
    description: <p>Spécialitées : <b>Sin</b> (Système d'information numérique)</p>,
    date: {
      start: "2020",
      end: "2023",
    },
    icon: TimelineIcons.EDUCATION,
  },
  {
    id: 2,
    title: (
      <h3 className="vertical-timeline-element-title">
        BUT Informatique - <small>UPEC - IUT Créteil-Vitry</small>
      </h3>
    ),
    location: {
      city: "Vitry-sur-Seine",
      country: "France",
    },
    description: <p></p>,
    date: {
      start: "2023",
      end: "en cours",
    },
    icon: TimelineIcons.EDUCATION,
  },
  {
    id: 3,
    title: (
      <h3 className="vertical-timeline-element-title">
        Stage - <small>Carrefour France</small>
      </h3>
    ),
    location: {
      city: "Massy",
      country: "France",
    },
    description: <p>
      Utilisation d"un model d'ia Gémini afin de faire une api chatbot en Java avec Spring Boot Maven.
    </p>,
    date: {
      start: "14/04/2025",
      end: "06/06/2025",
    },
    icon: TimelineIcons.WORK,
  },
  {
    id: 4,
    title: (
      <h3 className="vertical-timeline-element-title">
        Stage - <small>Logial-Coop</small>
      </h3>
    ),
    location: {
      city: "Alfortville",
      country: "France",
    },
    description: <p>
      Refonte d'un site du site de logement <a href="https://domaxia.fr" target="_blank" rel="noopener noreferrer">Domaxia</a> à l'aide du template Wordpress du site de base <a href="https://logial-coop.fr" target="_blank" rel="noopener noreferrer">Logial-Coop</a>
    </p>,
    date: {
      start: "02/03/2026",
      end: "en cours",
    },
    icon: TimelineIcons.WORK,
  },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1 id="Career-History">Career History</h1>

        <VerticalTimeline>
          {timeline.map((item) => (
            <VerticalTimelineElement
              key={item.id}
              className={`vertical-timeline-element--${item.icon}`}
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              date={`${item.date.start} - ${item.date.end}`}
              iconStyle={{ background: "#5000ca", color: "#fff" }}
              icon={<FontAwesomeIcon icon={iconMap[item.icon]} />}
            >
              {item.title}

              <h4 className="vertical-timeline-element-subtitle">
                {item.location.city}, {item.location.country}
              </h4>

              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;