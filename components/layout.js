import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const name = 'Xavier Chen';
export const siteTitle = 'Xavier profiel website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/images/profile.jpg" />
        <meta
          name="description"
          content="het is xavier profiel web"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="author" content={name}></meta>
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Navbar />
          </>
        ) : (
          <>
          </>
        )}
      </header>
      <main>{children}</main>
      <Footer /> 
    </div>
  );
}