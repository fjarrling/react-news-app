import {createBrowserRouter, RouterProvider} from "react-router";
import ROUTES from "../../router/index.ts";


const AppRouter = () => {
  const router = createBrowserRouter(ROUTES);
  return <RouterProvider router={router}/>;
};

export default AppRouter;