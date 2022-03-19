import styles from "../styles/Home.module.css";

import { useQuery } from "react-query";

import { useLoadPopularbrands, useLoadPopularCategories } from "../hooks/hooks";

import Layout from "../components/Common/Layout/Layout";
import Search from "../components/Home/Search/Search";
import Detail from "../components/Home/Detail/Detail";
import PopularBrandsSection from "../components/Home/PopularBrands/PopularBrands";
import PopularCategoiesSection from "../components/Home/PopularCategories/PopularCategories";
import LookingForManual from "../components/Home/LookingForManual/LookingForManual";

export default function Home() {
  // ? await이 왜 필요없지 ? await useLoadPopularbrands() <- 제너레이터인가?
  // prettier-ignore
  const { data: brandData, isLoading: isBrandLoading, isError: isBrandError,isSuccess:isBrandSuccess } = useLoadPopularbrands()
  // prettier-ignore
  const {data : categoryData, isLoading : isCategoryLoading, isError : isCategoryError, isSuccess:isCategorySuccess} = useLoadPopularCategories()

  return (
    <>
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
              {isBrandLoading ? (
                <PopularBrandsSection brandData={false} />
              ) : (
                <PopularBrandsSection brandData={brandData.brands} />
              )}
            </section>
            <section className={styles.popularCategoiesSection}>
              {isCategoryLoading ? (
                <PopularCategoiesSection categoryData={false} />
              ) : (
                <PopularCategoiesSection categoryData={categoryData.categories} />
              )}
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
