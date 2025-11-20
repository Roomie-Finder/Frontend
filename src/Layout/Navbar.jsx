import { useNavigate, useLocation } from "react-router-dom";
import {
  HomeIcon,
  RoomsIcon,
  ProfileIcon,
  RegisterIcon,
  InfoIcon,
  LogOutIcon,
} from "./Icons";
import Dock from "@/components/lightswind/dock";
import { ToggleTheme } from "../components/lightswind/ToggleTheme";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  let localUser = null;
  let jwtdecoded = null;
  try {
    const userString = localStorage.getItem("user");
    if (userString) {
      localUser = JSON.parse(userString);
      if (
        localUser &&
        typeof localUser.token === "string" &&
        localUser.token.length > 0
      ) {
        jwtdecoded = jwtDecode(localUser.token);
      }
    }
  } catch (e) {
    console.error("Failed to parse user data or decode JWT:", e);
    localUser = null;
    jwtdecoded = null;
  }

  const tabs = [
    {
      key: 1,
      value: "Home",
      link: "/",
      icon: HomeIcon,
    },
    {
      key: 2,
      value: "Rooms",
      link: "/room",
      icon: RoomsIcon,
    },
    {
      key: 3,
      value: "About us",
      link: "/aboutus",
      icon: InfoIcon,
    },
  ];

  if (localUser && jwtdecoded) {
    if (jwtdecoded.role == "admin") {
      tabs.push({
        key: 4,
        value: "Dashboard",
        link: "/admin/dashboard",
        icon: ProfileIcon,
      });
    } else {
      tabs.push({
        key: 4,
        value: "Profile",
        link: `/user/${localUser?.id}`,
        icon: ProfileIcon,
      });
    }
    tabs.push({
      key: 5,
      value: "Logout",
      link: "/logout",
      icon: LogOutIcon,
    });
  } else {
    tabs.push({
      key: 6,
      value: "Login",
      link: "/login",
      icon: RegisterIcon,
    });
  }

  const activeIndex = tabs.findIndex((tab) => {
    if (tab.link === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(tab.link);
  });

  const dockItems = tabs.map((tab) => {
    const Icon = tab.icon;
    return {
      icon: <Icon size={24} />,
      label: tab.value,
      onClick: () => navigate(tab.link),
    };
  });

  if (ToggleTheme) {
    dockItems.push({
      icon: (
        <ToggleTheme duration={600} animationType="wave-ripple" className="" />
      ),
      label: "Toggle Theme",
      onClick: (e) => e.stopPropagation(),
    });
  }

  return (
    <div className="flex justify-center top-0 sticky z-100 h-30 ">
      <Dock
        items={dockItems}
        activeIndex={activeIndex}
        position="top"
        magnification={70}
        baseItemSize={50}
        className={`rounded-full text-violet-700 backdrop-blur-lg bg-white/10`}
      />
    </div>
  );
}
