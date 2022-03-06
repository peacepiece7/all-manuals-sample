import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Layout from '../components/Layout/Layout';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Search from '../components/Index_Search/Search/Search';
import Detail from '../components/Index_Search/Detail/Detail';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>All Manuals</title>
        <meta name='description' content='Support all manual sheets' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header>
        <Header></Header>
      </header>
      <main className={styles.main}>
        <Layout>
          <section className={styles.searchSection}>
            <Search></Search>
            <Detail></Detail>
          </section>
          <section className={styles.popularBrandsSection}>Popular Brands Section</section>
          <section className={styles.popularCategoiesSection}>Pupular Categories Section</section>
          <section className={styles.contactUs}>Contact Us</section>
        </Layout>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  );
}
