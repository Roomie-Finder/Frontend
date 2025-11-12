import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Masonry from "react-responsive-masonry";
import { Heart, MapPin, Eye } from "lucide-react";

const ImageWithFallback = ({ src, alt, ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = `https://placehold.co/600x400/e2e8f0/64748b?text=${encodeURIComponent(
          alt
        )}`;
      }}
      {...props}
    />
  );
};

function RoomCard({ id, image, title, location, price, type }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Link to={id} className="block relative group">
      <div className="group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:z-10">
        <ImageWithFallback
          src={image}
          alt={title}
          className="block w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${
                isFavorite ? "fill-red-500 text-red-500" : "text-white"
              }`}
            />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
            }}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110"
          >
            <Eye className="w-5 h-5 text-white" />
          </button>
        </div>

        {type && (
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1 bg-blue-200/80 backdrop-blur-md rounded-full text-blue-600 text-xs border border-white/30">
              {type}
            </div>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-300">
          <div className="transform transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="mb-2 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75">
              <span className="text-2xl">{price}</span>
            </div>
            <h3 className="mb-2 text-white line-clamp-2">{title}</h3>
            <div className="flex items-center gap-1 opacity-80">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 border-4 border-white/0 group-hover:border-white/20 rounded-3xl transition-all duration-300 pointer-events-none" />
      </div>
    </Link>
  );
}

RoomCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  location: PropTypes.string,
  price: PropTypes.string,
  type: PropTypes.string,
};

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
              room.imageUrl ||
              `https://placehold.co/600x400/e2e8f0/64748b?text=${encodeURIComponent(
                room.roomName
              )}`
            }
            title={room.roomName}
            location={room.address}
            price={`₹${room.rent}/mo`}
            type={room.propertyType}
          />
        ))}
      </Masonry>
    </div>
  );
}
