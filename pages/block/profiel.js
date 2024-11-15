import Styles from "../../styles/block/profiel.module.css";
import Image from "next/image";


export default function Profiel() {
  return (
    <div>
      <div className={Styles.container}>
        <div><Image src="/images/profile.jpg" alt="profile.jpg" width ={300} height={300}  className={Styles.image}/></div>
        <div className={Styles.profielTitle}>
          <div>Hoi, Ik ben Xavier,</div><div>een software developer,</div>  <div>woont in Den Haag.</div>
          <div className={Styles.profielText}>
           <div>Een Hbo-student in haagse hogeschool, met ruime ervaring in teamwerk.</div>
           <div>Gepassioneerde programmeerstudent met uitstekende creativiteit en verbeeldingskracht en een sterke interesse in softwareontwikkeling.</div>
           <div>Ik streef ernaar mijn kennis en vaardigheden in te zetten om waarde toe te voegen aan elke organisatie waarmee ik samenwerk.</div>
          
          </div>
        </div>
        
      </div>
    </div>
  );
}   