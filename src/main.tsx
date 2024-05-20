import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./pages/Signin/Signin";
import React from "react";
import App from "./pages/Home/App";

import "../src/assets/styles/index.css";
import Signup from "./pages/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
