import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../../page/Home/Home";
import Contactus from "../../page/Contact/Contactus";
import Main from "../../layout/Main";

import Aboutus from "../../page/About/Aboutus";
import Signin from "../default/Signin/Signin";
import Signup from "../default/Signup/Signup";
import ErrorElement from "../../common/ErrorElement/ErrorElement";

import Order from "../../page/Order/Order";
import Products from "../../page/Products/Products";
import ProductDetails from "../../page/Products/Product/ProductDetails";



const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorElement />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/home",

          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contactus />,
        },
        {
          path: "/about",
          element: <Aboutus />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/category/:category",
          element: <Products />,
        },

        {
          path: "/products/product-details/:id",
          element: <ProductDetails />,
          loader: async ({ params }) => {
            return fetch(`https://fakestoreapi.com/products/${params.id}`);
          },
        },
        {
          path: "/login",
          element: <Signin />,
        },
      
        {
          path: "/signup",
          element: <Signup />,
        },
      
        {
          path: "/order",
          element: <Order />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;
