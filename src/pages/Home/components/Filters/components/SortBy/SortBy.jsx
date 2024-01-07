import { Radio, Space } from "antd";
import Box from "../../../../../../components/Box/Box";
import useStore from "../../../../../../store";
import SortByEnum from "../../../../../../enums/sortByEnum";

const SortBy = () => {
  const { setGlobalFilter, globalFilter } = useStore((state) => state);

  const onChange = (e) => {
    setGlobalFilter({ sortBy: e.target.value });
  };

  return (
    <Box title="Sort By">
      <Radio.Group onChange={onChange} value={globalFilter.sortBy}>
        <Space direction="vertical">
          <Radio value={SortByEnum.NEWEST}>New to old</Radio>
          <Radio value={SortByEnum.OLDEST}>Old to new</Radio>
          <Radio value={SortByEnum.HIGHEST}>Price hight to low</Radio>
          <Radio value={SortByEnum.LOWEST}>Price low to High </Radio>
        </Space>
      </Radio.Group>
    </Box>
  );
};

export default SortBy;
