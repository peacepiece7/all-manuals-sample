import styles from "../../styles/brand.module.css";
import { useRouter } from "next/router";

import Layout from "../../components/Common/Layout/Layout";
import BrandDetailForm from "../../components/Brand/BrandDetailForm/BrandDetailForm";

export default function Brand() {
  const router = useRouter();
  const brandName = router.query.brand;
  return (
    <div className={styles.container}>
      <div>
        <Layout>
          <section className={styles.brandSection}>
            <BrandDetailForm brandName={brandName}></BrandDetailForm>
          </section>
        </Layout>
      </div>
    </div>
  );
}
