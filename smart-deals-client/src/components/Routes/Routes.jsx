import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../Home/Home";
import AllProducts from "../AllProducts/AllProducts";
import Register from "../Register/Register";
import Login from "../Login/Login";
import MyProducts from "../MyProducts/MyProducts";
import MyBids from "../MyBids/MyBids";
import ProductDetails from "../ProductDetails/ProductDetails";
import PrivateRoute from "./PrivateRoute";
import CreateAProduct from "../CreateAProduct/CreateAProduct";

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
        element: <PrivateRoute>
          <AllProducts></AllProducts>
        </PrivateRoute>,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/myProducts",
        element: <PrivateRoute>
          <MyProducts></MyProducts>
        </PrivateRoute>,
      },
      {
        path: "/myBids",
        element: <PrivateRoute>
          <MyBids></MyBids>
        </PrivateRoute>,
      },
      {
        path: "/productDetails/:id",
        loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
        element: <PrivateRoute>
          <ProductDetails></ProductDetails>
        </PrivateRoute>
      },
      {
        path: "/createAProduct",
        element: <PrivateRoute>
          <CreateAProduct></CreateAProduct>
        </PrivateRoute>
      }
    ],
  },
]);
