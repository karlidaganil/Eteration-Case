import { useParams } from "react-router-dom";
import ChartAndCheckout from "../../components/ChartAndCheckout/ChartAndCheckout";
import "./style.scss";
import DetailCard from "./components/DetailCard/DetailCard";
import useStore from "../../store";

const Detail = () => {
  let { id } = useParams();
  const { productList } = useStore((state) => state);
  const product = productList.find((product) => product.id === id);

  return (
    <div className="detail-container">
      <DetailCard {...product} />
      <ChartAndCheckout />
    </div>
  );
};

export default Detail;
