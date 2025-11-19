import axios from "axios";
import { useEffect, useState } from "react";
import UpdateProfileForm from "./UpdateProfileForm";
import { useNavigate } from "react-router";
import api from "../../api/axiosConfig";

export default function ProfileUpdate() {
  let [currentUser, setCurrUser] = useState({});
  let [loading, setloading] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      async function fetchdata() {
        try {
          let res = await api.get(`/user/${user.id}`);
          setCurrUser(res.data);
        } catch (e) {
          alert("error occured while fetching user information");
          navigate("/");
        }
      }

      fetchdata();
    } else {
      navigate("/login");
    }
  }, []);

  let handleUpdateProfile = async (formData) => {
    setloading(true);
    try {
      let res = await api.post(`/userProfile/${user.id}`, formData);
      if (res.status == 200 || res.status == 201) {
        navigate(`/user/${user.id}`);
      }
    } catch (e) {
      alert("error occured while updating user information");
      navigate("/");
    }
    setloading(false);
  };

  return (
    <>
      <UpdateProfileForm
        currentUser={currentUser}
        onSubmit={handleUpdateProfile}
        loading={loading}
      />
    </>
  );
}
