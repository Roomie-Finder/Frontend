import {
  Description,
  Field,
  Input,
  Label,
  Button,
  Checkbox,
} from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Userlogin() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="grid grid-cols-2">
      <div className="bg-red-100 h-screen"></div>
      <form className="bg-indigo-200 flex content-center justify-center ">
        <Field className=" flex flex-col justify-center items-center gap-10 w-100 ">
          <div className="w-full flex flex-col items-center pb-10">
            <Label className="text-4xl font-bold text-indigo-700">
              Welcome back!
            </Label>

            <Description>
              We are happy to have you here . It's great to see you again.
            </Description>
          </div>
          <Input
            placeholder="neon@gmail.com"
            type="email"
            className="rounded-full shadow-xl/20 p-3 px-8 focus:border-none outline-none focus:bg-indigo-300 col-span-4 w-full"
            name="email"
          />
          <div className="w-full flex flex-col gap-4">
            <Input
              placeholder="password"
              className="rounded-full border-none shadow-xl/20 p-3 px-8 focus:border-none outline-none focus:bg-indigo-300 col-span-4 w-full"
              name="password"
            />
            <Link to="/forgotpassword" className="w-full flex justify-end">
              Forgot password ?
            </Link>
          </div>

          <Button
            type="submit"
            className="rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 active:opacity-75 p-3 px-8 w-full shadow-xl/20"
          >
            login
          </Button>
          <div className="flex gap-1">
            Don't have an account ?
            <Link to="/signup" className="text-indigo-700">
              Sign up
            </Link>
          </div>
        </Field>
      </form>
    </div>
  );
}
