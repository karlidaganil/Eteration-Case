import { Button } from "antd";
import useStore from "../store";

const Home = () => {
  const bears = useStore((state) => state.bears);
  const addABear = useStore((state) => state.addABear);

  return (
    <div>
      {bears} bears
      <Button type="primary" onClick={addABear}>
        adasd
      </Button>
    </div>
  );
};

export default Home;
