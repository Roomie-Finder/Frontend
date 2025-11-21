import axios from "axios";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HomeIcon, ProfileIcon, RegisterIcon } from "../../Layout/Icons";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
import AnimatedNotification from "@/components/lightswind/animated-notification.js";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  let api = import.meta.env.VITE_BACKEND_URL;

  const tabHashes = {
    "#login": 0,
    "#signup": 1,
  };
  const tabIndices = ["#login", "#signup"];

  const getIndexFromHash = () => tabHashes[location.hash] || 0;

  const [notifications, setNotifications] = useState([]);
  let [selectedIndex, setSelectedIndex] = useState(getIndexFromHash);

  let [loginState, setLoginState] = useState({
    username: "",
    password: "",
  });

  const triggerNotification = (message, priority = "low") => {
    const newNotification = {
      id: crypto.randomUUID(),
      user: { name: "System" },
      message: message,
      timestamp: new Date().toLocaleTimeString(),
      priority: priority,
    };

    setNotifications((prev) => [...prev, newNotification]);
  };

  const handleDismiss = (notification) => {
    setNotifications((prev) => prev.filter((n) => n.id !== notification.id));
  };

  const handleTabChange = (index) => {
    setSelectedIndex(index);
    navigate(tabIndices[index], { replace: true });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function userLogin(event) {
    event.preventDefault();

    const logindata = {
      username: loginState.username,
      password: loginState.password,
    };

    try {
      let response = await axios.post(`${api}/auth/login`, logindata);
      let userdata = response.data;
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("user", JSON.stringify(userdata));
        triggerNotification("User not found", "");
        navigate("/");
      } else {
        triggerNotification("User not found", "high");
      }
    } catch (e) {
      triggerNotification("Invalid username or password", "high");
    }
  }

  return (
    <>
      <div className="relative z-50">
        <AnimatedNotification
          autoGenerate={false}
          maxNotifications={3}
          variant="glass"
          position="top-right"
          showAvatars={true}
          allowDismiss={true}
          notifications={notifications}
          onNotificationDismiss={handleDismiss}
          autoDismissTimeout={300}
        />
      </div>

      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-purple-400">
        <TabGroup
          className="flex bg-white shadow-xl/30 rounded-2xl text-indigo-500 "
          selectedIndex={selectedIndex}
          onChange={handleTabChange}
        >
          <TabList className="hidden sm:flex flex-col justify-center shadow-lg xl:pe-12 rounded-s-xl *:data-selected:outline-none *:hover:cursor-pointer *:data-selected:border-l-10 *:data-selected:border-indigo-700 *:p-4  *:flex *:flex-col *:items-center">
            <Tab className=" hover:scale-125 transition duration-500">
              <ProfileIcon />
              Login
            </Tab>
            <Tab className=" hover:scale-125 transition duration-500">
              <RegisterIcon />
              <p>Sign up</p>
            </Tab>
            <Link to="/" className=" hover:scale-125 transition duration-500">
              <HomeIcon /> Home
            </Link>
          </TabList>

          <TabPanels>
            {/* ********* login **********************************************/}
            <LoginForm
              username={loginState.username}
              password={loginState.password}
              userLogin={userLogin}
              handleLoginChange={handleLoginChange}
              handleTabChange={handleTabChange}
            />

            {/************** signup ******************************************/}

            <SignupForm
              handleTabChange={handleTabChange}
              triggerNotification={triggerNotification}
            />
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
}
