import axios from "axios";
import { useState } from "react";
import { Field, Input, Button } from "@headlessui/react";
import { TabPanel } from "@headlessui/react";
import { VscEyeClosed, VscEye } from "react-icons/vsc";

export default function SignupForm({ handleTabChange, triggerNotification }) {
  let api = import.meta.env.VITE_BACKEND_URL;
  let [show, setshow] = useState(false);
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
        className="flex content-center justify-center p-10"
        onSubmit={userSignUp}
      >
        <Field className=" flex flex-col justify-center items-center gap-10 ">
          <h1 className="text-2xl text-shadow-lg  font-semibold pb-5">
            SIGN UP{" "}
          </h1>
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
            placeholder="username"
            type="text"
            className="rounded-full shadow-xl/10 border-1 border-gray-100  p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
            name="username"
            value={signupState.username}
            onChange={handleSignupChange}
            required
          />
          <div className="relative">
            <Input
              placeholder="password"
              className="rounded-full shadow-xl/10 border-1 border-gray-100  p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
              name="password"
              type={show ? "text" : "password"}
              value={signupState.password}
              onChange={handleSignupChange}
              required
            />
            {show ? (
              <VscEye
                className="absolute right-5 bottom-4 "
                onClick={() => setshow(false)}
              />
            ) : (
              <VscEyeClosed
                className="absolute right-5 bottom-4 "
                onClick={() => setshow(true)}
              />
            )}
          </div>
          <Button
            type="submit"
            className=" text-white rounded-full bg-gradient-to-r from-[#09203F] to-[#537895] bg-gradient-to-r from-[#09203F] to-[#537895] hover:from-[#537895] hover:to-[#09203F] active:opacity-75 p-3 px-8 w-full shadow-xl/20"
          >
            Sign up
          </Button>
          <div className="flex gap-1">
            Already have an account ?
            <button
              type="button"
              className="font-semibold"
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
