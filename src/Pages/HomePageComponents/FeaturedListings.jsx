import Masonry from "react-responsive-masonry";
import RoomCard from "../RoomPages/RoomCard";

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
            <RoomCard key={listing.id} {...listing} />
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default FeaturedListings;
