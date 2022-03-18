import styles from "../styles/search.module.css";

import Layout from "../components/Common/Layout/Layout";
import SearchList from "../components/Search/SearchList/SearchList";
import SideMenu from "../components/Search/SideMenu/SideMenu";

export default function search() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Layout>
          <div className={styles.sideMenu}>
            <SideMenu></SideMenu>
          </div>
          <section className={styles.saerchSection}>
            <SearchList></SearchList>
          </section>
        </Layout>
      </div>
    </div>
  );
}
