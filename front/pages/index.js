import Head from "next/head";
import styles from "../styles/Home.module.css";

import Layout from "../components/Layout/Layout";
import Search from "../components/Index_Search/Search/Search";
import Detail from "../components/Index_Search/Detail/Detail";
import PopularBrandsSection from "../components/PopularBrands/PopularBrands";
import PopularCategoiesSection from "../components/PopularCategories/PopularCategories";
import LookingForManual from "../components/LookingForManual/LookingForManual";

export default function Home() {
  return (
    <>
      <head>
        <Head>
          <title>All Manuals - Home</title>
          <meta name="description" content="Support all manual sheets" />
        </Head>
      </head>
      <div className={styles.container}>
        <div className={styles.main}>
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
        </div>
      </div>
    </>
  );
}
