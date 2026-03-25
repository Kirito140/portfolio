import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Avatar } from "@mui/material";
import "../assets/styles/Main.scss";

import profile from "../assets/images/profile.jpg";

function Main() {
  type Links = {
    link: string;
    icon: JSX.Element;
  };

  const links: Links[] = [
    {
      link: "https://github.com/Kirito140",
      icon: <GitHubIcon />,
    },
    {
      link: "https://www.linkedin.com/in/maxence-campourcy-50645b315/",
      icon: <LinkedInIcon />,
    },
  ];

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <Avatar 
            src={profile}
            alt="Campourcy Maxence"
            className="profile-avatar"
          />
        </div>

        <div className="content">
          <div className="social_icons">
            {links.map((link, index) => (
              <a key={index} href={link.link} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            ))}
          </div>

          <h1>Campourcy Maxence</h1>
          <p>Etudiant en BUT Informatique</p>

          <div className="mobile_social_icons">
            {links.map((link, index) => (
              <a key={index} href={link.link} target="_blank" rel="noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;