import styles from "./constructor.module.css";

import CalculateButton from "./calculate-button/calculate-button";
import Display from "./display/display";
import Numbers from "./numbers/numbers";
import Operators from "./operators/operators";

export default function Constructor(): JSX.Element {
  return (
    <section className={`${styles.constructor}`}>
      <Display />

      <Operators />

      <Numbers />

      <CalculateButton />
    </section>
  );
}
