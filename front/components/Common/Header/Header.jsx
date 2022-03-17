import styles from "./Header.module.css";
import Link from "next/link";
import Image from "next/image";
import allManual from "../../../public/all_manual.png";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.titleInner}>
        <div className={styles.title}>
          <Link href="/">
            <a>
              <Image className={styles.titleImage} src={allManual} alt="AllManual" />
            </a>
          </Link>
        </div>
        <div className={styles.topMenus}>
          <span className={styles.categoies}>
            <Link href="/categories">
              <a>Categories</a>
            </Link>
          </span>
          <span className={styles.brands}>
            <Link href={{ pathname: "/brands", query: { category: "A", subcategory: "#" } }}>
              <a>Brands</a>
            </Link>
          </span>
        </div>
      </div>
      <div className={styles.language}>
        <span>Languages</span>
        <span>{"(지구본)"}</span>
      </div>
    </div>
  );
}
