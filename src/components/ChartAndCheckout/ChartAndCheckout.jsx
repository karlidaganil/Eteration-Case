import "./style.scss";
import Checkout from "./components/Checkout/Checkout";
import Chart from "./components/Chart/Chart";

const ChartAndCheckout = () => {
  return (
    <div className="chart-container">
      <Chart />
      <Checkout />
    </div>
  );
};

export default ChartAndCheckout;
