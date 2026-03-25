import React from "react";
import { type Projects } from "../utils/types";
import Education from "./Projects/Education";
import Personal from "./Projects/Personnal";

function Project() {

  const personalProjects: Projects[] = [
    {
      id: 1,
      title: "Portfolio Website (En cours de développement)",
      description: <p>
        Le site de mon portfolio, il est en cours de développement et disponible sur mon github. <br />
        Il est en react typescript et utilise des animations pour rendre l'expérience utilisateur plus agréable, il est également responsive pour une utilisation sur mobile. <br />
        Il provient d'un template que j'ai personnalisé pour le rendre unique et adapté à mes besoins. <br />
        Le templates de base a été fait par <a href="https://github.com/yujisatojr/react-portfolio-template" target="_blank" rel="noopener noreferrer">Yuji Sato</a> que j'ais rendu modulaire à l'aide de différents composants pour faciliter la maintenance et les futures mises à jour.
      </p>,
      link: "https://github.com/Kirito140/portfolio",
      images: [
        { src: "/images/projects/portfolio1.png", alt: "Portfolio Screenshot 1" },
        { src: "/images/projects/portfolio2.png", alt: "Portfolio Screenshot 2" },
      ],
    },
    {
      id: 2,
      title: "API Personnelle (En cours de développement)",
      description: <p>
        <h3>Better-Auth</h3>
        <p>
          Une api pour l'authentification et la gestion des utilisateurs dans un server NEXTJS avec une base de données MySQL, elle est en cours de développement et sera bientôt disponible sur mon github.
        </p>
        <hr />
        <h3>MyAnimes</h3>
        <p>
          API pour récupérer une arborescence des dossier et fichier en json, quand un fichier est en format vidéo, l'api va récupérer le fichier et le navigateur va le lire, elle est en cours de développement et sera bientôt disponible sur mon github.
        </p>
        <hr />
        <h3>API de mail</h3>
        <p>
          Une api pour envoyer des emails, elle est en cours de développement et sera bientôt disponible sur mon github.
        </p>
      </p>,
    },
  ];
  const educationProjects: Projects[] = [
    {
      id: 1,
      title: "WORDE",
      description: <span>Application de gestion de Workflow pour les entreprises travaille en groupe de 6 personnes, je me suis occupé avec un camarade la partie editeur / execution de workflow, la partie editeur a été réalisé en React Typescript et la partie execution en Java Spring Boot via une API REST, les données sont stocké dans une base Firebase.</span>,
      date: "2025 - 2026",
      images: [
        { src: "/images/projects/olga_workflows.png", alt: "WORDE Screenshot 1" },
      ],
    },
  ];

  return (
    <>
      <Personal items={personalProjects} />
      <Education items={educationProjects} />
    </>
  );
}

export default Project;