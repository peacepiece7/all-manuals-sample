import React from "react";
import styles from "./BrandCategoryForm.module.css";
function BrandCategoryForm() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Brands</h1>
      </div>
      <div className={styles.categoryForm}>
        <a href="/Brands/A#">A#</a>
        <br></br>
        <a href="/Brands/AA">AA</a>
        <br></br>
        <a href="/Brands/AB">AB</a>
        <br></br>
        <a href="/Brands/AC">AC</a>
      </div>
    </div>
  );
}

export default BrandCategoryForm;
