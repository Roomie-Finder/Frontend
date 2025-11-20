import axios from "axios";
import { useEffect, useState } from "react";
import Masonry from "react-responsive-masonry";
import RoomCard from "./RoomCard";
import PageLoader from "../../Layout/PageLoader";
import { useNavigate } from "react-router";

export default function Rooms() {
  let navigate = useNavigate();
  let api = import.meta.env.VITE_BACKEND_URL;
  let [rooms, setRooms] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
        let response = await axios.get(`${api}/room`);
        setRooms(response?.data);
      } catch (e) {
        alert("error occured while fetching room information");
        navigate("/");
      } finally {
        setLoading(false);
      }
    }
    fetchRooms();
  }, []);

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <div className="container px-0 sm:px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {rooms?.map((room) => (
              <RoomCard
                key={room.id}
                id={room.id}
                image={
                  room.images[0] ||
                  `https://placehold.co/600x400/e2e8f0/64748b?text=${encodeURIComponent(
                    room.roomName
                  )}`
                }
                title={room.roomName}
                location={room?.address}
                price={`₹${room?.rent}/mo`}
                type={room?.propertyType}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
