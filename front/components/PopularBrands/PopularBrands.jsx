import styles from "./PopularBrands.module.css";
import Link from "next/link";
import { faker } from "@faker-js/faker";

export default function PopularBrands() {
  return (
    <div className={styles.popularBrandsContainer}>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <span>Popular</span>
          <span>Brands</span>
        </div>
        <div className={styles.viewAll}>
          <Link href="Brands">
            <div>{"View all >"}</div>
          </Link>
        </div>
      </div>
      <div className={styles.brandListBox}>
        <ul className={styles.brandList}>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
          <li>· {faker.company.bsBuzz()}</li>
        </ul>
      </div>
    </div>
  );
}
