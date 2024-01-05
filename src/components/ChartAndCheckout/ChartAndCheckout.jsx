import { Button } from "antd";
import Box from "../Box/Box";
import "./style.scss";
import useStore from "../../store";

const ChartAndCheckout = () => {
  const { getTotaPriceOfChart } = useStore((state) => state);

  return (
    <div className="chart-container">
      <Box title="Chart"></Box>
      <Box title="Checkout">
        <div className="price">
          Total Price: <span>{getTotaPriceOfChart()}$</span>
        </div>
        <Button type="primary" block>
          Checkout
        </Button>
      </Box>
    </div>
  );
};

export default ChartAndCheckout;
