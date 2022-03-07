import styles from "./LookingForManual.module.css";

export default function LookingForManual() {
  return (
    <div className={styles.lookingForManualContainer}>
      <div>
        <div className={styles.title}>
          <h2>Isn't threr a manual you're looking for?</h2>
        </div>
        <div className={styles.descripion}>
          <span>Please tell us the brand and product name you want.</span>
          <span>Also, you can send us any suggestions about our site!</span>
        </div>
        <div className={styles.button}>
          <button>contact us</button>
        </div>
      </div>
      <div>
        <span>image section!</span>
      </div>
    </div>
  );
}
