import axios from "axios";
import { lazy, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HomeIcon, ProfileIcon, RegisterIcon } from "../../Layout/Icons";
import { Tab, TabGroup, TabList, TabPanels } from "@headlessui/react";
let AnimatedNotification = lazy(() =>
  import("@/components/lightswind/animated-notification.js")
);
let LoginForm = lazy(() => import("./LoginForm"));
let SignupForm = lazy(() => import("./SignupForm"));

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
        triggerNotification("Login successful", "low");
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

      <div className="flex justify-center items-center h-screen  overflow-hidden bg-white/10 before:absolute before:inset-0 before:-z-10 before:bg-[url(https://res.cloudinary.com/dcdjrjgaq/image/upload/v1763302660/ProfileBack_dc03v9.webp)] before:bg-cover before:blur-xl ">
        <TabGroup
          className="flex sm:bg-white/50 lg:bg-white  rounded-2xl text-sky-900 "
          selectedIndex={selectedIndex}
          onChange={handleTabChange}
        >
          <TabList className="w-24 xl:w-35 hidden *:p-5 *:ps-1  *:flex *:flex-col *:items-center sm:flex flex-col justify-center shadow-lg xl:pe-12 rounded-s-xl *:data-selected:outline-none *:hover:cursor-pointer *:data-selected:border-l-10 *:data-selected:border-indigo-700 ">
            <Tab className="hover:ps-8 transition-all duration-500 ">
              <ProfileIcon />
              <p className="text-nowrap">Login</p>
            </Tab>
            <Tab className="hover:ps-8 transition-all duration-300">
              <RegisterIcon />
              <p className="text-nowrap"> Sign up</p>
            </Tab>
            <Link to="/" className="hover:ps-8 transition-all duration-800">
              <HomeIcon />
              <p className="text-nowrap">Home</p>
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
