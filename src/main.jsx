import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout.jsx";
import HomePage from "./pages/homePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import LoginPage from "./pages/loginPage.jsx";
import SignupPage from "./pages/signupPage.jsx";
import ProductPage from "./pages/productPage.jsx";
import CartPage from "./pages/cartPage.jsx";
import ResetPasswordPage from "./pages/resetPasswordPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },

      {
        path: "/products",
        element: <ProductsPage />,
      },

      {
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/signup",
        element: <SignupPage />,
      },

      {
        path: "/products/:id",
        element: <ProductPage />,
      },

      {
        path: "/cart",
        element: <CartPage />,
      },

      {
        path: "/resetpassword",
        element: <ResetPasswordPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
