import styles from "./operators.module.css";
import { operators } from "../../../constants";
import {
  resultToNumberOne,
  setNumberOne,
  setOperator,
  setResult,
} from "../../../store/reducers/calculatorSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

export default function Operators(): JSX.Element {
  const { mode, numberOne, numberTwo, result } = useAppSelector(
    (store) => store.calculator
  );
  const dispatch = useAppDispatch();

  const handleClick = (operator: string) => {
    /* не реагировать, если режим конструктора */
    if (mode === "constructor") {
      return;
    }

    if (numberOne === "" && result === "0" && operator === "-") {
      dispatch(setNumberOne(operator));
      return;
    }

    if (numberOne === "") {
      dispatch(resultToNumberOne(operator));
    }

    if (numberOne !== "" && numberTwo !== "") {
      dispatch(setResult());
      dispatch(resultToNumberOne(operator));
    }

    dispatch(setOperator(operator));
  };

  return (
    <div className={styles.operators}>
      {operators.map((item) => (
        <button
          type="button"
          className="button opertator__item"
          key={item.operator}
          onClick={() => handleClick(item.operator)}
        >
          {item.operator}
        </button>
      ))}
    </div>
  );
}
