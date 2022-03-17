import React, { useCallback, useState } from "react";
import Link from "next/link";
import styles from "./BrandCategoryForm.module.css";

import { useQuery } from "react-query";

import { loadBrandCategories } from "../../apis/apis";

function BrandCategoryForm() {
  const [selected, isSelected] = useState("A");
  const [subSelected, isSubSelected] = useState("#");
  const { data, isLoading, isSuccess } = useQuery(["brand category", subSelected], loadBrandCategories(subSelected));

  // prettier-ignore
  const categories = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0-#"];
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
          {categories.map((v) => {
            if (v === selected) {
              return (
                <li id={v} className={styles.active}>
                  {v}
                </li>
              );
            } else {
              return (
                <Link href={`/brands/${v}#`}>
                  <li className={styles.inactive} id={v}>
                    {v}
                  </li>
                </Link>
              );
            }
          })}
        </ul>
        <div className={styles.borderLine}>
          <ul className={styles.subcategory}>
            {selected == "0-#"
              ? numSubCategories.map((v) => {
                  if (v === subSelected) {
                    return (
                      <li className={styles.active} id={selected + v}>
                        <a>{selected + v}</a>
                      </li>
                    );
                  } else {
                    return (
                      <Link herf={`/brands/${selected + v}`}>
                        <li className={styles.inactive} id={selected + v}>
                          <a>{selected + v}</a>
                        </li>
                      </Link>
                    );
                  }
                })
              : strSubcategories.map((v) => {
                  if (v === subSelected) {
                    return (
                      <li className={styles.active} id={selected + v}>
                        <a>{selected + v}</a>
                      </li>
                    );
                  } else {
                    return (
                      <Link href={`${selected + v}`}>
                        <li className={styles.inactive} id={selected + v}>
                          <a>{selected + v}</a>
                        </li>
                      </Link>
                    );
                  }
                })}
          </ul>
          <ul className={styles.brands}></ul>
        </div>
      </div>
    </div>
  );
}

export default BrandCategoryForm;
