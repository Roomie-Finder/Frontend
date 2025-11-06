import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  MdHome,
  MdPeople,
  MdListAlt,
  MdAnalytics,
  MdSettings,
  MdLogout,
  MdSearch,
  MdNotifications,
  MdAdd,
} from "react-icons/md";
import {
  HiOutlineUserGroup,
  HiOutlineTag,
  HiOutlineHeart,
  HiOutlineChartBar,
} from "react-icons/hi";

// --- Sidebar Component ---
const Sidebar = ({ activeView, setActiveView }) => {
  const navItems = [
    { id: "overview", label: "Overview", icon: <MdHome /> },
    { id: "listings", label: "Listings", icon: <MdListAlt /> },
    { id: "users", label: "Users", icon: <MdPeople /> },
    { id: "reports", label: "reports", icon: <MdAnalytics /> },
    { id: "settings", label: "Settings", icon: <MdSettings /> },
  ];

  return (
    <aside className="w-64 bg-white-800  flex flex-col p-4 shadow-xl">
      <div className=" text-xl font-bold mb-10 mt-2 px-2">
        <span className="text-indigo-400">Roomie-Finder</span>
      </div>
      <div className=" text-sm font-semibold mb-6 px-2">Admin Dashboard</div>

      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.id} className="mb-2 hover:ms-2">
              <button
                onClick={() => setActiveView(item.id)}
                className={`flex items-center space-x-3 p-3 rounded-lg w-full text-left transition-colors duration-200
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
};

// --- Header Component ---
const Header = ({ admin }) => {
  return (
    <header className="bg-white p-4 shadow-sm flex justify-between items-center z-10 sticky top-0">
      <div className="relative flex items-center w-1/3">
        <MdSearch className="absolute left-3 text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search users, listings, messages..."
          className="w-full pl-10 pr-4 py-2  rounded-lg focus:outline-none bg-gray-100 focus:bg-gray-200"
        />
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <MdNotifications className="text-gray-600 text-2xl hover:text-gray-800 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">
              Admin {admin.firstName}
            </p>
            <p className="text-xs text-gray-500">{admin.email}</p>
          </div>
          <img
            src={`https://api.dicebear.com/8.x/initials/svg?seed=${admin.firstName}`}
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
        </div>
      </div>
    </header>
  );
};

// --- StatCard Component ---
const StatCard = ({ title, value, change, icon, iconBgColor }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 flex items-center space-x-4">
    <div className={`p-3 rounded-xl ${iconBgColor}`}>{icon}</div>
    <div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
      {change && (
        <p
          className={`text-xs font-medium mt-1 ${
            change.startsWith("+") ? "text-green-600" : "text-red-600"
          }`}
        >
          {change} from last month
        </p>
      )}
    </div>
  </div>
);

// --- Dummy Chart Component (Replace with actual charting library) ---
const GrowthChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md h-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Platform Growth
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Monthly trends for users, listings, and matches
      </p>
      {/* This is a simple SVG placeholder. In a real app, you'd use a library like Chart.js or Recharts */}
      <svg viewBox="0 0 800 300" className="w-full h-full">
        <rect
          x="0"
          y="0"
          width="800"
          height="300"
          fill="#f9fafb"
          rx="8"
          ry="8"
        />
        {/* Y-axis labels */}
        {[0, 350, 700, 1050, 1400].map((val, i) => (
          <text
            key={i}
            x="30"
            y={280 - i * 60}
            fontSize="14"
            fill="#6b7280"
            textAnchor="end"
          >
            {val}
          </text>
        ))}
        {/* X-axis labels */}
        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((month, i) => (
          <text
            key={i}
            x={100 + i * 100}
            y="295"
            fontSize="14"
            fill="#6b7280"
            textAnchor="middle"
          >
            {month}
          </text>
        ))}
        {/* Grid lines */}
        {[0, 60, 120, 180, 240, 280].map((y, i) => (
          <line
            key={`y-${i}`}
            x1="60"
            y1={280 - y}
            x2="780"
            y2={280 - y}
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}
        {/* Dummy data paths - Users, Listings, Matches */}
        <path
          d="M60 260 C160 200, 260 210, 360 160 S460 180, 560 150 C660 120, 760 100, 780 80"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
        />{" "}
        {/* Users */}
        <path
          d="M60 250 C160 190, 260 200, 360 150 S460 170, 560 140 C660 110, 760 90, 780 70"
          fill="none"
          stroke="#34d399"
          strokeWidth="2"
        />{" "}
        {/* Listings */}
        <path
          d="M60 240 C160 180, 260 190, 360 140 S460 160, 560 130 C660 100, 760 80, 780 60"
          fill="none"
          stroke="#a78bfa"
          strokeWidth="2"
        />{" "}
        {/* Matches */}
        {/* Shaded areas (simplified) */}
        <path
          d="M60 260 C160 200, 260 210, 360 160 S460 180, 560 150 C660 120, 760 100, 780 80 L780 280 L60 280 Z"
          fill="rgba(96, 165, 250, 0.15)"
        />{" "}
        {/* Users area */}
        <path
          d="M60 250 C160 190, 260 200, 360 150 S460 170, 560 140 C660 110, 760 90, 780 70 L780 280 L60 280 Z"
          fill="rgba(52, 211, 153, 0.15)"
        />{" "}
        {/* Listings area */}
        <path
          d="M60 240 C160 180, 260 190, 360 140 S460 160, 560 130 C660 100, 760 80, 780 60 L780 280 L60 280 Z"
          fill="rgba(167, 139, 250, 0.15)"
        />{" "}
        {/* Matches area */}
        {/* Legend */}
        <g transform="translate(450, 10)">
          <circle cx="0" cy="0" r="5" fill="#60a5fa" />
          <text x="10" y="5" fontSize="14" fill="#4b5563">
            Users
          </text>
          <circle cx="80" cy="0" r="5" fill="#34d399" />
          <text x="90" y="5" fontSize="14" fill="#4b5563">
            Listings
          </text>
          <circle cx="160" cy="0" r="5" fill="#a78bfa" />
          <text x="170" y="5" fontSize="14" fill="#4b5563">
            Matches
          </text>
        </g>
      </svg>
    </div>
  );
};

const RecentListings = ({ listings }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 overflow-x-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Listings
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Latest roommate listings posted on the platform
      </p>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Posted
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {listings?.map((listing) => (
            <tr key={listing?.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-9 w-9 rounded-full mr-3"
                    src={`https://api.dicebear.com/8.x/initials/svg?seed=${
                      listing?.roomName || ""
                    }`}
                    alt={`${listing?.roomName} Avatar`}
                  />
                  <div className="text-sm font-medium text-gray-900">
                    {listing?.roomName}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {listing?.address}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {listing?.rent}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {listing.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${
                      listing?.status === "active"
                        ? "bg-green-100 text-green-800"
                        : listing?.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                >
                  {listing?.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {listing?.posted}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <Link
                  to={`/room/${listing.id}`}
                  className="text-blue-600 hover:text-blue-900"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      user: "Alex Thompson",
      avatar: "AT",
      action: "created a new listing",
      time: "5 minutes ago",
      iconBg: "bg-green-100 text-green-800",
      icon: <MdAdd />,
    },
    {
      id: 2,
      user: "Jessica Lee",
      avatar: "JL",
      action: "matched with a roommate",
      time: "15 minutes ago",
      iconBg: "bg-purple-100 text-purple-800",
      icon: <MdPeople />,
    },
    {
      id: 3,
      user: "David Kim",
      avatar: "DK",
      action: "sent a message",
      time: "1 hour ago",
      iconBg: "bg-blue-100 text-blue-800",
      icon: <MdNotifications />,
    },
    {
      id: 4,
      user: "Rachel Green",
      avatar: "RG",
      action: "joined the platform",
      time: "2 hours ago",
      iconBg: "bg-orange-100 text-orange-800",
      icon: <MdPeople />,
    },
    {
      id: 5,
      user: "Tom Anderson",
      avatar: "TA",
      action: "created a new listing",
      time: "3 hours ago",
      iconBg: "bg-green-100 text-green-800",
      icon: <MdAdd />,
    },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Activity
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Latest actions on the platform
      </p>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id} className="flex items-center space-x-3 mb-4">
            <div
              className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center ${activity.iconBg}`}
            >
              {activity.icon}
            </div>
            <div className="flex-grow">
              <p className="text-sm text-gray-800">
                <strong className="font-medium">{activity.user}</strong>{" "}
                {activity.action}.
              </p>
              <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function AdminDashboard() {
  const [activeView, setActiveView] = useState("overview");
  let [listings, setlistings] = useState([]);
  let [users, setusers] = useState([]);
  const admin = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    async function fetchlistings() {
      try {
        let listingsResponse = await axios.get(
          "http://localhost:8080/admin/getAllRooms"
        );
        setlistings(listingsResponse.data);
        let usersResponse = await axios.get(
          "http://localhost:8080/admin/getAllUsers"
        );
        setusers(usersResponse.data);
        console.log(usersResponse);
      } catch (e) {
        console.error(e);
      }
    }
    fetchlistings();
  }, []);

  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return (
          <>
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              Dashboard Overview
            </h1>
            <p className="text-gray-500 mb-8">
              Monitor your roommate finder platform performance
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <StatCard
                title="Total Users"
                value={users.length}
                change="+12.5%"
                icon={<HiOutlineUserGroup className="w-6 h-6 text-blue-600" />}
                iconBgColor="bg-blue-100"
              />
              <StatCard
                title="Active Listings"
                value={listings.length}
                change="+8.2%"
                icon={<HiOutlineTag className="w-6 h-6 text-green-600" />}
                iconBgColor="bg-green-100"
              />
              <StatCard
                title="Matches Made"
                value="856"
                change="+23.1%"
                icon={<HiOutlineHeart className="w-6 h-6 text-purple-600" />}
                iconBgColor="bg-purple-100"
              />
              <StatCard
                title="Growth Rate"
                value="32.4%"
                change="+4.3%"
                icon={<HiOutlineChartBar className="w-6 h-6 text-orange-600" />}
                iconBgColor="bg-orange-100"
              />
            </div>
            <GrowthChart />
          </>
        );
      case "listings":
        return (
          <>
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              Listings Management
            </h1>
            <p className="text-gray-500 mb-8">
              Manage all roommate listings on the platform
            </p>
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-grow">
                <RecentListings listings={listings} />
              </div>
              <div className="w-full lg:w-1/3">
                <RecentActivity />
              </div>
            </div>
          </>
        );
      case "users":
        return (
          <>
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              User Management
            </h1>
            <p className="text-gray-500 mb-8">
              View and manage all users registered on the platform
            </p>
            {/* Reusing UserManagement from previous examples */}
            <UserManagement users={users} />
          </>
        );
      case "reports":
        return (
          <>
            <h1 className="text-3xl font-semibold text-gray-800 mb-2">
              Analytics & Reports
            </h1>
            <p className="text-gray-500 mb-8">
              Detailed insights into platform performance
            </p>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p className="text-gray-700">
                Analytics content would go here, e.g., detailed charts, user
                behavior reports, etc.
              </p>
            </div>
          </>
        );
      case "settings":
        return (
          <>
            <div>
              <h1 className="text-3xl font-semibold text-gray-800 mb-2">
                Platform Settings
              </h1>
              <p className="text-gray-500 mb-8">
                Configure general platform settings
              </p>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <p className="text-gray-700">
                  Settings forms and options would be displayed here.
                </p>
              </div>
            </div>
          </>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header admin={admin} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6 scrollbar-thumb-rounded scrollbar-track-rounded scrollbar-thumb-gray-400 scrollbar-track-gray-200 scrollbar-w-2">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

function UserManagement({ users }) {
  async function deleteUser(uid) {
    try {
      let response = await axios.delete(
        `http://localhost:8080/admin/${uid}/deleteuser`
      );
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user?.firstName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user?.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                      user?.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                >
                  {user?.status || "Inactive"}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user?.role}
              </td>
              <td className="px-6 py-4 flex whitespace-nowrap text-right text-sm font-medium">
                <Link to="" className="text-blue-600 hover:text-blue-900">
                  Edit
                </Link>

                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-600 hover:text-red-900 ml-4"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
