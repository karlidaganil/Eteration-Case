import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./style.scss";
import useStore from "../../../../../store";

const Item = (props) => {
  const { name, price, image, id } = props;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/${id}`);
  };
  const { addToChart } = useStore((state) => state);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToChart(props);
  };
  return (
    <div className="item-box" onClick={handleClick}>
      <div className="fake-img">
        <img src={image} />
      </div>
      <div className="price">{price}$</div>
      <div className="name">{name}</div>
      <Button type="primary" onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Item;
