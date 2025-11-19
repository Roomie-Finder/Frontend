import axios from "axios";
import { useEffect, useState } from "react";
import UpdateProfileForm from "./UpdateProfileForm";
import { useNavigate } from "react-router";
import api from "../../api/axiosConfig";

export default function ProfileUpdate() {
  let [currentUser, setCurrUser] = useState({});
  let [isSubmitting, setIsSubmitting] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();

  useEffect(() => {
    if (user) {
      async function fetchdata() {
        try {
          let res = await api.get(`/user/${user.id}`);
          setCurrUser(res.data);
        } catch (e) {
          console.error(e);
        }
      }

      fetchdata();
    } else {
      navigate("/login");
    }
  }, []);

  let handleUpdateProfile = async (formData) => {
    setIsSubmitting(true);
    try {
      let res = await api.post(`/userProfile/${user.id}`, formData);
      if (res.status == 200 || res.status == 201) {
        navigate(`/user/${user.id}`);
      }
    } catch (e) {
      console.error(e);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <UpdateProfileForm
        currentUser={currentUser}
        onSubmit={handleUpdateProfile}
        isLoading={isSubmitting}
      />
    </>
  );
}
