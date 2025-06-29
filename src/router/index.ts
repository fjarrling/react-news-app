import Home from "@/pages/Home/Home.tsx";
import type {RouteObject} from "react-router";
import ErrorPage from "@/pages/ErrorPage/ErrorPage.tsx";
import NewsPage from "@/pages/NewsPage/NewsPage.tsx";


const ROUTES: RouteObject[] = [
  {
    path: "/",
    Component: Home
  },
  {
    path: "/news/:id",
    Component: NewsPage
  },
  {
    path: "*",
    Component: ErrorPage
  }
]

export default ROUTES