import React from "react";

// importing
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, ContactPage, FeaturesPage, HomePage } from "./component";
const ReactRouter = () => {
  // STEP - 1: Create a createBrowserRouter() and pass routes array
  const router = createBrowserRouter([
    // Step - 2: create a path(where to route) and element(which component to render on path)
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {
      path: "/contact-us",
      element: <ContactPage />,
    },
    {
      path: "/features",
      element: <FeaturesPage />,
    },
    {
      path: "*",
      element: <>404 Not Found</>,
    },
  ]);

  // Step 3: Create a RouteProvider and pass router props
  return <RouterProvider router={router} />;
};

export default ReactRouter;
