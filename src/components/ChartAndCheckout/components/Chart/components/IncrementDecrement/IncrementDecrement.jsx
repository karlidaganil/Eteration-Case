import useStore from "../../../../../../store";
import "./style.scss";

const IncrementDecrement = ({ quantity, id }) => {
  const { incrementQuantity, decrementQuantity } = useStore((state) => state);

  return (
    <div className="increment-decrement-container">
      <span className="aritmetic" onClick={() => decrementQuantity(id)}>
        -
      </span>
      <span className="count">{quantity}</span>
      <span className="aritmetic" onClick={() => incrementQuantity(id)}>
        +
      </span>
    </div>
  );
};

export default IncrementDecrement;
