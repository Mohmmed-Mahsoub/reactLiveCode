import {
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "@/components/layout/rootLayout/rootLayout.component";
import NotFound from "@/pages/notFound.page";
import Departments from "@/pages/departments.page";
import DepartmentDetails from "@/pages/departmentDetails.page";
import Login from "@/pages/login.page";
import { protectRoute } from "@/helpers/utilities/protectRoute";
import { useSelector } from "react-redux";

const AppRoutes = () => {
  const { isUserLogenedIn } = useSelector((state) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/departments" />,
    },
    {
      path: "/departments",
      element: <RootLayout />,
      loader: () => protectRoute(isUserLogenedIn, "departments"),

      children: [
        {
          path: "",
          element: <Departments />,
        },
        {
          path: "/departments/:id/",
          element: <DepartmentDetails />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
      loader: () => protectRoute(isUserLogenedIn, "login"),
    },
    {
      path: "/notFound",
      element: <NotFound />,
    },

    {
      path: "*",
      element: <Navigate to="/notFound" />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
