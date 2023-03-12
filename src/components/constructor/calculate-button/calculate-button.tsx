import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { reset, setResult } from "../../../store/reducers/calculatorSlice";
import styles from "./calculate-button.module.css";

export default function CalculateButton(): JSX.Element {
  const { mode, operator, numberOne, numberTwo } = useAppSelector(
    (store) => store.calculator
  );
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (mode === "constructor") {
      return;
    }

    if (numberOne === "" || numberTwo === "" || operator === "") {
      dispatch(reset());
      return;
    }

    dispatch(setResult());
  };

  return (
    <div className={styles.calc}>
      <button
        className={`${styles["calc-button"]} button`}
        onClick={() => handleClick()}
      >
        =
      </button>
    </div>
  );
}
