import { Checkbox, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import Box from "../Box/Box";

import "./style.scss";

const options = [
  {
    label: "11",
    value: "Apple",
  },
  {
    label: "12 Pro",
    value: "Pear",
  },
  {
    label: "13 Pro Max",
    value: "Orange",
  },
];
const Model = () => {
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <Box title="Model">
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

export default Model;
