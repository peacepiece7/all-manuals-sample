import styles from "./Search.module.css";
import Image from "next/image";
import searchGlass from "../../../public/search_2.png";
import { useCallback, useRef } from "react";

export default function Search() {
  const imageInput = useRef();

  const onClickSubmitImage = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);
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
            <Image src={searchGlass} onClick={onClickSubmitImage}></Image>
            <input type="submit" hidden ref={imageInput} name="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
