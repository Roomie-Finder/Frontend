import axios from "axios";
import { useEffect, useState } from "react";
import UpdateProfileForm from "./UpdateProfileForm";
import { useNavigate } from "react-router";

export default function ProfileUpdate() {
  let [currentUser, setCurrUser] = useState({});
  let [isSubmitting, setIsSubmitting] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));
  let navigate = useNavigate();

  useEffect(() => {
    async function fetchdata() {
      try {
        let res = await axios.get(`http://localhost:8080/user/${user.id}`);
        setCurrUser(res.data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchdata();
  }, []);

  let handleUpdateProfile = async (formData) => {
    setIsSubmitting(true);
    try {
      let res = await axios.post(
        `http://localhost:8080/userProfile/${user.id}`,
        formData
      );
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
