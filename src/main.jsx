import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./Home.jsx";
import Contact from "./Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/test-router/",
    element: <App />,
    children: [
      {
        path: "/test-router/",
        element: <Home />,
      },
      {
        path: "a",
        element: <Contact />,
      },
    ],
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
