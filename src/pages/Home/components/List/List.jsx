import { Col, Row } from "react-grid-system";
import Item from "./components/Item";
import useGetProducts from "../../hooks/useGetProducts";
import useStore from "../../../../store";
import getFilteredProducts from "./getFilteredProducts";

const List = () => {
  const { products, isLoading, error } = useGetProducts();
  const { globalFilter } = useStore((state) => state);
  console.log(globalFilter);

  // filter products by global filter
  const filteredProducts = getFilteredProducts(products, globalFilter);

  console.log(filteredProducts);

  return (
    <div
      style={{
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <Row nogutter={true}>
        {filteredProducts.map((product) => (
          <Col xl={3} key={product.id}>
            <Item {...product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default List;
