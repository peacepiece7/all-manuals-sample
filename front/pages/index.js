import Head from "next/head";
import styles from "../styles/Home.module.css";

import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Search from "../components/Index_Search/Search/Search";
import Detail from "../components/Index_Search/Detail/Detail";
import PopularBrandsSection from "../components/PopularBrands/PopularBrands";
import PopularCategoiesSection from "../components/PopularCategories/PopularCategories";
import LookingForManual from "../components/LookingForManual/LookingForManual";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>All Manuals</title>
        <meta name="description" content="Support all manual sheets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header></Header>
      </header>
      <main className={styles.main}>
        <Layout>
          <section className={styles.searchSection}>
            <Search></Search>
          </section>
          <section className={styles.detailSection}>
            <Detail></Detail>
          </section>
          <section className={styles.popularBrandsSection}>
            <PopularBrandsSection />
          </section>
          <section className={styles.popularCategoiesSection}>
            <PopularCategoiesSection />
          </section>
          <section className={styles.LookingForManualSection}>
            <LookingForManual />
          </section>
        </Layout>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  );
}
