import axios from "axios";
import React, { useEffect, useState } from "react";
import Masonry from "react-responsive-masonry";
import RoomCard from "./RoomCard";

export default function Rooms() {
  let [rooms, setRooms] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
        let response = await axios
          .get("http://localhost:8080/room")
          .catch((err) => console.error(err));
        setRooms(response.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchRooms();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center text-blue-500 text-2xl font-bold mt-50">
        <svg
          className="mr-3 size-7 animate-spin border-5 border-blue-200 border-t-blue-500 rounded-full"
          viewBox="0 0 24 24"
        ></svg>
        Processing…
      </div>
    );
  }

  return (
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
  );
}
