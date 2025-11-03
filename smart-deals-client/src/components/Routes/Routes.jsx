import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Home/Home";
import AllProducts from "../AllProducts/AllProducts";
import Register from "../Register/Register";
import Login from "../Login/Login";
import MyProducts from "../MyProducts/MyProducts";
import MyBids from "../MyBids/MyBids";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        Component: AllProducts,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login
      },
      {
        path: "/myProducts",
        element: <MyProducts></MyProducts>
      },
      {
        path: "/myBids",
        element: <MyBids></MyBids>
      }
    ],
  },
]);