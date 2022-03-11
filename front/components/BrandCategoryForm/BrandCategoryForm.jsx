import styles from "./BrandCategoryForm.module.css";

export default function BrandCategoryForm() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Brands</h1>
      </div>
      <div className={styles.categoryForm}></div>
    </div>
  );
}
