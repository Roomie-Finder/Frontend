import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import FullScreenLoader from "../../Components/UI_Components/Icons/Animations";

export default function UserLogOut() {
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("user");
    navigate("/");
  }, []);
  return <></>;
}
