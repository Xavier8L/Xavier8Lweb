import Image from "next/image";
import Layout from "../components/layout";
import Styles from "../styles/Home.module.css";
import Profiel from "./block/profiel";
import Ervaring from "./block/ervaring";
import Vaardigheden from "./block/vaardigheden";
import Contact from "./block/contact";
import Projecten from "./block/projecten";

const sections = [
  { id: "profiel", title: "Profiel",  pagina: Profiel },
  { id: "ervaring", title: "Werkervaring", pagina:Ervaring },
  { id: "vaardigheden", title: "Vaardigheden", pagina:Vaardigheden  },
  { id: "projecten", title: "Projecten", pagina: Projecten},
  { id: "contact", title: "Contact" , pagina:Contact},
];




export default function Home() {
  return (
    <div>
      <Layout home={true}>
        <main className={Styles.container}> 
          {sections.map((section) => (
            <section className={ `${Styles.block} ${ section.id === "contact" ? Styles.contact: "" }`} id={section.id} key={section.id}>
              {section.pagina ? (
                <>
                <h1 className={Styles.title}>{section.title}</h1>
                <br></br>
                <section.pagina />
                </>  
              ) : (
                <h1 className={Styles.title}>{section.title}</h1>
              )}
            </section>
          ))}
        </main>
      </Layout>
    </div>
  );
}
