import { Button } from "antd";
import Box from "../../../Box/Box";
import useStore from "../../../../store";

const Checkout = () => {
  const { getTotaPriceOfChart, setCheckout, chartList } = useStore(
    (state) => state
  );
  return (
    <Box title="Checkout">
      <div className="price">
        Total Price: <span>{getTotaPriceOfChart()}$</span>
      </div>
      <Button
        type="primary"
        block
        onClick={setCheckout}
        disabled={chartList.length === 0}
      >
        Checkout
      </Button>
    </Box>
  );
};

export default Checkout;
