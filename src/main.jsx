import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./assets/components/About/About";
import Contact from "./assets/components/Contact/Contact";
import Home from "./assets/components/Home/Home";
import Fast from "./assets/components/Fast/Fast";
import Friends from "./assets/components/Friends/Friends";
import FriendDetailes from "./assets/components/FriendDetailes/FriendDetailes";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Fast></Fast>,
      },
      {
        path: "/friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "friend/:friendId",
        element: <FriendDetailes></FriendDetailes>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "about",
        element: <About></About>,
      },
      { path: "contact", element: <Contact></Contact> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
