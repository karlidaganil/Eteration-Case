import { useState } from "react";
import { Radio, Space } from "antd";
import Box from "../../../../../../components/Box/Box";
import sortByEnum from "../../../../../../enums/sortByEnum";
import useStore from "../../../../../../store";

const SortBy = () => {
  const { setGlobalFilter, globalFilter } = useStore((state) => state);

  const onChange = (e) => {
    setGlobalFilter({ sortBy: e.target.value });
  };

  return (
    <Box title="Sort By">
      <Radio.Group onChange={onChange} value={globalFilter.sortBy}>
        <Space direction="vertical">
          <Radio value={sortByEnum.NEWEST}>New to old</Radio>
          <Radio value={sortByEnum.OLDEST}>Old to new</Radio>
          <Radio value={sortByEnum.HIGHEST}>Price hight to low</Radio>
          <Radio value={sortByEnum.LOWEST}>Price low to High </Radio>
        </Space>
      </Radio.Group>
    </Box>
  );
};

export default SortBy;
