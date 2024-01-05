import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../pages/Home";
import Detail from "../../pages/Detail";
import "./style.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <Detail />,
  },
]);

const Main = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default Main;
