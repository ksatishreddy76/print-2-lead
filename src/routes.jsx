import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Portfolio from "./components/Portfolio";

const Home = React.lazy(() => import("./screens/Home"));
const Products = React.lazy(() => import("./screens/Products"));
const About = React.lazy(() => import("./screens/About"));
const Services = React.lazy(() => import("./screens/Services"));
const Contact = React.lazy(() => import("./screens/Contact"));

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "products",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Products />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "services",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Services />
            </Suspense>
          ),
        },
        {
          path: "contact",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          ),
        },
        {
          path: "my-profile",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Portfolio />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
