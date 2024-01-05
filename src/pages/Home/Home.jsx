import ChartAndCheckout from "../../components/ChartAndCheckout/ChartAndCheckout";
import Filters from "./components/Filters/Filters";
import List from "./components/List/List";
import "./style.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Filters />
      <List />
      <ChartAndCheckout />
    </div>
  );
};

export default Home;
