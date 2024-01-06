import { Button } from "antd";
import Box from "../../../Box/Box";
import useStore from "../../../../store";

const Checkout = () => {
  const { getTotaPriceOfChart } = useStore((state) => state);

  return (
    <Box title="Checkout">
      <div className="price">
        Total Price: <span>{getTotaPriceOfChart()}$</span>
      </div>
      <Button type="primary" block>
        Checkout
      </Button>
    </Box>
  );
};

export default Checkout;
