import HomePage from "../Pages/HomePage";
import Rooms from "../Pages/RoomPages/Rooms";
import Userlogin from "../Pages/UserPages/Userlogin";
import AppLayout from "../Components/Layout/AppLayout";
import { createBrowserRouter } from "react-router-dom";
import UserProfile from "../Pages/UserPages/UserProfile";
import RoomInfo from "../Pages/RoomPages/RoomInfo";
import PageNotFound from "../Pages/AdditionalPages/PageNotFound";
import CreateRoom from "../Pages/RoomPages/CreateRoom";
import AdminDashboard from "../Pages/AdminPages/AdminDashboard";
import UserLogOut from "../Pages/UserPages/UserLogOut";
import ProfileUpdate from "../Pages/UserPages/ProfileUpdate";

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
      {
        path: "user/update",
        Component: ProfileUpdate,
      },
    ],
  },
  {
    path: "room/create",
    Component: CreateRoom,
  },
  {
    path: "login",
    Component: Userlogin,
  },
  {
    path: "logout",
    Component: UserLogOut,
  },
  {
    path: "admin",
    children: [
      {
        path: "dashboard",
        Component: AdminDashboard,
      },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);
