import Head from "next/head";
import styles from "../styles/Home.module.css";

import { useQuery } from "react-query";

import { loadPopularCategories, loadPopularBrands } from "../apis/apis";

import Layout from "../components/Layout/Layout";
import Search from "../components/Index_Search/Search/Search";
import Detail from "../components/Index_Search/Detail/Detail";
import PopularBrandsSection from "../components/PopularBrands/PopularBrands";
import PopularCategoiesSection from "../components/PopularCategories/PopularCategories";
import LookingForManual from "../components/LookingForManual/LookingForManual";

export default function Home() {
  // prettier-ignore
  const { data: brandData, isLoading: isBrandLoading, isError: isBrandError,isSuccess:isBrandSuccess } = useQuery("brands", loadPopularBrands);
  // prettier-ignore
  const {data : categoryData, isLoading : isCategoryLoading, isError : isCategoryError, isSuccess:isCategorySuccess} = useQuery("category",loadPopularCategories )

  console.log("popular Brand success", isBrandSuccess);
  console.log("popular category success", isCategorySuccess);
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
