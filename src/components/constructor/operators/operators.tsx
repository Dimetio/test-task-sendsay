import styles from "./operators.module.css";

export default function Operators(): JSX.Element {
  return (
    <div className={styles.operators}>
      <button type="button" className="button opertator__item">
        /
      </button>
      <button type="button" className="button opertator__item">
        x
      </button>
      <button type="button" className="button opertator__item">
        -
      </button>
      <button type="button" className="button opertator__item">
        +
      </button>
    </div>
  );
}
