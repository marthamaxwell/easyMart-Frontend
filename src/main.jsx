import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/layout.jsx";
import HomePage from "./pages/homePage.jsx";

import LoginPage from "./pages/loginPage.jsx";
import SignupPage from "./pages/signupPage.jsx";
import ProductPage from "./pages/productPage.jsx";
import CartPage from "./pages/cartPage.jsx";
import ResetPasswordPage from "./pages/resetPasswordPage.jsx";

import { AuthContextProvider } from "./components/context/authContext.jsx";
import TestComp from "./components/login/test.jsx";
import AdminPage from "./pages/AdminPage.jsx";

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
        path: "/singleProduct/:productId",
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

      {
        path: "/test",
        element: <TestComp />,
      },
    ],
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
    path: "/admin",
    element: <AdminPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  </React.StrictMode>
);
