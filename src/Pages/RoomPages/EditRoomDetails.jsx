import axios from "axios";
import { useEffect, useState } from "react";
import api from "../../api/axiosConfig";
import { useNavigate, useParams } from "react-router";
import EditRoomForm from "./EditRoomForm";

export default function EditRoomDetails() {
  let navigate = useNavigate();
  let { roomid } = useParams();
  let postApi = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    async function getRoomInfo() {
      try {
        let url = `${postApi}/room/${roomid}`;
        let response = await axios.get(url);
        setFormData(response.data);
      } catch (e) {
        alert("error occured updating room information..");
        navigate(`/room/${roomid}`);
      }
    }
    getRoomInfo();
  }, []);

  let date = getDate();
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

  return (
    <EditRoomForm
      formData={formData}
      setFormData={setFormData}
      roomid={roomid}
    />
  );
}

function getDate() {
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
  return `${dayNumber} ${monthName.slice(0, 3)} `;
}
