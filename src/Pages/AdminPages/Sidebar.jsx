import {
  MdHome,
  MdPeople,
  MdListAlt,
  MdAnalytics,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar({ activeView, setActiveView }) {
  const navItems = [
    { id: "overview", label: "Overview", icon: <MdHome /> },
    { id: "listings", label: "Listings", icon: <MdListAlt /> },
    { id: "users", label: "Users", icon: <MdPeople /> },
    { id: "reports", label: "reports", icon: <MdAnalytics /> },
    { id: "settings", label: "Settings", icon: <MdSettings /> },
  ];

  return (
    <aside className="w-64  flex flex-col p-4 shadow-xl">
      <div className=" text-xl font-bold mb-10 mt-2 px-2">
        <span className="bg-linear-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent text-2xl">
          Roomie-Finder
        </span>
      </div>
      <div className=" text-lg font-semibold mb-6 px-2">Dashboard</div>

      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="mb-2 hover:ms-2">
              <button
                onClick={() => setActiveView(item.id)}
                className={`flex items-center space-x-3 p-3 rounded-lg w-full text-left transition-all duration-500
                  ${
                    activeView === item.id
                      ? "bg-indigo-200  shadow-md"
                      : " hover:bg-gray-200 "
                  }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <button className="flex items-center space-x-3 p-3 rounded-lg w-full text-left  hover:bg-gray-200  transition-colors duration-200">
          <MdLogout />
          <Link to="/logout">Logout</Link>
        </button>
      </div>
    </aside>
  );
}
