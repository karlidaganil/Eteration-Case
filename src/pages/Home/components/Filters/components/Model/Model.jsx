import { Checkbox, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import Box from "../../../../../../components/Box/Box";

import "./style.scss";
import useStore from "../../../../../../store";
import { useState } from "react";

const Model = () => {
  const { productList, setGlobalFilter, globalFilter } = useStore(
    (state) => state
  );
  const [searchValue, setSearchValue] = useState("");

  // find unique models
  const uniqueModels = [...new Set(productList.map((item) => item.model))].map(
    (model) => {
      return {
        label: model,
        value: model,
      };
    }
  );

  // filter models
  const filteredModels = uniqueModels.filter((item) =>
    item.label.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onChange = (checkedValues) =>
    setGlobalFilter({ models: checkedValues });

  return (
    <Box title="Model">
      <Input
        placeholder="Search"
        prefix={<SearchOutlined />}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div className="overFlow-container">
        <Checkbox.Group
          className="checkbox-vertical"
          options={filteredModels}
          onChange={onChange}
          value={globalFilter.models}
        />
      </div>
    </Box>
  );
};

export default Model;
