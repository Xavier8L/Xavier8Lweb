import Head from 'next/head';
import Image from 'next/image';
import Styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import SideNavbar from './sideNavbar';

const name = 'Xavier Chen';
export const siteTitle = 'Xavier profiel website';

export default function Layout({ children, home }) {
  return (
    <div className={Styles.container}>
      <Head>
        <link rel="icon" href="/images/profile.jpg" />
        <meta
          name="description"
          content="het is xavier profiel web"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="author" content={name}></meta>
      </Head>
      <header className={Styles.header}>
        {home ? (
          <>
            {/* <Navbar /> */}
            <SideNavbar />
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