import styles from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.firstLine}>
        <div className={styles.firstLineInner}>
          <div>
            <span className={styles.contactUs}>
              <Link href="/contactUs">
                <a>contact Us</a>
              </Link>
            </span>
            <span className={styles.privacyPolicy}>
              <Link href="/privacyPolicy">
                <a>Privacy Policy</a>
              </Link>
            </span>
          </div>
          <div>
            <span>Language</span>
          </div>
        </div>
      </div>
      <div className={styles.secondLine}>ALL RIGHTS RESERVED &copy; ALLMANUAL.COM</div>
    </div>
  );
}
