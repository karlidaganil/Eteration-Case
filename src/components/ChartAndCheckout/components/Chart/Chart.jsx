import useStore from "../../../../store";
import Box from "../../../Box/Box";
import IncrementDecrement from "./components/IncrementDecrement/IncrementDecrement";
import "./style.scss";

const Chart = () => {
  const { chartList } = useStore((state) => state);

  const uniqueList = [
    ...new Set(
      chartList.sort((a, b) => a.order - b.order).map((item) => item.id)
    ),
  ]; // [ 'A', 'B']

  return (
    <Box title="Chart" className="height-unset">
      {uniqueList.map((product) => {
        const Item = chartList.find((item) => item.id === product);
        const quantity = chartList.filter((item) => item.id === product).length;
        const productPrice = parseFloat(Item.price) * quantity;
        return (
          <div key={product} className="chart-item-container">
            <div className="text-price-container">
              <div className="name">{Item.name}</div>
              <div className="price">{productPrice}$</div>
            </div>
            <IncrementDecrement quantity={quantity} id={Item.id} />
          </div>
        );
      })}
    </Box>
  );
};

export default Chart;
