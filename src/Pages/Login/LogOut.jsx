import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function UserLogOut() {
  let navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("user");
    navigate("/");
  }, []);
  return <></>;
}
