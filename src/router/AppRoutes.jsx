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

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/departments" />,
    },
    {
      path: "/departments",
      element: <RootLayout />,

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
