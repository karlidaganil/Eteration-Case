import { Col, Row } from "react-grid-system";
import Item from "./components/Item";
import useGetProducts from "../../hooks/useGetProducts";
import useStore from "../../../../store";

const List = () => {
  const { products, isLoading, error } = useGetProducts();
  const { globalFilter } = useStore((state) => state);
  console.log(globalFilter);

  // filter products by global filter
  const filteredProducts = products.filter((item) => {
    const modelFilter =
      globalFilter.models.length > 0
        ? globalFilter.models.includes(item.model)
        : true;

    const brandFilter =
      globalFilter.brands.length > 0
        ? globalFilter.brands.includes(item.brand)
        : true;

    const searchFilter = globalFilter.searchKey
      ? item.name.toLowerCase().includes(globalFilter.searchKey.toLowerCase())
      : true;

    return modelFilter && brandFilter && searchFilter;
  });

  console.log(filteredProducts);

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
