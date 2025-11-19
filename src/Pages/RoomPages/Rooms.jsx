import axios from "axios";
import { useEffect, useState } from "react";
import Masonry from "react-responsive-masonry";
import RoomCard from "./RoomCard";
import PageLoader from "../../Layout/PageLoader";

export default function Rooms() {
  let [rooms, setRooms] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
        let response = await axios.get("http://localhost:8080/room");
        setRooms(response?.data);
      } catch (e) {
        console.error(e);
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
        <div className="container mx-auto px-4 py-8">
          <Masonry columnsCount={3} gutter="1.5rem">
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
          </Masonry>
        </div>
      )}
    </>
  );
}
