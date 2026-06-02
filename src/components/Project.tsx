import React from "react";
import { type Projects } from "../utils/types";
import Education from "./Projects/Education";
import Personal from "./Projects/Personnal";
import Professional from "./Projects/Profesionel";

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
        { src: "portfolio/images/projects/portfolio1.png", alt: "Portfolio Screenshot 1" },
        { src: "portfolio/images/projects/portfolio2.png", alt: "Portfolio Screenshot 2" },
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
        { src: "portfolio/images/projects/olga_workflows.png", alt: "WORDE Screenshot 1" },
      ],
    },
  ];
  const professionalProjects: Projects[] = [
    {
      id: 1,
      title: "Stockage des traitements RGPD",
      description: <span>Application de gestion du stockage des traitements RGPD pour les entreprises, ce site ce base sur l'exemple données par le CNIL, il y a différents roles user / admin, on peut choisir dans quel service le traitement appartient (si on est admin sinon a met en fonction du service du user) et on peut voir l'ensemble des traitements stocké. un admin à accès a tous les services et leurs traitements, un user a accès aux traitements de son service. </span>,
      date: "2023 - 2024",
      images: [
        { src: "portfolio/images/projects/logial_rgpd.png", alt: "Stockage RGPD Actors" },
        { src: "portfolio/images/projects/logial_rgpd_users.png", alt: "Stockage RGPD Users" },
        { src: "portfolio/images/projects/logial_rgpd_add_traitement.png", alt: "Stockage RGPD ajout d'un traitement" },
      ],
    },
  ];

  return (
    <>
      <Personal items={personalProjects} />
      <Education items={educationProjects} />
      <Professional items={professionalProjects} />
    </>
  );
}

export default Project;