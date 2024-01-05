import { Button } from "antd";
import Box from "../Box/Box";
import "./style.scss";

const ChartAndCheckout = () => {
  return (
    <div className="chart-container">
      <Box title="Chart"></Box>
      <Box title="Checkout">
        <div className="price">
          Total Price: <span>117.000$</span>
        </div>
        <Button type="primary" block>
          Checkout
        </Button>
      </Box>
    </div>
  );
};

export default ChartAndCheckout;
