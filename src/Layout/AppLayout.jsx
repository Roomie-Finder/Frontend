import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Chats from "../Pages/MessagingPages/Chats";

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <div className="px-5  py-5">
        <Outlet />
      </div>
      <Chats />
      <Footer />
    </>
  );
}
