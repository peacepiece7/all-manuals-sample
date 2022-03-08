import styles from "./LookingForManual.module.css";

export default function LookingForManual() {
  return (
    <div className={styles.lookingForManualContainer}>
      <div className={styles.textBox}>
        <div className={styles.title}>
          <h2>Isn't threr a manual you're looking for?</h2>
        </div>
        <div className={styles.descripion}>
          <div>Please tell us the brand and product name you want.</div>
          <div>Also, you can send us any suggestions about our site!</div>
        </div>
        <div className={styles.contactBtn}>
          <button>contact us</button>
        </div>
      </div>
      <div className={styles.imageBox}>
        <div>Manual _______</div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
