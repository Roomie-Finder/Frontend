import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="px-5 sm:px-15 py-5">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
