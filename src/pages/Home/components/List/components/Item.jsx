import { Button } from "antd";
import "./style.scss";

const Item = (props) => {
  const { name, price, image } = props;
  return (
    <div className="item-box">
      <div className="fake-img">
        <img src={image} />
      </div>
      <div className="price">{price}$</div>
      <div className="name">{name}</div>
      <Button type="primary">Add to Cart</Button>
    </div>
  );
};

export default Item;
