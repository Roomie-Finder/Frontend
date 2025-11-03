import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BedIcon,
  CalenderIcon,
  ImageIcon,
  LocationIcon,
  PeopleIcon,
} from "../../Components/UI_Components/Icons/Icons";

export default function Rooms() {
  let [rooms, setRooms] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRooms() {
      try {
        let response = await axios
          .get("http://localhost:8080/room")
          .catch((err) => console.log(err));
        setRooms(response.data);
        console.log(response.data);
      } catch (e) {
        console.log(e);
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
          className="mr-3 size-7 animate-spin border-5 border-blue-200 border-t-blue-500 rounded-full  "
          viewBox="0 0 24 24"
        ></svg>
        Processing…
      </div>
    );
  }

  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 ">
      {rooms.map((room) => {
        return (
          <Link
            to={room.id}
            className="card relative w-auto flex sm:flex-row flex-col p-3 rounded-2xl outline-2 outline-gray-100 hover:shadow-lg hover:scale-103 overflow-hidden "
            key={room.id}
          >
            <div className="absolute bg-gray-100 rounded-full px-2 right-2 text-sm text-violet-700">
              room available
            </div>
            <div className="image sm:aspect-4/5 aspect-video sm:w-60 min-w-40 bg-red-200 flex justify-center items-center rounded-xl">
              <ImageIcon />
            </div>
            <div className=" flex flex-col justify-evenly ms-2 gap-2 w-full  p-2 lg:gap-5">
              <div>
                <div className=" text-lg md:text-xl ">{room.roomName}</div>
                <div className="text-xs md:text-sm flex items-center gap-1 text-gray-500 ">
                  <LocationIcon />
                  {room.address}
                </div>
              </div>
              <div className="flex flex-row justify-between ">
                <div className="flex flex-row items-baseline text-normal ">
                  <p className="text-lg md:text-2xl">&#8377;{room.rent}</p>
                  <div className="text-sm text-gray-500"> /month</div>
                </div>
              </div>
              <div className=" flex justify-between gap-auto  *:flex *:gap-2 wrap-normal">
                <div className="">
                  <div className="">
                    <PeopleIcon className="text-pink-500 size-4  md:size-5" />
                  </div>
                  <div className="text-sm text-gray-500 md:text-base">
                    {room.members.length} Male
                  </div>
                </div>
                <div className="">
                  <BedIcon className="text-blue-400 size-4  md:size-5" />
                  <div className="text-sm md:text-base text-gray-500">
                    {room.propertyType}
                  </div>
                </div>
                <div>
                  <CalenderIcon className="text-yellow-400 size-4 md:size-5" />
                  <div className="text-sm md:text-base text-gray-500">
                    10 Oct
                  </div>
                </div>
              </div>
              <div className="wrap-normal flex text-xs gap-2 *:px-2 *:bg-gray-200 *:rounded-full *:text-gray-700">
                {room.amenities.map((val) => {
                  return (
                    <div className="text-nowrap " key={val}>
                      {" "}
                      {val}
                    </div>
                  );
                })}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
