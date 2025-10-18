import HomePage from "../Pages/HomePage";
import Rooms from "../Pages/RoomPages/Rooms";
import UpdateProfile from "../Pages/UserPages/UpdateProfile";
import Userlogin from "../Pages/UserPages/Userlogin";
import AppLayout from "../Components/Layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    Component: AppLayout,
    children: [
      {
        path: "room",
        Component: Rooms,
      },
      {
        path: "user",
        children: [
          {
            path: "profile",
            Component: UpdateProfile,
          },
        ],
      },
    ],
  },
  {
    path: "login",
    Component: Userlogin,
  },
]);
