import { NavLink } from "react-router";
import {
  HomeIcon,
  RoomsIcon,
  ProfileIcon,
  RegisterIcon,
  LogoutArrow,
} from "../UI_Components/Icons/Icons";

export default function Navbar() {
  let userData = JSON.parse(localStorage.getItem("user"));
  let tabs = [
    {
      key: 1,
      value: "Home",
      link: "/",
      icon: HomeIcon,
      active: true,
    },
    {
      key: 2,
      value: "Rooms",
      link: "room",
      icon: RoomsIcon,
      active: false,
    },
  ];

  if (userData) {
    if (userData.role == "user") {
      tabs.push({
        key: 3,
        value: "Profile",
        link: "user/profile",
        icon: ProfileIcon,
        active: false,
      });
    } else {
      tabs.push({
        key: 3,
        value: "dashboard",
        link: "admin/dashboard",
        icon: ProfileIcon,
        active: false,
      });
    }
    tabs.push({
      key: 4,
      value: "Logout",
      link: "logout",
      icon: LogoutArrow,
      active: false,
    });
  } else {
    tabs.push({
      key: 5,
      value: "Login",
      link: "login",
      icon: RegisterIcon,
      active: false,
    });
  }

  return (
    <div className="flex justify-center pt-8 sticky z-100 text-violet-500">
      <nav className=" border-2 border-gray-400  flex flex-row p-1 rounded-full justify-center w-max gap-2">
        {tabs.map((tab) => {
          let Icon = tab.icon;
          return (
            <NavLink to={tab.link} key={tab.key}>
              {({ isActive }) => (
                <div
                  className={`p-2 px-3 hover:text-white hover:bg-violet-800  flex rounded-full cursor-pointer active:bg-violet-500 gap-2  ${
                    isActive ? `bg-violet-900 text-white` : ""
                  }`}
                >
                  <Icon />
                  <p className={isActive ? "" : "hidden"}>{tab.value}</p>
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
