import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chats from "../../Pages/MessagingPages/Chats";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="px-5  py-5">
        <ToastContainer position="top-right" autoClose={5000} />
        <Outlet />
      </div>
      <Chats />
      <Footer />
    </>
  );
}
