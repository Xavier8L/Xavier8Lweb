import Styles from "../../styles/block/ervaring.module.css";
import React, { useState } from "react";

export default function Ervaring() {

  const opleiding =[
    {niveau:"HBO Bachelor",opleidingNaam:"ICT Software Engineering",Tijd:"01/09/2022 - Heden", School:"HAAGSE HOGESCHOOL",Adres:"Johanna Westerdijkplein - Den Haag" },
    {niveau:"MBO 4",opleidingNaam:" Aapplicatie en mediaontwikkelaar",Tijd:"02/09/2019 - 30/06/2022", School:"HAAGSE HOGESCHOOL",Adres:"Johanna Westerdijkplein - Den Haag" }
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOpleiding, setSelectedOpleiding] = useState(null);

  const handleClick = (number) => {
    setSelectedOpleiding(opleiding[number]); 
    setIsModalOpen(true); 
  };

  
  const dichtModal = () => {
    setIsModalOpen(false);
    setSelectedOpleiding(null); 
  };

  
  return (
    <div>
      <div className={Styles.container}>
        <div className={Styles.profielTitle}>
          Blazter.nl:(ICT bedrijf) September 2020 – Juli 2021
          <div className={Styles.bold}>Werkzaamheden: </div>
          <div className={Styles.profielText}>
            <div>- Maken van Wordpress plugins met behulp van Jquery, Javascript en PHP</div>
            <div>- Designs omzetten naar websites met Wordpress, CSS, HTML en Javascript</div>
            <div>- Aanpassen van website functies op basis van klant feedback</div>
            </div>
        </div>
        <div className={Styles.profielTitle}>
          Smart-think (design bedrijf) Juli 2019 – September 2019
          <div className={Styles.bold}>Werkzaamheden: </div>
          <div className={Styles.profielText}>
            <div>- Menu's, logo's, visitekaartjes en spaarpassen ontwerpen met Photoshop.</div>
            <div>- Designs omzetten naar websites met Wordpress, CSS, HTML en Javascript</div>
            <div>- Foto maak voor het eten</div>
          </div>
        </div>
        <div className={Styles.opleiding}>
          Opleiding
          <div className={Styles.buttons}>
          <button className={`${Styles.btn} ${Styles.mboBtn}`} onClick={() => handleClick(1)}>MBO</button>  
          <button className={`${Styles.btn} ${Styles.hboBtn}`} onClick={() => handleClick(0)}>HBO</button>
          </div>
        </div>
      </div>


      {isModalOpen && selectedOpleiding && (
        <div className={Styles.modal}>
          <div className={Styles.modalContent}>
            <h2>{selectedOpleiding.opleidingNaam}</h2>
            <p><strong>Niveau:</strong> {selectedOpleiding.niveau}</p>
            <p><strong>Datum:</strong> {selectedOpleiding.Tijd}</p>
            <p><strong>School:</strong> {selectedOpleiding.School}</p>
            <p><strong>Adres:</strong> {selectedOpleiding.Adres}</p>
            <button className={Styles.dichtBtn} onClick={dichtModal}>Dicht</button>
          </div>
        </div>
      )}
    </div>
  );
}   