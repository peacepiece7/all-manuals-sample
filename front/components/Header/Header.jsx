import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.title}>
        <h1>all manuals</h1>
      </div>
      <div className={styles.topMenus}>
        <div className={styles.categoies}>category</div>
        <div className={styles.brands}>brands</div>
      </div>
      <div className={styles.language}>Languages</div>
    </div>
  );
}
