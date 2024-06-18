import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import Image from 'next/image'

export default function about() {
  return (
    <Layout>
      <Head>
        <tile>Welkom to mijn pagina</tile>
      </Head>
      <h1>het is about pagina</h1>
     
    </Layout>
  );
}
