import { Col, Row } from "react-grid-system";
import Item from "./components/Item";

const List = () => {
  return (
    <div
      style={{
        paddingLeft: "30px",
        paddingRight: "30px",
      }}
    >
      <Row nogutter={true}>
        <Col xl={3}>
          <Item />
        </Col>
        <Col xl={3}>
          <Item />
        </Col>
        <Col xl={3}>
          <Item />
        </Col>
        <Col xl={3}>
          <Item />
        </Col>
        <Col xl={3}>
          <Item />
        </Col>
      </Row>
    </div>
  );
};

export default List;
