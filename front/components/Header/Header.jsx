import styles from "./Header.module.css";
import Image from "next/image";
import allManual from "../../public/allManual.png";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleInner}>
        <div className={styles.title}>
          <Image className={styles.titleImage} src={allManual} alt="AllManual"></Image>
        </div>
        <div className={styles.topMenus}>
          <span className={styles.categoies}>Categories</span>
          <span className={styles.brands}>Brands</span>
        </div>
      </div>
      <div className={styles.language}>
        <span>Languages</span>
        <span>{"(지구본)"}</span>
      </div>
    </div>
  );
}
