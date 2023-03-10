import styles from "./numbers.module.css";

export default function Numbers(): JSX.Element {
  return (
    <div className="wrapper">
      <div className={styles.numbers}>
        <button type="button" className={`${styles.number__item} button`}>
          7
        </button>
        <button type="button" className={`${styles.number__item} button`}>
          8
        </button>
        <button type="button" className={`${styles.number__item} button`}>
          9
        </button>
        <button type="button" className={`${styles.number__item} button`}>
          4
        </button>
        <button type="button" className={`${styles.number__item} button`}>
          5
        </button>
        <button type="button" className={`${styles.number__item} button`}>
          6
        </button>
        <button type="button" className={`${styles.number__item} button`}>
          1
        </button>
        <button type="button" className={`${styles.number__item} button`}>
          2
        </button>
        <button type="button" className={`${styles.number__item} button`}>
          3
        </button>
        <button type="button" className={`${styles.number__item} button`}>
          0
        </button>
        <button type="button" className={`${styles.number__item} button`}>
          ,
        </button>
      </div>
    </div>
  );
}
