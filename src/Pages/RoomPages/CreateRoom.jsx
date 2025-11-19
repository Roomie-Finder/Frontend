import { useState } from "react";
import { useNavigate } from "react-router";
import RoomForm from "./RoomForm";
import api from "../../api/axiosConfig";
import axios from "axios";
const CLOUD_NAME = import.meta.env.VITE_CLOUD_NAME || "dcdjrjgaq";
const UPLOAD_PRESET = import.meta.env.VITE_UPLOAD_PRESET;

export default function CreateRoom() {
  // Date format
  const dateObject = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[dateObject.getMonth()];
  const dayNumber = dateObject.getDate();
  const date = `${dayNumber} ${monthName.slice(0, 3)} `;

  let navigate = useNavigate();
  let [loading, setLoading] = useState(false);
  const [file, setFile] = useState([]);
  const [formData, setFormData] = useState({
    roomName: "",
    address: "",
    rent: "",
    status: "active",
    propertyType: "PG",
    lookingFor: "male",
    deposit: "",
    aboutRoom: "",
    amenities: "",
    date: date,
    roommatePreferences: "",
    images: [],
    parkingAvailable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));
    setLoading(true);

    if (!user) {
      alert("You must be logged in to create a room.");
      navigate("/login");
      return;
    }

    if (file.length == 0) {
      alert("Please upload an image for the room.");
      return;
    }

    const submissionData = {
      ...formData,
      rent: Number(formData.rent) || 0,
      deposit: Number(formData.deposit) || 0,
      amenities: formData.amenities
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      roommatePreferences: formData.roommatePreferences
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    try {
      const signatureResponse = await api.get("/api/upload/signature");

      const { signature, timestamp, api_key } = signatureResponse.data;
      let files = Array.from(file);
      let allimages = submissionData.images;

      let uploadPromises = files.map(async (item) => {
        const imageData = new FormData();
        imageData.append("file", item);
        imageData.append("upload_preset", UPLOAD_PRESET);
        imageData.append("api_key", api_key);
        imageData.append("timestamp", timestamp);
        imageData.append("signature", signature);

        const cloudinaryResponse = await axios.post(
          `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
          imageData
        );
        return cloudinaryResponse.data.secure_url;
      });
      const imageUrls = await Promise.all(uploadPromises);

      const finalSubmissionData = {
        ...submissionData,
        images: imageUrls,
      };

      let response = await api.post(
        `/room/create/${user.id}`,
        finalSubmissionData
      );

      if (response.status === 200 || response.status === 201) {
        navigate("/room");
      }
    } catch (e) {
      console.error("Failed to create room:", e);
      const errorMessage = e.response?.data?.error?.message || e.message;
      alert(`Failed to create room: ${errorMessage}`);
      setLoading(false);
    }
  };

  return (
    <RoomForm
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
      handleFileChange={handleFileChange}
      loading={loading}
    />
  );
}
