import styles from "./switch.module.css";

export default function Switch() {
  return (
    <div className={styles.switch}>
      <button type="button" className={`${styles["switch-button"]} button`}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              stroke="#4D5562"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.768 11.768A2.5 2.5 0 1 0 8.23 8.232a2.5 2.5 0 0 0 3.537 3.536Z"
            />
            <path
              stroke="#4D5562"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M2.048 10a8.337 8.337 0 0 1 15.904 0 8.336 8.336 0 0 1-15.904 0Z"
            />
          </svg>
        </span>
        <span>Runtime</span>
      </button>
      <button
        type="button"
        className={`${styles["switch-button"]} ${styles["switch-button-active"]} button`}
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
          >
            <path
              stroke="#5D5FEF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7.5 13.333 4.167 10 7.5 6.667m5 0L15.833 10 12.5 13.333"
            />
          </svg>
        </span>
        <span>Constructor</span>
      </button>
    </div>
  );
}
