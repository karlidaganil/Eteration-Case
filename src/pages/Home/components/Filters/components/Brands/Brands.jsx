import { Checkbox, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import Box from "../../../../../../components/Box/Box";

import "./style.scss";

const options = [
  {
    label: "Apple",
    value: "Apple",
  },
  {
    label: "Pear",
    value: "Pear",
  },
  {
    label: "Orange",
    value: "Orange",
  },
  {
    label: "Apple",
    value: "Apple1",
  },
  {
    label: "Pear",
    value: "Pear2",
  },
  {
    label: "Orange",
    value: "Orange3",
  },
];
const Brands = () => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <Box title="Brands">
      <Input placeholder="Search" prefix={<SearchOutlined />} />
      <div className="overFlow-container">
        <Checkbox.Group
          className="checkbox-vertical"
          options={options}
          defaultValue={["Pear"]}
          onChange={onChange}
        />
      </div>
    </Box>
  );
};

export default Brands;
