import Layout from "../../components/layout";
import Styles from "../../styles/block/profiel.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Profiel() {
  return (
    <Layout>
      <div className={Styles.container}>
        <div><Image src="/images/profile.jpg" alt="profile.jpg" width ={300} height={300}  className={Styles.image}/></div>
        <h1>hallo word</h1>
      </div>
    </Layout>
  );
}   