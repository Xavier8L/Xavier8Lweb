import Layout from "../../components/layout";
import Styles from "../../styles/block/profiel.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Profiel() {
  return (
    <div>
      <div className={Styles.container}>
        <div><Image src="/images/profile.jpg" alt="profile.jpg" width ={300} height={300}  className={Styles.image}/></div>
        <div className={Styles.profielText}>Ik ben een Hbo-student in Nederland, met ruime ervaring in teamwerk. Ik ben geboren in China en woon al  7 jaar in Nederland. Ik heb een passie voor softwareontwikkeling, ben goed in probleemoplossing en denk graag vanuit verschillende perspectieven om uitdagingen aan te pakken en innovatieve oplossingen te vinden.</div>
      </div>
    </div>
  );
}   