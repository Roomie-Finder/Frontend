import axios from "axios";
import { useEffect, useState } from "react";
import UpdateProfileForm from "./UpdateProfileForm";

export default function ProfileUpdate() {
  let [currentUser, setCurrUser] = useState({});
  let [isSubmitting, setIsSubmitting] = useState(false);
  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    async function fetchdata() {
      try {
        let res = await axios.get(`http://localhost:8080/user/${user.id}`);
        console.log(res.data);
        setCurrUser(res.data);
      } catch (e) {
        console.error(e);
      }
    }

    fetchdata();
  }, []);

  let handleUpdateProfile = async (formData) => {
    setIsSubmitting(true);
    console.log(formData);
    try {
      let res = await axios.post(
        `http://localhost:8080/userProfile/${user.id}`,
        formData
      );
      console.log(res.data);
      setCurrUser(res.data);
    } catch (e) {
      console.error(e);
    }
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
