import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import AppLayout from "./Components/Layouts/AppLayout";
import HomePage from "./Components/HomePage";
import Rooms from "./Components/RoomComponents/Rooms";
import UpdateProfile from "./Components/UserComponents/UpdateProfile";

const router = new createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    Component: AppLayout,
    children: [
      {
        path: "/room",
        Component: Rooms,
      },
      { path: "/user/profile", Component: UpdateProfile },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
