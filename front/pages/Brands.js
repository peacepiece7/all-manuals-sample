import Head from "next/head";
import styles from "../styles/Brands.module.css";

import Layout from "../components/Layout/Layout";
import BrandCategoryForm from "../components/BrandCategoryForm/BrandCategoryForm";

export default function Brands() {
  return (
    <div className={styles.container}>
      <head>
        <Head>
          <title>All Manuals - brand category</title>
          <meta name="description" content="all manual category page - brand" />
        </Head>
      </head>
      <div>
        <Layout>
          <section>
            <BrandCategoryForm></BrandCategoryForm>
          </section>
        </Layout>
      </div>
    </div>
  );
}
