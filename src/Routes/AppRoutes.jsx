import HomePage from "../Pages/HomePage";
import Rooms from "../Pages/RoomPages/Rooms";
import Userlogin from "../Pages/UserPages/Userlogin";
import AppLayout from "../Components/Layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import UserProfile from "../Pages/UserPages/UserProfile";
import RoomInfo from "../Pages/RoomPages/RoomInfo";
import PageNotFound from "../Pages/AdditionalPages/PageNotFound";
import CreateRoom from "../Pages/RoomPages/CreateRoom";

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
        path: "room/:roomid",
        Component: RoomInfo,
      },
      {
        path: "user/:userid",
        Component: UserProfile,
      },
    ],
  },
  {
    path: "login",
    Component: Userlogin,
  },
  {
    path: "createRoom",
    Component: CreateRoom,
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);
