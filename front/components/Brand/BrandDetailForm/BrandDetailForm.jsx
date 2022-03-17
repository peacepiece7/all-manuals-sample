import styles from "./BrandDetailForm.module.css";
import faker from "@faker-js/faker";
import { useQuery } from "react-query";

export default function BrandDetailForm({ brandName }) {
  const barndList = [{ brand: "3D printers" }, { brand: "carmera" }, { brand: "laptop" }];
  const { data, isLoading } = useQuery(["categoryModels", null], { enabled: true }); // queries폴더 만들자...
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
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
          <li>{faker.lorem.words()}</li>
        </ul>
      </section>
      <section className={styles.cateoryFlyout}>
        <ul className={styles.flyoutBox}>
          {barndList.map((v) => {
            return (
              <li>
                <h3>{v.brand}</h3>
                <div className={styles.moreBtn}>more</div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
