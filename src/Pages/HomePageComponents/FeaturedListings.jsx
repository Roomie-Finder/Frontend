import React, { useState } from "react";
import PropTypes from "prop-types";
import Masonry from "react-responsive-masonry";
import { Heart, MapPin, Eye } from "lucide-react";

const listings = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?auto=format&fit=crop&q=80&w=1170",
    title: "Roommate Wanted for City View Loft",
    location: "Downtown, NY",
    price: "$1,400/mo",
    size: "medium",
    type: "Loft Share",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1505577058444-a3dab90d4253?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    title: "Quiet Room in Suburban Home",
    location: "Maplewood, NJ",
    price: "$900/mo",
    size: "small",
    type: "Room",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171",
    title: "Charming Studio for Rent",
    location: "Brooklyn, NY",
    price: "$1,950/mo",
    size: "small",
    type: "Studio",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=958",
    title: "Spacious 3-Bed Shared Apartment",
    location: "Austin, TX",
    price: "$850/mo",
    size: "medium",
    type: "Shared Apt",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    title: "Luxury Condo, 1 Room Available",
    location: "Miami, FL",
    price: "$1,800/mo",
    size: "medium",
    type: "Condo Share",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
    title: "Sunny Room near Campus",
    location: "San Francisco, CA",
    price: "$1,200/mo",
    size: "small",
    type: "Room",
  },
];

const ImageWithFallback = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
};

export function CollageCard({ image, title, location, price, size, type }) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group relative overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-[1.02] hover:z-10">
      <ImageWithFallback
        src={image}
        alt={title}
        className="block w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <button
          onClick={(e) => {
            e.stopPropagation();
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
        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all hover:scale-110">
          <Eye className="w-5 h-5 text-white" />
        </button>
      </div>

      {type && (
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-xs border border-white/30">
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
  );
}

CollageCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  type: PropTypes.string,
};

const FeaturedListings = () => {
  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center mb-4">
          Find Your Next Roommate
        </h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          Browse our gallery of verified members and open rooms.
        </p>

        <Masonry columnsCount={3} gutter="1.5rem">
          {listings.map((listing) => (
            <CollageCard key={listing.id} {...listing} />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default FeaturedListings;
