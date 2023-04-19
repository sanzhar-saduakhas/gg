import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { UserRating } from "./components/UserRating";
import { GlobalRating } from "./components/GlobalRating";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/user_rating", 
    element: <UserRating />
  }, 
  {
    path: "/global_rating",
    element: <GlobalRating />
  }
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
