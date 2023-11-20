import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddProduct from "./AddProduct";
import ProductList from "./ProductList";
import { default as SignUpCustomer } from "./SignupCustomer";
import SignUpEmp from "./SignupEmp";

const router = createBrowserRouter([
  {
    path: "/cadastrar-cliente",
    element: <SignUpCustomer />,
  },
  {
    path: "/cadastrar-func",
    element: <SignUpEmp />,
  },
  {
    path: "/",
    element: <AddProduct />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
