import { Outlet } from "react-router";
import Navbar from "./Header_Footer/Navbar";
import Footer from "./Header_Footer/Footer";
import "../../Styles/index.css";

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
