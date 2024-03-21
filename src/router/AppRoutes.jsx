import {
  RouterProvider,
  Navigate,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "@/components/layout/rootLayout/rootLayout.component";
import NotFound from "@/pages/notFound.page";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,

      children: [],
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
