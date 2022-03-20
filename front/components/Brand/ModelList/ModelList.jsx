import styles from "./ModelList.module.css";

export default function ModelList({ models }) {
  console.log(models);
  return (
    <ul className={styles.container}>
      {models ? (
        models.map((v, i) => {
          if (i % 2 === 0) {
            return (
              <li className={styles.pair} key={v.id}>
                <div className={styles.model}>{v.modelName}</div>
                <div className={styles.doctypeBox}>
                  {v.items.map((v) => {
                    return <a src={v.url}>{v.doctype}</a>;
                  })}
                </div>
              </li>
            );
          } else {
            return (
              <li key={v.id}>
                <div className={styles.model}>{v.modelName}</div>
                <div className={styles.doctypeBox}>
                  {v.items.map((v) => {
                    return <a src={v.url}>{v.doctype}</a>;
                  })}
                </div>
              </li>
            );
          }
        })
      ) : (
        <li>No data</li>
      )}
    </ul>
  );
}
