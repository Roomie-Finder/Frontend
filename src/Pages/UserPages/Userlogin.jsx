import axios from "axios";
import { useState, useEffect } from "react";
import LoginImage from "../../assets/two.png";
import SignUpImage from "../../assets/three.png";
import { Field, Input, Button } from "@headlessui/react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HomeIcon, ProfileIcon, RegisterIcon } from "../../Layout/Icons";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import AnimatedNotification from "@/components/lightswind/animated-notification.tsx";

export default function Userlogin() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabHashes = {
    "#login": 0,
    "#signup": 1,
  };
  const tabIndices = ["#login", "#signup"];

  const getIndexFromHash = () => tabHashes[location.hash] || 0;

  const [notifications, setNotifications] = useState([]);
  let [selectedIndex, setSelectedIndex] = useState(getIndexFromHash);

  let [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [signupState, setSignupState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const triggerNotification = (message, priority = "medium") => {
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

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  async function userSignUp(event) {
    event.preventDefault();

    let signUpData = {
      firstName: signupState.name,
      email: signupState.email,
      password: signupState.password,
    };
    try {
      let response = await axios.post(
        "http://localhost:8080/user/signup",
        signUpData
      );
      if (response.status === 200 || response.status === 201) {
        setSignupState({ name: "", email: "", password: "" });
        handleTabChange(0);
      } else {
        triggerNotification("Please enter all details.", "medium");
      }
    } catch (e) {
      console.error(e);
      triggerNotification("Sign up failed!!", "high");
    }
  }
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
      email: loginState.email,
      password: loginState.password,
    };

    try {
      let response = await axios.post(
        "http://localhost:8080/user/login",
        logindata
      );
      let userdata = response.data;
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("user", JSON.stringify(userdata));
        navigate("/");
      } else {
        triggerNotification("User not found", "medium");
      }
    } catch (e) {
      console.error(e);
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
          autoDismissTimeout={3000}
        />
      </div>

      <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-purple-400">
        <TabGroup
          className="flex bg-white shadow-xl/30 rounded-2xl text-indigo-500"
          selectedIndex={selectedIndex}
          onChange={handleTabChange}
        >
          <TabList className="flex flex-col justify-center shadow-lg xl:pe-12 rounded-s-xl *:data-selected:outline-none *:hover:cursor-pointer *:data-selected:border-l-10 *:data-selected:border-indigo-700 *:p-4  *:flex *:flex-col *:items-center">
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
            <TabPanel className="xl:grid xl:grid-cols-2 grid-cols-1">
              <div>
                <img
                  src={LoginImage}
                  alt=""
                  className=" h-120 lg:rounded-xl lg:scale-120 lg:shadow-xl/30 border-x-3 border-gray-200 lg:border-none rounded-none xl:block hidden"
                  loading="lazy"
                />
              </div>
              <form
                className="flex flex-col items-center justify-center relative p-20"
                onSubmit={userLogin}
              >
                <Field className=" flex flex-col justify-center items-center gap-10 ">
                  <Input
                    placeholder="neon@gmail.com"
                    type="email"
                    name="email"
                    className="rounded-full shadow-xl/10 border-1 border-gray-100 p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
                    value={loginState.email}
                    onChange={handleLoginChange}
                    required
                  />
                  <div className="w-full flex flex-col gap-4 ">
                    <Input
                      placeholder="password"
                      className="rounded-full  shadow-xl/10 border-1 border-gray-100 p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
                      name="password"
                      type="password"
                      value={loginState.password}
                      onChange={handleLoginChange}
                      required
                    />
                    <div className="w-full flex justify-end">
                      <Link to="/forgotpassword" className="">
                        Forgot password ?
                      </Link>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="text-white rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 active:opacity-75 p-3 px-8 w-full shadow-xl/20"
                  >
                    login
                  </Button>
                  <div className="flex gap-1">
                    Don't have an account ?
                    <button
                      type="button"
                      className="text-indigo-700"
                      onClick={() => handleTabChange(1)}
                    >
                      Sign up
                    </button>
                  </div>
                </Field>
              </form>
            </TabPanel>

            {/************** signup ******************************************/}
            <TabPanel className="grid grid-cols-1 xl:grid-cols-2 items-center">
              <img
                src={SignUpImage}
                alt=""
                className=" h-130 lg:rounded-xl lg:scale-120 lg:shadow-xl/30 border-x-3 border-gray-200 lg:border-none rounded-none xl:block hidden"
                loading="lazy"
              />
              <form
                className=" flex content-center justify-center p-20 "
                onSubmit={userSignUp}
              >
                <Field className=" flex flex-col justify-center items-center gap-10 ">
                  <Input
                    placeholder="Enter your name"
                    type="text"
                    className="rounded-full shadow-xl/10 border-1 border-gray-100  p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
                    name="name"
                    value={signupState.name}
                    onChange={handleSignupChange}
                    required
                  />
                  <Input
                    placeholder="neon@gmail.com"
                    type="text"
                    className="rounded-full shadow-xl/10 border-1 border-gray-100  p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
                    name="email"
                    value={signupState.email}
                    onChange={handleSignupChange}
                    required
                  />
                  <Input
                    placeholder="password"
                    className="rounded-full shadow-xl/10 border-1 border-gray-100  p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
                    name="password"
                    type="password"
                    value={signupState.password}
                    onChange={handleSignupChange}
                    required
                  />
                  <Button
                    type="submit"
                    className=" text-white rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 active:opacity-75 p-3 px-8 w-full shadow-xl/20"
                  >
                    Sign up
                  </Button>
                  <div className="flex gap-1">
                    Already have an account ?
                    <button
                      type="button"
                      className="text-indigo-700"
                      onClick={() => handleTabChange(0)}
                    >
                      login
                    </button>
                  </div>
                </Field>
              </form>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
}
