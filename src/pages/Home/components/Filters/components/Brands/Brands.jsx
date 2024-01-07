import { Checkbox, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import Box from "../../../../../../components/Box/Box";

import "./style.scss";
import useStore from "../../../../../../store";
import { useState } from "react";

const Brands = () => {
  const { productList, setGlobalFilter, globalFilter } = useStore(
    (state) => state
  );
  const [searchValue, setSearchValue] = useState("");

  // find unique brands
  const uniqueBrands = [...new Set(productList.map((item) => item.brand))].map(
    (brand) => {
      return {
        label: brand,
        value: brand,
      };
    }
  );

  // filter brands
  const filteredBrands = uniqueBrands.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onChange = (checkedValues) => {
    setGlobalFilter({ brands: checkedValues });
  };
  return (
    <Box title="Brands">
      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="overFlow-container">
        <Checkbox.Group
          className="checkbox-vertical"
          options={filteredBrands}
          onChange={onChange}
          value={globalFilter.brands}
        />
      </div>
    </Box>
  );
};

export default Brands;
