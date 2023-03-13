import { useAppSelector } from "../../../store/hooks";
import styles from "./display.module.css";

export default function Display(): JSX.Element {
  const { numberOne, numberTwo, operator, result, resultView, mode } =
    useAppSelector((store) => store.calculator);

  const currentValue = () => {
    if (mode === "constructor") {
      return "0";
    }
    if (resultView) {
      return result;
    }

    if (operator === "" || numberTwo === "") {
      return numberOne;
    }

    return numberTwo;
  };

  /* на 0 делить нельзя */
  const resultInfinity = (value: string) => {
    if (Number(value) === Infinity) {
      return "Не определено";
    }

    return value;
  };

  return (
    <div className={styles.display}>
      <span className={styles.display__value}>
        {resultInfinity(currentValue())}
      </span>
    </div>
  );
}
