import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./component/pages/errorPage/ErrorPage.jsx";
import Home from "./component/pages/home/Home.jsx";
import AuthProvider from "./component/provider/AuthProvider.jsx";
import SignUp from "./component/pages/sign/SignUp.jsx";
import SignIn from "./component/pages/sign/SignIn.jsx";
import DetailsCategory from "./component/pages/details/DetailsCategory.jsx";
import MenuPage from "./component/pages/menu/MenuPage.jsx";
import Shop from "./component/pages/shop/Shop.jsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "/signIn",
        element: <SignIn />
      },
      {
        path: "/details/:id",
        element: <DetailsCategory />
      },
      {
        path: "/menu",
        element: <MenuPage />
      },
      {
        path: "/shop",
        element: <Shop />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
