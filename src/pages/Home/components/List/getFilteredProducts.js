import sortByEnum from "../../../../enums/sortByEnum";

const getFilteredProducts = (products, globalFilter) => {
  return products
    .filter((item) => {
      const modelFilter =
        globalFilter.models.length > 0
          ? globalFilter.models.includes(item.model)
          : true;

      const brandFilter =
        globalFilter.brands.length > 0
          ? globalFilter.brands.includes(item.brand)
          : true;

      const searchFilter = globalFilter.searchKey
        ? item.name.toLowerCase().includes(globalFilter.searchKey.toLowerCase())
        : true;

      return modelFilter && brandFilter && searchFilter;
    })
    .sort((a, b) => {
      if (globalFilter.sortBy === sortByEnum.HIGHEST) {
        return parseFloat(b.price) - parseFloat(a.price);
      } else if (globalFilter.sortBy === sortByEnum.LOWEST) {
        return parseFloat(a.price) - parseFloat(b.price);
      } else if (globalFilter.sortBy === sortByEnum.NEWEST) {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else if (globalFilter.sortBy === sortByEnum.OLDEST) {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        return a.id - b.id;
      }
    });
};

export default getFilteredProducts;
