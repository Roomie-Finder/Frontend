import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AppRoutes } from "./Routes/AppRoutes";
import "./index.css";
import "swiper/css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={AppRoutes}></RouterProvider>
  </StrictMode>
);
