import { Checkbox, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import Box from "../../../../../../components/Box/Box";

import "./style.scss";
import useStore from "../../../../../../store";

const Brands = () => {
  const { productList } = useStore((state) => state);

  // find unique brands
  const uniqueBrands = [...new Set(productList.map((item) => item.brand))].map(
    (brand) => {
      return {
        label: brand,
        value: brand,
      };
    }
  );

  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
  return (
    <Box title="Brands">
      <Input placeholder="Search" prefix={<SearchOutlined />} />
      <div className="overFlow-container">
        <Checkbox.Group
          className="checkbox-vertical"
          options={uniqueBrands}
          defaultValue={["Pear"]}
          onChange={onChange}
        />
      </div>
    </Box>
  );
};

export default Brands;
