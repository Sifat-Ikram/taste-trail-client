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
import PrivateRouter from "./component/private router/PrivateRouter.jsx";
import Dashboard from "./component/pages/dashboard/Dashboard.jsx";
import AllUsers from "./component/pages/admin_router/users/AllUsers.jsx";
import AddFood from "./component/pages/admin_router/addFood/AddFood.jsx";
import ManageFood from "./component/pages/admin_router/manage_food/ManageFood.jsx";
import ManageBookings from "./component/pages/admin_router/manage_bookings/ManageBookings.jsx";
import UpdateFood from "./component/pages/admin_router/update_food/UpdateFood.jsx";
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
        element: <PrivateRouter><Shop /></PrivateRouter>
      }
    ],
  },
  {
    path: "/dashboard",
    element:<PrivateRouter><Dashboard></Dashboard></PrivateRouter>,
    children: [
      {
        path: "/dashboard/allUser",
        element: <AllUsers />
      },
      {
        path: "/dashboard/addFood",
        element: <AddFood />
      },
      {
        path: "/dashboard/manageFood",
        element: <ManageFood />
      },
      {
        path: "/dashboard/manageBookings",
        element: <ManageBookings />
      },
      {
        path: "/dashboard/updateFood/:id",
        element: <UpdateFood />
      },
    ]
  }
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
