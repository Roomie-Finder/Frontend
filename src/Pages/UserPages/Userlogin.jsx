import { Field, Input, Button } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import LoginImage from "../../assets/two.png";
import SignUpImage from "../../assets/three.png";
import {
  HomeIcon,
  ProfileIcon,
  RegisterIcon,
} from "../../Components/UI_Components/Icons/Icons";
import axios from "axios";

export default function Userlogin() {
  let [selectedIndex, setSelectedIndex] = useState(0);
  let navigate = useNavigate();
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const [adminLoginState, setadminLoginState] = useState({
    email: "",
    password: "",
  });
  const [signupState, setSignupState] = useState({
    name: "",
    email: "",
    password: "",
  });

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
        setSelectedIndex(0);
        setSignupState({ name: "", email: "", password: "" });
      }
    } catch (e) {
      console.error(e);
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
      let newuser = {
        id: userdata.id,
        firstName: userdata.firstName,
        email: userdata.email,
        role: userdata.role,
      };
      localStorage.setItem("user", JSON.stringify(newuser));

      if (response.data) navigate("/");
    } catch (e) {
      console.error(e);
    }
  }

  const hadleAdminChange = (e) => {
    let { name, value } = e.target;
    setadminLoginState((prevState) => ({ ...prevState, [name]: value }));
  };

  async function adminLogin(event) {
    event.preventDefault();

    const adminLoginData = {
      email: adminLoginState.email,
      password: adminLoginState.password,
    };
    try {
      let response = await axios.post(
        "http://localhost:8080/user/login",
        adminLoginData
      );

      let adminData = response.data;
      let newadmin = {
        id: adminData.id,
        firstName: adminData.firstName,
        email: adminData.email,
        role: adminData.role,
      };
      localStorage.setItem("user", JSON.stringify(newadmin));

      if (response.data) navigate("/admin/dashboard");
    } catch (e) {
      console.error(e);
    }
  }

  let changetab = () => {
    if (selectedIndex < 2) setSelectedIndex(selectedIndex + 1);
    else setSelectedIndex(selectedIndex - 1);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-500 to-purple-400">
      <TabGroup
        className="flex bg-white shadow-2xl/30 rounded-2xl"
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <TabList className="flex flex-col justify-center xl:pe-12 rounded-s-xl bg-pink-50">
          <Tab className="hover:cursor-pointer data-selected:border-l-10 data-selected:border-purple-700 p-4 data-selected:outline-none flex flex-col items-center">
            <ProfileIcon />
            Login
          </Tab>
          <Tab className="hover:cursor-pointer data-selected:border-l-10 data-selected:border-indigo-700 p-4 data-selected:outline-none flex flex-col items-center">
            <RegisterIcon />
            <p>Sign up</p>
          </Tab>
          <Tab className="hover:cursor-pointer data-selected:border-l-10 data-selected:border-indigo-700 p-4 data-selected:outline-none flex flex-col items-center">
            <ProfileIcon />
            <p>Admin</p>
          </Tab>
          <Link to="/" className="flex flex-col items-center p-4">
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
                />
                <div className="w-full flex flex-col gap-4 ">
                  <Input
                    placeholder="password"
                    className="rounded-full  shadow-xl/10 border-1 border-gray-100 p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
                    name="password"
                    type="password"
                    value={loginState.password}
                    onChange={handleLoginChange}
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
                  <button className="text-indigo-700" onClick={changetab}>
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
                />
                <Input
                  placeholder="neon@gmail.com"
                  type="text"
                  className="rounded-full shadow-xl/10 border-1 border-gray-100  p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
                  name="email"
                  value={signupState.email}
                  onChange={handleSignupChange}
                />
                <Input
                  placeholder="password"
                  className="rounded-full shadow-xl/10 border-1 border-gray-100  p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
                  name="password"
                  type="password"
                  value={signupState.password}
                  onChange={handleSignupChange}
                />
                <Button
                  type="submit"
                  className=" text-white rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 active:opacity-75 p-3 px-8 w-full shadow-xl/20"
                >
                  Sign up
                </Button>
                <div className="flex gap-1">
                  Already have an account ?
                  <button className="text-indigo-700" onClick={changetab}>
                    login
                  </button>
                </div>
              </Field>
            </form>
          </TabPanel>
          {/************Admin login ***********************/}
          <TabPanel className="grid grid-cols-1 xl:grid-cols-2 ">
            <img
              src={LoginImage}
              alt=""
              className=" h-120 lg:rounded-xl lg:scale-120 lg:shadow-xl/30 border-x-3 border-gray-200 lg:border-none rounded-none xl:block hidden"
            />
            <form
              className="flex flex-col items-center justify-center relative p-20"
              onSubmit={adminLogin}
            >
              <Field className=" flex flex-col justify-center items-center gap-10 ">
                <Input
                  placeholder="neon@gmail.com"
                  type="email"
                  className="rounded-full shadow-xl/10 border-1 border-gray-100 p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
                  name="email"
                  value={adminLoginState.email}
                  onChange={hadleAdminChange}
                />
                <div className="w-full flex flex-col gap-4 ">
                  <Input
                    placeholder="password"
                    className="rounded-full  shadow-xl/10 border-1 border-gray-100 p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
                    name="password"
                    type="password"
                    value={adminLoginState.password}
                    onChange={hadleAdminChange}
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
              </Field>
            </form>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
