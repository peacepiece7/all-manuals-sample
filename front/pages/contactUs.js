import Head from "next/head";
import styles from "../styles/contactUs.module.css";

import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Footer from "../components/Footer/Footer";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <header>
        <Head>
          <title>All Manuals</title>
          <meta name="description" content="Support all manual sheets" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header></Header>
      </header>
      <main>
        <Layout>
          <section className={styles.contactUsForm}></section>
        </Layout>
      </main>
      <footer className={styles.footer}>
        <Footer></Footer>
      </footer>
    </div>
  );
}
