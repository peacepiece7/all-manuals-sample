import React, { useCallback, useState } from "react";
import styles from "./BrandCategoryForm.module.css";
import faker from "@faker-js/faker";
function BrandCategoryForm() {
  const [selected, isSelected] = useState("A");
  const [subSelected, isSubSelected] = useState("#");
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
                <li className={styles.inactive} id={v}>
                  {v}
                </li>
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
                      <li className={styles.inactive} id={selected + v}>
                        <a>{selected + v}</a>
                      </li>
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
                      <li className={styles.inactive} id={selected + v}>
                        <a>{selected + v}</a>
                      </li>
                    );
                  }
                })}
          </ul>
          <ul className={styles.brands}>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
            <li>{faker.company.companyName()}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BrandCategoryForm;
