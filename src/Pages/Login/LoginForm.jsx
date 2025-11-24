import { TabPanel } from "@headlessui/react";
import { Field, Input, Button } from "@headlessui/react";
import { Link } from "react-router-dom";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { useState } from "react";

export default function LoginForm({
  userLogin,
  username,
  password,
  handleLoginChange,
  handleTabChange,
}) {
  let [show, setshow] = useState(false);

  return (
    <TabPanel className="xl:grid xl:grid-cols-2 grid-cols-1">
      <div>
        <img
          src="https://res.cloudinary.com/dcdjrjgaq/image/upload/v1763302660/two_fxma8f.webp"
          alt=""
          className=" h-130 lg:rounded-xl lg:scale-120 lg:shadow-xl/30 border-x-3 border-gray-200 lg:border-none rounded-none xl:block hidden"
          loading="lazy"
        />
      </div>
      <form
        className="flex flex-col items-center justify-center relative p-10 "
        onSubmit={userLogin}
      >
        <Field className=" flex flex-col justify-center items-center gap-10 ">
          <h1 className="text-2xl text-shadow-lg  font-semibold pb-5">
            LOGIN{" "}
          </h1>
          <Input
            placeholder="username"
            type="username"
            name="username"
            className="rounded-full shadow-xl/10  border-1 border-gray-100 p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4  sm:w-80"
            value={username}
            onChange={handleLoginChange}
            required
          />
          <div className="w-full flex flex-col gap-4 ">
            <div className="relative">
              <Input
                placeholder="password"
                className="rounded-full  shadow-xl/10 border-1 border-gray-100 p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 sm:w-80"
                name="password"
                type={show ? "text" : "password"}
                value={password}
                onChange={handleLoginChange}
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
            <div className="w-full flex justify-end">
              <Link to="/forgotpassword" className="">
                Forgot password ?
              </Link>
            </div>
          </div>

          <Button
            type="submit"
            className="text-white rounded-full bg-gradient-to-r from-[#09203F] to-[#537895] bg-gradient-to-r from-[#09203F] to-[#537895] hover:from-[#537895] hover:to-[#09203F] active:opacity-75 p-3 px-8 w-full shadow-xl/20"
          >
            login
          </Button>
          <div className="flex gap-1">
            Don't have an account ?
            <button
              type="button"
              className=" font-semibold"
              onClick={() => handleTabChange(1)}
            >
              Sign up
            </button>
          </div>
        </Field>
      </form>
    </TabPanel>
  );
}
