import styles from "./display.module.css";

export default function Display(): JSX.Element {
  return (
    <div className={styles.display}>
      <span className={styles.display__value}>0</span>
    </div>
  );
}
