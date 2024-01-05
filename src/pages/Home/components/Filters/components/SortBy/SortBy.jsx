import { useState } from "react";
import { Radio, Space } from "antd";
import Box from "../Box/Box";

const SortBy = () => {
  const [value, setValue] = useState(1);
  const onChange = (e) => setValue(e.target.value);

  return (
    <Box title="Sort By">
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={1}>Old to new</Radio>
          <Radio value={2}>New to old</Radio>
          <Radio value={3}>Price hight to low</Radio>
          <Radio value={3}>Price low to High </Radio>
        </Space>
      </Radio.Group>
    </Box>
  );
};

export default SortBy;
