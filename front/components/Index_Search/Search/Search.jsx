import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.question}>
        <h2>What manual do you need?</h2>
      </div>
      <div className={styles.searchInner}>
        <form>
          <select defaultValue="product">
            <option value="product">Product</option>
            <option value="brand">Brand</option>
            <option value="category">Category</option>
          </select>
          <input type="text" placeholder="Search for manuals"></input>
          <div className={styles.submit}>
            <input type="submit" value="돋"></input>
          </div>
        </form>
      </div>
    </div>
  );
}
