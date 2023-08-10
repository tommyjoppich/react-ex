import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  Link,
  Outlet,
} from "react-router-dom";
import CryptidDisplay from "./components/CryptidDisplay/CryptidDisplay.jsx";
import SingleCryptid from "./components/SingleCryptid/SingleCryptid.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Welcome CreepyPets'R'Us</h1>,
      },
      {
        path: "/aboutus",
        element: (
          <>
            <h1>Hello from the about us page</h1>
          </>
        ),
      },
      {
        path: "/contact",
        element: (
          <>
            <h1>From the contact page</h1>
          </>
        ),
      },
      {
        path: "/cryptids",
        element: <CryptidDisplay />,
      },
      {
        path: "/cryptids/:cryptidsId",
        element: <SingleCryptid />,
      },
    ],
  },
  {
    path: "/newPage",
    element: (
      <>
        <h1>You have got to a new page</h1>
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
