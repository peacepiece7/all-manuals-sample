import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./BrandCategoryForm.module.css";

// import BrandCategoryList from "../BrandCategoryList/BrandCategoryList";
import { useLoadCategoriesInBrand } from "../../../hooks/hooks";

function BrandCategoryForm() {
  const router = useRouter();
  const category = router.query.category ? router.query.category : "A";
  const subcategory = router.query.subcategory ? router.query.subcategory : "#";
  const { data, isLoading } = useLoadCategoriesInBrand(`${category}${subcategory}`);

  // prettier-ignore
  const categories = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "#"];
  // prettier-ignore
  const strSubcategories = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // prettier-ignore
  const numSubCategories = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "#"];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Brands</h1>
      </div>
      <div>
        <ul className={styles.category}>
          {categories.map((v, i) => {
            if (v === category) {
              return (
                <li key={v} className={styles.active}>
                  {v}
                </li>
              );
            } else {
              return (
                <Link href={{ pathname: "/brands", query: { category: v, subcategory: `#` } }}>
                  <li key={v} className={styles.inactive}>
                    {v}
                  </li>
                </Link>
              );
            }
          })}
        </ul>
        <div className={styles.borderLine}>
          <ul className={styles.subcategory}>
            {category === "#"
              ? numSubCategories.map((v, i) => {
                  if (v === subcategory) {
                    return (
                      <li key={category + v} className={styles.active}>
                        <a>{v}</a>
                      </li>
                    );
                  } else {
                    return (
                      <Link href={{ pathname: "/brands", query: { category, subcategory: v } }}>
                        <li key={category + v} className={styles.inactive}>
                          <a>{v}</a>
                        </li>
                      </Link>
                    );
                  }
                })
              : strSubcategories.map((v, i) => {
                  if (subcategory === v) {
                    return (
                      <li key={`${category}${v}${i}`} className={styles.active}>
                        <a>{category + v}</a>
                      </li>
                    );
                  } else {
                    return (
                      <Link href={{ pathname: "/brands", query: { category, subcategory: v } }}>
                        <li key={`${category}${v}${i}`} className={styles.inactive}>
                          <a>{category + v}</a>
                        </li>
                      </Link>
                    );
                  }
                })}
          </ul>
          {isLoading ? (
            <ul>Loading ...</ul>
          ) : (
            <ul className={styles.brands}>
              {data.brands.map((v, i) => {
                return <li key={category + subcategory + v + i}>{v}</li>;
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default BrandCategoryForm;
