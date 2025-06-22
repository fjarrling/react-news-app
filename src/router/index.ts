import Home from "@/pages/Home/Home.tsx";
import type {RouteObject} from "react-router";
import ErrorPage from "@/pages/ErrorPage/ErrorPage.tsx";


const ROUTES: RouteObject[] = [
  {
    path: "/",
    Component: Home
  },
  {
    path: "*",
    Component: ErrorPage
  }
]

export default ROUTES