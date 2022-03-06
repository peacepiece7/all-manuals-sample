import styles from './PopularCategories.module.css';
import { faker } from '@faker-js/faker';

// * swiper만들어서 category이동하도록?
// * width에 맞춰서 회면에 load되는 li개수를 조정?
// * overflow hidden은 안됨 그러면 안보이는 category생김

export default function PopularCategoies() {
  return (
    <div className={styles.popularCategoiesContainer}>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <span>Popular</span>
          <span>Categories</span>
        </div>
      </div>
      <div className={styles.categoryListBox}>
        <ul>
          <li>
            <img className={styles.categoyIcon} src={faker.image.food(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.technics(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.city(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.nature(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.cats(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.fashion(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.food(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.food(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.technics(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.city(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.nature(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.cats(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.fashion(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
          <li>
            <img className={styles.categoyIcon} src={faker.image.food(60, 60)}></img>
            <div>{faker.lorem.word()}</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
