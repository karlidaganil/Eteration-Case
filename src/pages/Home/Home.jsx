import Chart from "./components/Chart/Chart";
import Filters from "./components/Filters/Filters";
import List from "./components/List/List";
import "./style.scss";

const Home = () => {
  return (
    <div className="home-container">
      <Filters />
      <List />
      <Chart />
    </div>
  );
};

export default Home;
