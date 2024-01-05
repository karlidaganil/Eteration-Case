import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

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
  return <RouterProvider router={router} />;
};

export default Main;
