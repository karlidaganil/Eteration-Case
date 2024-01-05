import Brands from "./components/Brands/Brands";
import Model from "./components/Model/Model";
import SortBy from "./components/SortBy/SortBy";

const Filters = () => {
  return (
    <div>
      <SortBy />
      <Brands />
      <Model />
    </div>
  );
};

export default Filters;
