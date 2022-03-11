import styles from "./Layout.module.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <header>
        <Header></Header>
      </header>
      <main className={styles.Layout}>{props.children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
