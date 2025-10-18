import { NavLink } from "react-router";

export default function Navbar() {
  let tabs = [
    {
      value: "Home",
      link: "/",
      key: 1,
      active: true,
    },
    {
      value: "Rooms",
      link: "room",
      key: 2,
      active: false,
    },
    {
      value: "Profile",
      link: "user/profile",
      key: 3,
      active: false,
    },
    {
      value: "login/Register",
      link: "login",
      key: 4,
      active: false,
    },
  ];

  return (
    <div className="flex justify-center pt-8 sticky z-100 text-indigo-300">
      <nav className=" border-2 border-gray-400  flex flex-row p-1 rounded-full justify-center w-max gap-2">
        {tabs.map((tab) => {
          return (
            <NavLink
              to={tab.link}
              className={({ isActive }) =>
                ` p-2 px-3 hover:text-white hover:bg-indigo-300  rounded-full cursor-pointer active:bg-indigo-100 ${
                  isActive ? " bg-indigo-200" : ""
                }`
              }
              key={tab.key}
            >
              {tab.value}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
