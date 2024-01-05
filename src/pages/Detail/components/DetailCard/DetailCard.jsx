import { Button } from "antd";
import "./style.scss";

const DetailCard = (props) => {
  const { name, price, description, image } = props;
  return (
    <div className="detail-card-container">
      <div className="img">
        <img src={image} alt="product" />
      </div>
      <div className="info-container">
        <div className="name">{name}</div>
        <div className="price">{price}$</div>
        <Button type="primary">Add to Cart</Button>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default DetailCard;
