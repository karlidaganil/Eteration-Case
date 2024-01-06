import { Checkbox, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import Box from "../../../../../../components/Box/Box";

import "./style.scss";
import useStore from "../../../../../../store";

const Model = () => {
  const { productList } = useStore((state) => state);

  // find unique brands
  const uniqueModels = [...new Set(productList.map((item) => item.model))].map(
    (model) => {
      return {
        label: model,
        value: model,
      };
    }
  );
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <Box title="Model">
      <Input placeholder="Search" prefix={<SearchOutlined />} />
      <div className="overFlow-container">
        <Checkbox.Group
          className="checkbox-vertical"
          options={uniqueModels}
          defaultValue={["Pear"]}
          onChange={onChange}
        />
      </div>
    </Box>
  );
};

export default Model;
