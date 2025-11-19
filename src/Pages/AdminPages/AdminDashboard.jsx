import React, { useEffect, useState, useMemo } from "react";
import api from "../../api/axiosConfig";
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
};

// --- Header Component ---
const Header = ({ admin }) => {
  return (
    <header className=" p-4 shadow-sm flex justify-between items-center z-10 sticky top-0">
      <div className="relative flex items-center w-1/3">
        <MdSearch className="absolute left-3 text-indigo-500 text-xl" />
        <input
          type="text"
          placeholder="Search users, listings, messages..."
          className="w-full pl-10 pr-4 py-2 bg-gray-300/60 rounded-lg focus:outline-none  focus:bg-gray-300/50"
        />
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <MdNotifications className="text-gray-600 text-2xl hover:text-gray-800 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500  text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">
              Admin {admin.firstName}
            </p>
            <p className="text-xs text-gray-500">{admin.username}</p>
          </div>
          <img
            src={`https://api.dicebear.com/8.x/initials/svg?seed=${admin.firstName}`}
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full "
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
};

// --- StatCard Component ---
const StatCard = ({ title, value, change, icon, iconBgColor }) => (
  <div className=" p-6 rounded-xl border border-gray-200 flex items-center space-x-4">
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

const CHART_WIDTH = 840;
const CHART_HEIGHT = 300;
const CHART_PADDING = 60;

const generatePath = (dataPoints, scale) => {
  const { width, height, padding, yMin, yMax } = scale;

  if (!dataPoints || dataPoints.length === 0) {
    return "M0 0";
  }
  // Ensure there are at least 2 points for a line
  const effectiveDataPoints =
    dataPoints.length === 1 ? [dataPoints[0], dataPoints[0]] : dataPoints;
  const dataLength = effectiveDataPoints.length;

  const xStep = (width - padding * 2) / (dataLength - 1); // Step between points

  const yRange = yMax - yMin || 1; // Avoid division by zero
  const yFactor = (height - padding * 2) / yRange;

  // Function to scale a data point to its Y coordinate
  const scaleY = (dataPoint) => height - padding - (dataPoint - yMin) * yFactor;

  // Start path
  let path = `M${padding} ${scaleY(effectiveDataPoints[0])}`;

  // Use bezier curves for a smooth line
  for (let i = 0; i < dataLength - 1; i++) {
    const x1 = padding + i * xStep;
    const y1 = scaleY(effectiveDataPoints[i]);
    const x2 = padding + (i + 1) * xStep;
    const y2 = scaleY(effectiveDataPoints[i + 1]);

    // Calculate control points for a smooth curve
    const controlPointX1 = x1 + xStep / 4;
    const controlPointY1 = y1;
    const controlPointX2 = x1 + xStep / 4;
    const controlPointY2 = y2;

    path += ` C ${controlPointX1} ${controlPointY1}, ${controlPointX2} ${controlPointY2}, ${x2} ${y2}`;
  }

  return path;
};

function GrowthChart({ usersData = [10, 20], listingsData = [15, 35] }) {
  const { paths, yAxisLabels } = useMemo(() => {
    const allData = [...usersData, ...listingsData, 0];
    const globalYMin = Math.min(...allData);
    const globalYMax = Math.max(...allData);

    const scale = {
      yMin: globalYMin,
      yMax: globalYMax,
      width: CHART_WIDTH,
      height: CHART_HEIGHT,
      padding: CHART_PADDING,
    };

    // 2. Generate Y-axis labels based on the global scale
    const yRange = globalYMax - globalYMin || 1;
    const yFactor = (CHART_HEIGHT - CHART_PADDING * 2) / yRange;
    const scaleY = (dataPoint) =>
      CHART_HEIGHT - CHART_PADDING - (dataPoint - globalYMin) * yFactor;

    // Generate 3 tick marks: min, mid, max
    const midValue = Math.round((globalYMax + globalYMin) / 2);
    const labels = [...new Set([globalYMin, midValue, globalYMax])];
    const yAxisLabels = labels.map((value) => ({
      value,
      y: scaleY(value),
    }));

    // 3. Generate paths for the lines
    const usersPath = generatePath(usersData, scale);
    const listingsPath = generatePath(listingsData, scale);

    const chartPaths = {
      users: usersPath,
      listings: listingsPath,
      usersFill: `${usersPath} L${
        CHART_WIDTH - CHART_PADDING
      } ${CHART_HEIGHT} L${CHART_PADDING} ${CHART_HEIGHT} Z`,
      listingsFill: `${listingsPath} L${
        CHART_WIDTH - CHART_PADDING
      } ${CHART_HEIGHT} L${CHART_PADDING} ${CHART_HEIGHT} Z`,
    };

    return { paths: chartPaths, yAxisLabels };
  }, [usersData, listingsData]);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Users & Listings Chart</h3>
      <svg
        viewBox={`0 0 ${CHART_WIDTH} ${CHART_HEIGHT}`}
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Y-Axis Labels */}
        <g className="y-axis-labels">
          {yAxisLabels.map((label) => (
            <text
              key={label.value}
              x={CHART_PADDING - 10} // Position 10px left of the line
              y={label.y}
              fill="rgba(255, 255, 255, 0.5)"
              fontSize="12"
              textAnchor="end" // Align text to the right
              alignmentBaseline="middle"
            >
              {label.value}
            </text>
          ))}
        </g>

        {/* Grid lines (optional) */}
        <g className="grid-lines">
          {/* Bottom line */}
          <line
            x1={CHART_PADDING}
            y1={CHART_HEIGHT - CHART_PADDING}
            x2={CHART_WIDTH - CHART_PADDING}
            y2={CHART_HEIGHT - CHART_PADDING}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
          {/* Top line */}
          <line
            x1={CHART_PADDING}
            y1={CHART_PADDING}
            x2={CHART_WIDTH - CHART_PADDING}
            y2={CHART_PADDING}
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
          />
          {/* Middle line (optional, aligned with mid-label) */}
          {yAxisLabels.length > 2 && (
            <line
              x1={CHART_PADDING}
              y1={yAxisLabels[1].y}
              x2={CHART_WIDTH - CHART_PADDING}
              y2={yAxisLabels[1].y}
              stroke="rgba(255, 255, 255, 0.1)"
              strokeDasharray="2,2"
              strokeWidth="1"
            />
          )}
        </g>

        {/* Shaded Areas (drawn first) */}
        <path d={paths.usersFill} fill="rgba(52, 211, 153, 0.15)" />
        <path d={paths.listingsFill} fill="rgba(167, 139, 250, 0.15)" />

        {/* Data Lines */}
        <path d={paths.users} fill="none" stroke="#34d399" strokeWidth="2" />
        <path d={paths.listings} fill="none" stroke="#a78bfa" strokeWidth="2" />

        {/* Legend (Example) */}
        <text x="60" y="20" fill="#34d399" fontSize="12">
          Users
        </text>
        <text x="110" y="20" fill="#a78bfa" fontSize="12">
          Listings
        </text>
      </svg>
      {/* Removed the "Randomize Data" button */}
    </div>
  );
}

const RecentListings = ({ listings, setlistings }) => {
  async function deleteRoom(rid) {
    try {
      let response = await api.delete(`/admin/deleteRoom/${rid}`);
      setlistings(response.data);
    } catch (e) {
      alert("error occured deleting user !!");
    }
  }
  return (
    <div className=" p-6 rounded-3xl border border-gray-200 overflow-x-auto">
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
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
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
                    loading="lazy"
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
              <td className="flex gap-3 px-6 py-4  text-sm font-medium">
                <Link
                  to={`/room/${listing.id}`}
                  className="text-blue-600 hover:text-blue-900"
                >
                  View
                </Link>
                <button
                  onClick={() => deleteRoom(listing.id)}
                  className="text-red-500 hover:text-red-900"
                >
                  delete
                </button>
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
      user: "varun sigh",
      avatar: "AT",
      action: "created a new listing",
      time: "5 minutes ago",
      iconBg: "bg-green-100 text-green-800",
      icon: <MdAdd />,
    },
    {
      id: 2,
      user: "ram ",
      avatar: "JL",
      action: "matched with a roommate",
      time: "15 minutes ago",
      iconBg: "bg-purple-100 text-purple-800",
      icon: <MdPeople />,
    },
    {
      id: 3,
      user: "abc ",
      avatar: "DK",
      action: "sent a message",
      time: "1 hour ago",
      iconBg: "bg-blue-100 text-blue-800",
      icon: <MdNotifications />,
    },
    {
      id: 4,
      user: "ram ",
      avatar: "RG",
      action: "joined the platform",
      time: "2 hours ago",
      iconBg: "bg-orange-100 text-orange-800",
      icon: <MdPeople />,
    },
    {
      id: 5,
      user: "Tom",
      avatar: "TA",
      action: "created a new listing",
      time: "3 hours ago",
      iconBg: "bg-green-100 text-green-800",
      icon: <MdAdd />,
    },
  ];

  return (
    <div className=" p-6 rounded-xl border border-gray-200">
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
        let listingsResponse = await api.get("/admin/getAllRooms");
        setlistings(listingsResponse.data);
        let usersResponse = await api.get("/admin/getAllUsers");
        setusers(usersResponse.data);
      } catch (e) {
        alert("error occured fetching users or rooms !!");
      }
    }
    fetchlistings();
  }, []);

  const renderContent = () => {
    switch (activeView) {
      case "overview":
        return (
          <>
            <h1 className="text-3xl font-semibold text-gray-600 mb-2">
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
            <div className="flex flex-col gap-6">
              <div className=" w-full">
                <RecentListings listings={listings} setlistings={setlistings} />
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
            <UserManagement users={users} setusers={setusers} />
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
            <div className=" p-6 rounded-xl shadow-md">
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
              <div className=" p-6 rounded-xl shadow-md">
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
    <div className="flex h-screen  font-sans">
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

function UserManagement({ users, setusers }) {
  async function deleteUser(uid) {
    try {
      let response = await api.delete(`/admin/deleteUser/${uid}`);
      setusers(response.data);
    } catch (e) {
      alert("error occured deleting user..");
    }
  }

  return (
    <div className=" shadow-md rounded-3xl overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              username
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
        <tbody className=" divide-y divide-gray-200">
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {user?.firstName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {user?.username}
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
