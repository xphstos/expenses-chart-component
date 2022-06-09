import Card from "./components/Card/Card";
import { Chart } from "./components/Chart/Chart";
import Title from "./components/Title/Title";
import Logo from "./images/logo.svg?component";
import styles from "./scss/App.module.scss";
import data from "./data.json";
import "./scss/style.scss";
import { useState } from "react";
import { numberFormat, randomNumberRange } from "./utils";

function App() {
  const [chartData, setChartData] = useState(data);
  const [balance, setBalance] = useState(921.48);
  const [totalThisMonth, setTotalThisMonth] = useState(478.33);
  const [previousMonthDifference, setPreviousMonthDifference] = useState(2.4);
  const [previousMonthDifferenceSign, setPreviousMonthDifferenceSign] =
    useState("+");

  const randomizeData = () => {
    const newData = chartData.map((value) => ({
      ...value,
      amount: randomNumberRange(20, 90),
    }));
    setChartData(newData);
    setBalance(randomNumberRange(700, 999));
    setTotalThisMonth(randomNumberRange(300, 800));
    setPreviousMonthDifference(randomNumberRange(1, 9));
    setPreviousMonthDifferenceSign(() => (Math.random() > 0.5 ? "+" : "-"));
  };

  return (
    <>
      <Card title="My balance" theme="orange" className={styles.balance}>
        <header>
          <Title as="h1" className={styles.balanceTitle}>
            My balance
          </Title>
          <div className={styles.balanceValue}>{numberFormat(balance, 5)}</div>
        </header>
        <Logo className="test" onClick={randomizeData} />
      </Card>
      <Card title="Last 7 days overview" theme="pale-orange">
        <header>
          <Title as="h1" className={styles.spendingTitle}>
            Spending - Last 7 days
          </Title>
        </header>
        <Chart data={chartData} className={styles.spendingChart} />
        <footer>
          <Title as="h2" className={styles.spendingTotalTitle}>
            Total this month
          </Title>
          <div className={styles.spendingTotalOverview}>
            <div className={styles.spedingTotalValue}>
              {numberFormat(totalThisMonth, 5)}
            </div>
            <div className={styles.spedingTotalValuePrevious}>
              {`${previousMonthDifferenceSign}${numberFormat(
                previousMonthDifference,
                3
              )}%`}
              <small>from last month</small>
            </div>
          </div>
        </footer>
      </Card>
    </>
  );
}

export default App;
