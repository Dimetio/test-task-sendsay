import styles from "./numbers.module.css";
import { symbols } from "../../../constants";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import {
  setDecimal,
  setNumberOne,
  setNumberTwo,
} from "../../../store/reducers/calculatorSlice";

export default function Numbers(): JSX.Element {
  const { mode, decimal, operator } = useAppSelector(
    (store) => store.calculator
  );
  const dispatch = useAppDispatch();

  const handleCLick = (value: string) => {
    /* не реагировать, если режим конструктора */
    if (mode === "constructor") {
      return;
    }

    /* планируется дробное число */
    if (value === "," && decimal === false) {
      dispatch(setDecimal(true));
    }

    /* не реагировать на еще одну запятую */
    if (value === "," && decimal === true) {
      return;
    }

    /* набирается первое число */
    if (operator === "") {
      dispatch(setNumberOne(value));
      return;
    }

    /* набирается второе число и уже есть какой-то оператор */
    dispatch(setNumberTwo(value));
  };

  return (
    <div className={styles.numbers}>
      {symbols.map((item) => (
        <button
          type="button"
          key={item.symbol}
          className={`${styles.number__item} button`}
          onClick={() => handleCLick(item.symbol)}
        >
          {item.symbol}
        </button>
      ))}
    </div>
  );
}
