import Head from "next/head";
import styles from "../styles/PrivacyPolicy.module.css";

import Layout from "../components/Common/Layout/Layout";
import PolicyForm from "../components/PolicyForm/PolicyForm";

export default function PorivarcyPolicy() {
  return (
    <div>
      <head>
        <Head>
          <title>All manual - Privacy policy</title>
          <meta name="description" content="all manual privacy policy" />
        </Head>
      </head>
      <div>
        <Layout>
          <section>
            <PolicyForm></PolicyForm>
          </section>
        </Layout>
      </div>
    </div>
  );
}
