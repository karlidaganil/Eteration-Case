import { Col, Row } from "react-grid-system";
import Item from "./components/Item";
import useGetProducts from "../../hooks/useGetProducts";
import useStore from "../../../../store";
import getFilteredProducts from "./helpers/getFilteredProducts";
import Pagination from "../../../../components/Pagination/Pagination";
import "./style.scss";

const List = () => {
  const { products, isLoading, error } = useGetProducts();
  const { globalFilter } = useStore((state) => state);

  // filter products by global filter
  const filteredProducts = getFilteredProducts(products, globalFilter);

  return (
    <div className="list-container">
      <Row>
        <Pagination>
          {filteredProducts.map((product) => (
            <Col xl={3} lg={6} key={product.id}>
              <Item {...product} />
            </Col>
          ))}
        </Pagination>
      </Row>
    </div>
  );
};

export default List;
