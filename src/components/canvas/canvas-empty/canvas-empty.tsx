import styles from "./canvas-empty.module.css";

export default function CanvasEmpty() {
  return (
    <div className={styles["container-empty"]}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        fill="none"
      >
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="2"
          d="M18.778 1v4.444M21 3.222h-4.444M12.389 3.222H5a4 4 0 0 0-4 4v9.056M18.778 9.61V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-.722m0 0 3.838-3.838a4 4 0 0 1 5.657 0l4.394 4.393"
        />
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeWidth="2"
          d="m18.778 14.611-.505-.505a4 4 0 0 0-5.657 0l-.227.227"
        />
        <circle cx="12.111" cy="7.667" r=".556" fill="#000" />
      </svg>

      <h2 className={styles.title}>Перетащите сюда</h2>
      <p className={styles.text}>любой элемент из левой панели</p>
    </div>
  );
}
