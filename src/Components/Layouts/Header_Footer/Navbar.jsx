import { useEffect, useState } from "react";
import { Link } from "react-router";

export default function Navbar() {
  let [activeTab, setActiveTab] = useState(1);

  let options = [
    {
      value: "Home",
      link: "/",
      key: 1,
      active: true,
    },
    {
      value: "Rooms",
      link: "/room",
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
      link: "/login",
      key: 4,
      active: false,
    },
  ];

  useEffect(() => {
    if (!localStorage.getItem("activeTab")) {
      localStorage.setItem("activeTab", 1);
    } else {
      setActiveTab(localStorage.getItem("activeTab"));
      console.log(localStorage.getItem("activeTab"));
    }
  }, []);

  function tabChange(activatetab) {
    setActiveTab(activatetab);
    console.log(activatetab);
    localStorage.setItem("activeTab", activatetab);
  }

  return (
    <div className="flex justify-center pt-8 sticky z-100 text-indigo-300">
      <div className=" border-2 border-gray-400  flex flex-row p-1 rounded-full justify-center w-max gap-2">
        {options.map((option) => {
          return (
            <Link
              to={option.link}
              className={`p-2 px-3 hover:text-white hover:bg-indigo-300  rounded-full cursor-pointer active:bg-indigo-100 ${
                option.key == activeTab ? "bg-indigo-300 text-blue-900" : ""
              }`}
              key={option.key}
              onClick={() => tabChange(option.key)}
            >
              {option.value}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
