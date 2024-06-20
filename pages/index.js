import Image from "next/image";
import Layout from "../components/layout";
import Styles from "../styles/Home.module.css"



export default function Home() {
  return (
    <div>
      <Layout home={true}>
        <main className={Styles.container}>
          <section className={Styles.block} id="profiel">
            <h1>Profiel</h1>
          </section>
          <section className={Styles.block} id="ervaring">
            <h1>Ervaring</h1>
          </section>
          <section className={Styles.block} id="vaardigheden">
            <h1>Vaardigheden</h1>
          </section>
          <section className={Styles.block} id="gegevens">
            <h1>Gegevens</h1>
          </section>
        </main>
      </Layout>
    </div>
  );
}
