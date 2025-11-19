import { TabPanel } from "@headlessui/react";
import { Field, Input, Button } from "@headlessui/react";
import { Link } from "react-router-dom";

export default function LoginForm({
  userLogin,
  username,
  password,
  handleLoginChange,
  handleTabChange,
}) {
  return (
    <TabPanel className="xl:grid xl:grid-cols-2 grid-cols-1">
      <div>
        <img
          src="https://res.cloudinary.com/dcdjrjgaq/image/upload/v1763302660/two_fxma8f.webp"
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
            type="username"
            name="username"
            className="rounded-full shadow-xl/10 border-1 border-gray-100 p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
            value={username}
            onChange={handleLoginChange}
            required
          />
          <div className="w-full flex flex-col gap-4 ">
            <Input
              placeholder="password"
              className="rounded-full  shadow-xl/10 border-1 border-gray-100 p-3 px-8 focus:border-none outline-none focus:bg-indigo-100 col-span-4 w-80"
              name="password"
              type="password"
              value={password}
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
  );
}
