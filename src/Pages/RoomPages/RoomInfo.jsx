import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  BedIcon,
  CalenderIcon,
  CheckIcon,
  HomeIcon,
  KitchenIcon,
  LocationIcon,
  ParkingIcon,
  PeopleIcon,
  WashingMachineIcon,
  WifiIcon,
} from "../../Components/UI_Components/Icons/Icons";

export default function RoomInfo() {
  let [loading, setLoading] = useState(true);
  let { roomid } = useParams();
  let [room, setroom] = useState({});

  useEffect(() => {
    if (roomid) {
      async function getroom() {
        try {
          let response = await axios.get(
            `http://localhost:8080/room/${roomid}`
          );
          setroom(response.data);
        } catch (e) {
          console.error(e);
        } finally {
          setLoading(false);
        }
      }

      getroom();
    } else {
    }
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

  const amenityIcons = {
    Wifi: WifiIcon,
    Parking: ParkingIcon,
    Kitchen: KitchenIcon,
    "Washing Machine": WashingMachineIcon,
  };

  return (
    <div className="xl:px-20 p-0 flex flex-col lg:grid lg:grid-cols-3 gap-5 ">
      <div className="left-side flex flex-col col-span-2 gap-5">
        <div className="aspect-[16/10] rounded-2xl overflow-hidden ">
          <img
            src="abc"
            alt=""
            loading="lazy"
            className="bg-blue-100 w-full h-full object-cover"
          />
        </div>

        <div className="">
          <div className="flex relative w-full ">
            <h2 className="text-2xl">{room?.roomName} </h2>
            <p className="absolute right-2 rounded-full bg-green-500 px-2 text-white text-xs md:text-base">
              {" "}
              Availible
            </p>
          </div>
          <div className="flex items-baseline gap-2 ">
            <LocationIcon />
            <p className="text-gray-600">{room?.address}</p>
          </div>
          <div className="text-3xl flex items-baseline pt-2 gap-2 mt-1">
            &#8377; {room?.rent}
            <p className="text-base text-gray-600">/month</p>
          </div>
        </div>
        {/* Room Information */}
        <div className="grid md:grid-cols-4 grid-cols-2 gap-3 rounded-xl  p-5 outline-1 outline-gray-200 *:flex *:gap-3">
          <div className="">
            <div>
              <div className="text-xl text-blue-600 bg-blue-100 rounded-full p-3 aspect-square">
                <BedIcon />
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Property Type</p>
              <p>{room?.propertyType}</p>
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-xl text-purple-600 bg-purple-100 rounded-full p-3 aspect-square">
                <PeopleIcon />
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Looking for</p>
              <p>{room?.lookingFor}</p>
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-xl text-orange-600 bg-orange-100 rounded-full p-3 aspect-square">
                <CalenderIcon />
              </div>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Available on </p>
              <p>Oct 10</p>
            </div>
          </div>
          <div className="">
            <div>
              <div className="text-xl text-green-600 bg-green-100 rounded-full p-3 aspect-square">
                <HomeIcon />
              </div>
            </div>
            <div className="">
              <p className="text-gray-500 text-sm">Deposit</p>
              <p>&#8377;{room?.deposit}</p>
            </div>
          </div>
        </div>

        <div className="outline-1 outline-gray-200 p-5 rounded-xl">
          <h1 className="pb-5 text-lg font-semibold">About this room</h1>
          <p className="text-gray-500">{room?.aboutRoom}</p>
        </div>
        {/* Amenities */}
        <div className="outline-2 outline-gray-100 p-5 rounded-xl ">
          <h1 className=" pb-5">Amenities</h1>
          <div className="grid md:grid-cols-3 grid-cols-2 *:flex *:items-center gap-4 *:gap-3">
            {room?.amenities.map((amenity) => {
              let Icon = amenityIcons[amenity];
              return (
                <div className="">
                  <div className="p-2 bg-gray-100 rounded-lg "></div>
                  <div className="text-nowrap">{amenity}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Roommates */}
        <div className="outline-2 outline-gray-100 p-5 rounded-xl flex flex-col gap-5">
          <h1 className="mb-2">Current Roommates</h1>
          {room?.members?.map((member) => {
            return (
              <Link
                to={`http://localhost:5173/user/${member?.id}`}
                className="relative flex bg-gray-50 rounded-full p-3 items-center gap-5"
                key={member?.email}
              >
                <img
                  src="abc.jpg"
                  alt="not found"
                  className="rounded-full bg-orange-100 h-15 aspect-square"
                />
                <div>
                  <p>
                    {member?.firstName} {member?.lastName} ,{" "}
                    {member?.userProfile?.personalInfo?.age}
                  </p>
                  <p className="font-light">
                    {member?.userProfile?.personalInfo?.occupation}{" "}
                  </p>
                </div>
              </Link>
            );
          })}
          <div className="bg-blue-50 outline-1 outline-blue-100 p-3 rounded-xl *:flex *:text-sm *:font-light *:gap-3 ">
            {room?.roommatePreferences.map((value) => {
              return (
                <div className="" key={value}>
                  <div className="text-blue-700  ">
                    <CheckIcon />
                  </div>
                  {value}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="right-side flex flex-col gap-5 *:p-3 *:rounded-xl *:outline-2 *:outline-gray-100 ">
        <div className="sticky top-10 backdrop-blur-sm ">
          <button className="bg-violet-400 text-white rounded-full ppx-3 p-2 w-full hover:bg-violet-500 hover:text-white">
            contact owner
          </button>
        </div>
        <div className="">
          <p className="py-3 text-lg">Location</p>
          <iframe
            loading="lazy"
            src={`https://www.google.com/maps?q=${room?.address}&output=embed`}
            className="w-full rounded-xl h-100"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
