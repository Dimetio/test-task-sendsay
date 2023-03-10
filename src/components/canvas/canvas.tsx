import styles from "./canvas.module.css";

export default function Canvas() {
  return (
    <section className={styles.canvas}>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.768 11.768A2.5 2.5 0 1 0 8.23 8.232a2.5 2.5 0 0 0 3.537 3.536Z"
              />
              <path
                stroke="#4D5562"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7.5 13.333 4.167 10 7.5 6.667m5 0L15.833 10 12.5 13.333"
              />
            </svg>
          </span>
          <span>Constructor</span>
        </button>
      </div>

      <div className={styles.container}>
        <div className={styles["container-empty"]}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="none"
          >
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-width="2"
              d="M18.778 1v4.444M21 3.222h-4.444M12.389 3.222H5a4 4 0 0 0-4 4v9.056M18.778 9.61V17a4 4 0 0 1-4 4H5a4 4 0 0 1-4-4v-.722m0 0 3.838-3.838a4 4 0 0 1 5.657 0l4.394 4.393"
            />
            <path
              stroke="#000"
              stroke-linecap="round"
              stroke-width="2"
              d="m18.778 14.611-.505-.505a4 4 0 0 0-5.657 0l-.227.227"
            />
            <circle cx="12.111" cy="7.667" r=".556" fill="#000" />
          </svg>

          <h2 className={styles.title}>Перетащите сюда</h2>
          <p className={styles.text}>любой элемент из левой панели</p>
        </div>
      </div>
    </section>
  );
}
