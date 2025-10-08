import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "./index.css";
import Root from "./assets/components/Root";
import Home from "./Home";
import Apps from "./assets/components/Apps";
import AppDeatails from "./assets/components/AppDeatails";
import InstalledApps from "./assets/components/InstalledApps";
import ErrorPage from "./assets/components/ErrorPage";
import ErrorApdetails from "./assets/components/ErrorApdetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: Home },
      { path: "/apps", Component: Apps },
      { path: "/installation", Component: InstalledApps },

      {
        path: "/appdetails/:id",
        loader: () => fetch("/appdata20.json").then((res) => res.json()),
        Component: AppDeatails,
        errorElement: <ErrorApdetails></ErrorApdetails>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
