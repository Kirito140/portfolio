import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDocker, faJava, faReact } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { Skill } from "../utils/types";
import { faMaskVentilator } from "@fortawesome/free-solid-svg-icons";

const skills: Skill[] = [
    {
        icon: [faJava],
        title: "Java (Spring Boot / Maven)",
        description: (
            <>
                <p>
                    Durant mes études, j'ai réalisé plusieurs petits projets Java, avec ou sans Spring Boot. <br />
                    Durant mon stage de 2ème année, j'ai travaillé sur le développement d'une API de chatbot avec Gemini. <br />
                    Lors de ma 3ème année, j'ai contribué au projet d'éditeur/exécuteur de workflows et à la gestion d'utilisateurs avec une base de données Firebase.
                </p>
                <p>
                    Une fois le projet terminé, j'ai dockerisé l'application pour faciliter son déploiement et sa gestion.
                </p>
            </>
        ),
        labels: ["Java", "Spring Boot", "Maven", "Gradle", "REST API", "Firebase", "Docker"],
    },
    {
        icon: [faReact, faMaskVentilator],
        title: "Typescript / NextJS",
        description: (
            <>
                <p>
                    J'ai utilisé Typescript principalement pour mes projets personnels, notamment pour développer plusieurs API personnelles qui seront bientôt disponibles sur mon GitHub.
                </p>
                <ul>
                    <li>API de visualisation récursive d'un dossier de fichiers</li>
                    <li>API d'authentification avec Better-Auth</li>
                    <li>API d'envoi de mail via une application Gmail</li>
                </ul>
            </>
        ),
        labels: ["React", "NextJS", "Redux", "React Router", "Firebase", "Docker"],
    },
    {
        icon: [faDocker],
        title: "Docker",
        description: (
            <>
                <p>
                    J'ai utilisé Docker pour mettre en place des environnements de travail pour mes projets personnels.
                    J'ai créé des conteneurs pour mes applications Java et Typescript, ce qui m'a permis de simplifier le processus de déploiement et de gestion de mes projets.
                </p>
            </>
        ),
        labels: ["Docker", "Compose"],
    },
    {
        title: "Autres compétences",
        description: (
            <>
                <p>
                    J'ai aussi travaillé sur des projets personnels avec React, NextJS, Spring Boot et Maven.
                </p>
            </>
        ),
        labels: ["React", "NextJS", "Spring Boot", "Maven"], 
    }
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1 id="Expertise">Expertise</h1>

                <div className="skills-flex">
                    {skills.map((skill) => (
                        <div className="skill-card" key={skill.title}>
                                <div className="icons">
                                    {skill.icon?.map((icon, index) => (
                                        <FontAwesomeIcon key={index} icon={icon} size="3x" />
                                    ))}
                                </div>

                                <h3>{skill.title}</h3>

                                <div className="skill-description">{skill.description}</div>

                                <div className="flex-chips">
                                    <span className="chip-title">Tech stack:</span>
                                    {skill.labels.map((label) => (
                                        <Chip key={label} className="chip" label={label} />
                                    ))}
                                </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Expertise;