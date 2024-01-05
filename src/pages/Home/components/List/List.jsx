import { Col, Row } from "react-grid-system";
import Item from "./components/Item";
import useGetProducts from "../../hooks/useGetProducts";

const List = () => {
  const { products, isLoading, error } = useGetProducts();
  console.log(products);
  return (
    <div
      style={{
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <Row nogutter={true}>
        {products.map((product) => (
          <Col xl={3} key={product.id}>
            <Item {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default List;
