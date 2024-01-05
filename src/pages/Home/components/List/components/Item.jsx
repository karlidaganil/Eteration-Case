import { Button } from "antd";
import "./style.scss";

const Item = () => {
  return (
    <div className="item-box">
      <div className="fake-img"></div>
      <div className="price">15.000$</div>
      <div className="name">iPhone 13 Pro Max 256Gb</div>
      <Button type="primary">Add to Cart</Button>
    </div>
  );
};

export default Item;
