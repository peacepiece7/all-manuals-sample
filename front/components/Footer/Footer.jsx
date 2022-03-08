import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.firstLine}>
        <div className={styles.firstLineInner}>
          <div>
            <span className={styles.contactUs}>
              <a>contact Us</a>
            </span>
            <span className={styles.privacyPolicy}>
              <a>Privacy Policy</a>
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
