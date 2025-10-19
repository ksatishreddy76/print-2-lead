import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        // Define child routes here
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
