import Styles from "../../styles/block/ervaring.module.css";

export default function Ervaring() {
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
      </div>
    </div>
  );
}   