import Head from "next/head";
import styles from "../styles/contactUs.module.css";

import Layout from "../components/Layout/Layout";
import ContactUsForm from "../components/ContactUsForm/ContactUsForm";

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <head>
        <Head>
          <title>All Manuals - contact us</title>
          <meta name="description" content="Support manuals" />
        </Head>
      </head>
      <div>
        <Layout>
          <section>
            <ContactUsForm />
          </section>
        </Layout>
      </div>
    </div>
  );
}
