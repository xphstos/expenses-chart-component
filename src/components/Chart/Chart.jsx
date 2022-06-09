import classNames from "classnames";
import { numberFormat } from "../../utils";
import styles from "./Chart.module.scss";

export function Chart({ className, data }) {
  const max = data.reduce((acc, cur) => {
    if (cur.amount > acc) {
      acc = cur.amount;
    }
    return acc;
  }, 0);

  return (
    <div className={classNames(styles.chart, className)}>
      {data.map((value, index) => (
        <Bar
          key={`${value.day}_${index}`}
          value={value.amount}
          max={max}
          id={`${value.day}_${index}`}
          label={value.day}
        />
      ))}
    </div>
  );
}

const Bar = ({ max, value, id, label }) => (
  <div className={styles.chartColumn}>
    <div
      className={classNames(styles.chartBar, {
        [`${styles.chartBarMax}`]: max === value,
      })}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      aria-labelledby={id}
      style={{ "--value": `${(value / max) * 100}%` }}
    >
      <div className={styles.chartTooltip}>{numberFormat(value)}</div>
    </div>
    <div className={styles.chartLabel} id={id}>
      {label}
    </div>
  </div>
);
