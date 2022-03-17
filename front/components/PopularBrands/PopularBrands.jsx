import styles from "./PopularBrands.module.css";
import Link from "next/link";

export default function PopularBrands({ brandData }) {
  return (
    <div className={styles.popularBrandsContainer}>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <span>Popular</span>
          <span>Brands</span>
        </div>

        <div className={styles.viewAll}>
          <Link href="brands/A#">
            <div>{"View all >"}</div>
          </Link>
        </div>
      </div>
      <div className={styles.brandListBox}>
        {brandData ? (
          <ul className={styles.brandList}>
            {brandData.map((v, i) => {
              return <li key={i + v}>{`· ${v}`}</li>;
            })}
          </ul>
        ) : (
          <div className={styles.isLoading}>loading...</div>
        )}
      </div>
    </div>
  );
}
