import styles from "./PopularCategories.module.css";
import { faker } from "@faker-js/faker";

// * swiper만들어서 category이동하도록?
// * width에 맞춰서 회면에 load되는 li개수를 조정?
// * overflow hidden은 안됨 그러면 안보이는 category생김

export default function PopularCategoies() {
  return (
    <div className={styles.popularCategoiesContainer}>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <span>Category</span>
        </div>
        {/* <div classNmae={styles.moreLink}>{"View all >"}</div> */}
      </div>
      <div className={styles.categoryListBox}>
        <div className={styles.categoryListInner}>
          <ul>
            <li>
              <img className={styles.categoyIcon} src={faker.image.food(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.technics(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.city(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.nature(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.cats(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.fashion(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.food(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.food(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.technics(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.city(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.nature(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.cats(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.fashion(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
            <li>
              <img className={styles.categoyIcon} src={faker.image.food(80, 80)}></img>
              <div>{faker.lorem.words()}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
