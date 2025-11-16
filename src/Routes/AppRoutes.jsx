import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../Layout/AppLayout";
import PageLoader from "../Layout/PageLoader";

const PageNotFound = lazy(() =>
  import("../Pages/AdditionalPages/PageNotFound")
);
const HomePage = lazy(() => import("../Pages/HomePage"));
const Rooms = lazy(() => import("../Pages/RoomPages/Rooms"));
const AboutUs = lazy(() => import("../Pages/AdditionalPages/AboutUs"));
const RoomInfo = lazy(() => import("../Pages/RoomPages/RoomInfo"));
const UserProfile = lazy(() => import("../Pages/UserPages/UserProfile"));
const CreateRoom = lazy(() => import("../Pages/RoomPages/CreateRoom"));
const AdminDashboard = lazy(() => import("../Pages/AdminPages/AdminDashboard"));
const Login = lazy(() => import("../Pages/Login/Login"));
const LogOut = lazy(() => import("../Pages/Login/LogOut"));
const ProfileUpdate = lazy(() => import("../Pages/UserPages/ProfileUpdate"));

export const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: HomePage,
  },
  {
    Component: AppLayout,
    children: [
      {
        path: "room",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Rooms />
          </Suspense>
        ),
      },
      {
        path: "room/:roomid",
        element: (
          <Suspense fallback={<PageLoader />}>
            <RoomInfo />
          </Suspense>
        ),
      },
      {
        path: "room/create",
        element: (
          <Suspense fallback={<PageLoader />}>
            <CreateRoom />
          </Suspense>
        ),
      },
      {
        path: "user/:userid",
        element: (
          <Suspense fallback={<PageLoader />}>
            <UserProfile />
          </Suspense>
        ),
      },
      {
        path: "user/update",
        element: (
          <Suspense fallback={<PageLoader />}>
            <ProfileUpdate />
          </Suspense>
        ),
      },
      {
        path: "aboutus",
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutUs />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<PageLoader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "logout",
    element: (
      <Suspense fallback={<PageLoader />}>
        <LogOut />
      </Suspense>
    ),
  },
  {
    path: "admin",
    children: [
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<PageLoader />}>
            <AdminDashboard />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
