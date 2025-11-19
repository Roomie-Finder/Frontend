import axios from "axios";
import { useState } from "react";
import { Field, Input, Button } from "@headlessui/react";
import { TabPanel } from "@headlessui/react";

export default function SignupForm({ handleTabChange, triggerNotification }) {
  let api = import.meta.env.VITE_BACKEND_URL;
  const [signupState, setSignupState] = useState({
    name: "",
    username: "",
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
      username: signupState.username,
      password: signupState.password,
    };

    try {
      await axios.post(`${api}/auth/signup`, signUpData);
      setSignupState({ name: "", username: "", password: "" });
      triggerNotification("Signup Successful , please login", "low");
      handleTabChange(0);
    } catch (e) {
      triggerNotification("User with this username alredy exists ", "high");
    }
  }
  return (
    <TabPanel className="grid grid-cols-1 xl:grid-cols-2 items-center">
      <img
        src="https://res.cloudinary.com/dcdjrjgaq/image/upload/v1763302660/three_d0an75.webp"
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
            name="username"
            value={signupState.username}
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
  );
}
