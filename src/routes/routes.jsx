import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Service from "../pages/Service";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import ServiceDetails from "../pages/ServiceDetails";
import PrivateRoute from "../provider/Private";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/services",
        element: <Service />,
      },
      {
        path: "service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),

        loader: () => fetch("/services.json"),
      },

      {
        path: "/profile",
        element: <MyProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);
