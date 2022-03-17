import styles from "../styles/Brands.module.css";

import Layout from "../components/Common/Layout/Layout";
import BrandCategoryForm from "../components/Brands/BrandCategoryForm/BrandCategoryForm";

export default function Brands() {
  return (
    <div className={styles.container}>
      <div>
        <Layout>
          <section className={styles.brandSection}>
            <BrandCategoryForm></BrandCategoryForm>
          </section>
        </Layout>
      </div>
    </div>
  );
}
