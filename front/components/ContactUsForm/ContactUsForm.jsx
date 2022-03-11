import styles from "./ContactUsForm.module.css";

export default function ContactUsForm() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Contact us</h2>
      </div>
      <form className={styles.form}>
        <div>
          <h4>Email</h4>
          <input className={styles.emailForm} type="email" placeholder="Email address"></input>
        </div>
        <div>
          <h4>Comment or Message</h4>
          <textarea
            className={styles.textareaForm}
            type="textarea"
            placeholder="Please send us the brand and product name you want or any suggestions about our site."></textarea>
        </div>
        <div className={styles.submitBtn}>
          <button>Contact us</button>
        </div>
      </form>
    </div>
  );
}
