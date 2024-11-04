import Image from "next/image";
import Layout from "../components/layout";
import Styles from "../styles/Home.module.css";
import Profiel from "./block/profiel"
import Ervaring from "./block/ervaring"

const sections = [
  { id: "profiel", title: "Profiel",  pagina: Profiel },
  { id: "ervaring", title: "Ervaring", pagina:Ervaring },
  { id: "vaardigheden", title: "Vaardigheden" },
  { id: "product", title: "Product" },
  { id: "gegevens", title: "Gegevens" },
];




export default function Home() {
  return (
    <div>
      <Layout home={true}>
        <main className={Styles.container}>
          {sections.map((section) => (
            <section className={Styles.block} id={section.id} key={section.id}>
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
