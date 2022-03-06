import styles from './Detail.module.css';
import { faker } from '@faker-js/faker';

export default function Detail() {
  return (
    <div className={styles.DetailContainer}>
      <div className={styles.brandBox}>
        <div className={styles.imageBox}>
          <div>
            <img src={faker.image.animals(50, 50)}></img>
          </div>
        </div>
        <div>Brands</div>
        <p>144,444+</p>
      </div>
      <div className={styles.productBox}>
        <div className={styles.imageBox}>
          <div>
            <img src={faker.image.sports(50, 50)}></img>
          </div>
        </div>
        <div>Products</div>
        <p>3,244,444+</p>
      </div>
      <div className={styles.manualBox}>
        <div className={styles.imageBox}>
          <div>
            <img src={faker.image.technics(50, 50)}></img>
          </div>
        </div>
        <div>Manuals</div>
        <p>5,244,444+</p>
      </div>
    </div>
  );
}
