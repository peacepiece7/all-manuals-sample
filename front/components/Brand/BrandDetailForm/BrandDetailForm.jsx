import styles from "./BrandDetailForm.module.css";
import faker from "@faker-js/faker";

import { useLoadAllSubcategoriesInBrand, useLoadModelsInSubcategory } from "../../../hooks/hooks";
import { useState } from "react";

import ModelList from "../ModelList/ModelList";

export default function BrandDetailForm({ brandName }) {
  const [query, setQuery] = useState(null);

  const barndList = [{ brand: "3D printers" }, { brand: "carmera" }, { brand: "laptop" }];
  const { data: subcategoriesData, isLoading: subcategoriesIsLoading } = useLoadAllSubcategoriesInBrand(brandName);
  const {
    data: modelsData,
    isLoading: modelsDataIsLoading,
    isSuccess: modelsDataIsSuccess,
  } = useLoadModelsInSubcategory(query);

  const handleMoreBtnClick = (e) => {
    setQuery(() => e.target.id);
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>{brandName}</h1>
        <div className={styles.titleInfo}>
          <img src={faker.image.cats(30, 15)} />
          <div>2,213 categories</div>
        </div>
        <div className={styles.titleInfo}>
          <img src={faker.image.cats(30, 15)} />
          <div>213,162 manuals</div>
        </div>
      </div>
      <section className={styles.categoriesBox}>
        <div className={styles.categoriesTitle}>Categories</div>
        <ul className={styles.categoriesList}>
          {subcategoriesIsLoading ? (
            <div>Loading ... </div>
          ) : (
            subcategoriesData.subcategories.map((v) => {
              return <li key={v.id}>{v.subcategory}</li>;
            })
          )}
        </ul>
      </section>
      <section className={styles.cateoryFlyout}>
        <ul className={styles.flyoutBox}>
          {barndList.map((v) => {
            return (
              <li key={v.brand}>
                <div className={styles.flyoutBoxHeader}>
                  <h3>{v.brand}</h3>
                  <div onClick={handleMoreBtnClick} className={styles.moreBtn}>
                    <button id={v.brand}>more</button>
                  </div>
                </div>
                <div className={styles.flyoutBoxContent}>
                  {modelsDataIsSuccess && modelsData.subcategory === v.brand ? (
                    <ModelList models={modelsData.models} />
                  ) : (
                    <></>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
