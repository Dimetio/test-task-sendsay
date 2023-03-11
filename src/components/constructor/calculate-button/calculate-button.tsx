import styles from "./calculate-button.module.css";

export default function CalculateButton(): JSX.Element {
  return (
    <div className={styles.calc}>
      <button className={`${styles["calc-button"]} button`}>=</button>
    </div>
  );
}
