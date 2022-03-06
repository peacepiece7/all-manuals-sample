import styles from './PopularBrands.module.css';
import { faker } from '@faker-js/faker';

export default function PopularBrands() {
  return (
    <div className={styles.popularBrandsContainer}>
      <div className={styles.titleBox}>
        <div className={styles.title}>
          <span>Popular</span>
          <span>Brands</span>
        </div>
        <div classNmae={styles.viewMoreBox}>
          <span>{'View all >'}</span>
        </div>
      </div>
      <div className={styles.brandListBox}>
        <ul clssName={styles.brandList}>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
        </ul>
        <ul clssName={styles.brandList}>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
        </ul>
        <ul clssName={styles.brandList}>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
          <li>{faker.company.bsBuzz()}</li>
        </ul>
      </div>
    </div>
  );
}
