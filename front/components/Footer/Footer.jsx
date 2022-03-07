import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={styles.firstLine}>
        <div>
          <div className={styles.contactUs}>
            <a>contact Us</a>
          </div>
          <div className={styles.privacyPolicy}>
            <a>Privacy Policy</a>
          </div>
        </div>
        <div>Language</div>
      </div>
      <div className={styles.secondLine}>ALL RIGHTS RESERVED &copy; ALLMANUAL.COM</div>
    </div>
  );
}
