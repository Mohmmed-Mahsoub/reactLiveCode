import {
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "@/components/layout/rootLayout/rootLayout.component";
import Home from "@/pages/home.page";
import About from "@/pages/about.page";
import NotFound from "@/pages/notFound.page";
import Unauthorized from "@/pages/unauthorized";
import ServerError from "@/pages/serverError.page";
import Login from "@/pages/login.page";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "/notFound",
      element: <NotFound />,
    },
    {
      path: "/unauthorized",
      element: <Unauthorized />,
    },
    {
      path: "/serverError",
      element: <ServerError />,
    },
    {
      path: "*",
      element: <Navigate to="/notFound" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
