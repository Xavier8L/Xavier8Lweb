import Styles from "../../styles/block/projecten.module.css";
import { FaGithub } from "react-icons/fa";
import React, { useState } from "react";

export default function Projecten() {

  const projecten = [
    { naam: "Vier op een rij", beschrijven:"Dit is een 'Vier op een rij' bordspel, gemaakt met eenvoudige JavaScript.", toelichting:"HTML, CSS en Javascript project", github:"https://github.com/Xavier8L/Xavier8L.github.io" },
    { naam: "Accessibility website frontend", beschrijven:"Website waarin gehandicapten onderzoeken kiezen om te doen voor bedrijven. De website gebruikt React als frontend, en via een API de Azure-data ophaalt om de pagina weer te geven. Het bevat een gebruikerssysteem, een systeem voor medewerkers om te bewerken, en een chatsysteem. ", toelichting:"React en azure database", github:"https://github.com/H2SE5C/accessibility-frontend" },
    { naam: "Accessibility website backend", beschrijven:"De backend van deze website is gebouwd met C# en gebruikt .NET om gegevens te creëren en deze naar de Azure-database te uploaden. Vervolgens interacteert het via een API met de frontend.", toelichting:"C#, .NET en azure database", github:"https://github.com/H2SE5C/Accessibility-backend" },
    { naam: "Karting", beschrijven:"Karting website is een website over karting en races. Het maakt gebruik van PHP en Symfony als backend om gegevens van een MySQL-database op te halen en de informatie over de karts op de webpagina weer te geven.", toelichting:"PHP,Symfony en MySQL", github:"https://github.com/Xavier8L/karting" },
    { naam:"United-Outdoors",beschrijven:"Met behulp van Python gegevens uit de database ophalen en vervolgens machine learning toepassen om toekomstige gegevens te voorspellen. Daarna grafieken zoals lijndiagrammen of boomdiagrammen maken met Power BI.",toelichting:"Python, powerBI en ssms ",github:"https://github.com/JordiPan/United-Outdoors/tree/main"}
  ]
      

  const [isVolledig, setIsVolledig] = useState(false);
  const handleToggle = (index) => {
    setIsVolledig((prevState) => ({
      ...prevState,
      [index]: !prevState[index], 
    }));
  };



  return (
    <div className={Styles.container}>
      <table className={Styles.projectenTable}>
        <thead>
          <tr>
            <th>Naam</th>
            <th>Toelichting</th>
            <th>Beschrijven</th>
            <th>Github Link</th>
          </tr>
        </thead>
        <tbody>
          {projecten.map((project, index) => (
            <tr key={index}>
              <td>{project.naam}</td>
              <td
                className={isVolledig[index] ? "" : Styles.verberg} 
                onClick={() => handleToggle(index)} 
              >{project.beschrijven}
              </td>
              <td>{project.toelichting}</td>
              <td className={Styles.githubLink}><a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a></td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 