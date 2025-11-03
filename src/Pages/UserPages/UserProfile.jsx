import { useEffect, useState } from "react";
import {
  CheckBadgeIcon,
  LocationIcon,
  BedIcon,
  BriefCaseIcon,
  LangaugeIcon,
  WFHIcon,
} from "../../Components/UI_Components/Icons/Icons";
import axios from "axios";

export default function UserProfile() {
  let [User, setUser] = useState({});
  let [loading, setLoading] = useState(true);
  let [Rooms, setRooms] = useState([{}]);

  useEffect(() => {
    async function getuser() {
      try {
        let newuser = await axios.get(
          "http://localhost:8080/user/68eeb8c033eece2d80fe7db3"
        );
        setUser(newuser.data);
        console.log(newuser.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
        console.log("loading ended");
      }
    }

    getuser();
  }, [setUser]);

  if (loading) {
    return (
      <div className="flex justify-center items-center text-blue-500 text-2xl font-semibold mt-50">
        <svg
          className="mr-3 size-7 animate-spin border-5 border-blue-200 border-t-blue-500 rounded-full  "
          viewBox="0 0 24 24"
        ></svg>
        Processing…
      </div>
    );
  }

  return (
    <div className="lg:px-30 flex flex-col gap-10">
      <div className="userinfo flex shadow-lg p-3 px-8 rounded-xl gap-5  relative items-center">
        <img
          src="https://avatar.iran.liara.run/public"
          alt="image not found !   "
          className="rounded-full sm:h-35 h-20 shadow-lg p-1 aspect-square"
          loading="lazy"
        />
        <div>
          <div className="text-center flex flex-row items-center gap-2 ">
            <h1 className="sm:text-3xl lg:text4xl font-semibold text-nowrap ">
              {User.firstName + " " + User.lastName}
            </h1>
            <CheckBadgeIcon className="w-3 h-3 sm:w-5 sm:h-5" />
          </div>
          <p className="sm:text-xl text-gray-600">
            {User?.userProfile?.personalInfo?.age} years old
          </p>
          <p className="flex items-center gap-1">
            <LocationIcon />
            {User?.userProfile?.personalInfo?.city}
          </p>
        </div>
        <div className="ms-auto">
          <button className="text-white text-sm rounded-full sm:px-5 sm:p-3 px-2 p-1 bg-linear-to-r from-indigo-500 via-purple-500  to-pink-500 hover:-translate-y-1 ">
            Message
          </button>
        </div>
      </div>
      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6">
        <div className="col-span-2 flex flex-col gap-10">
          <div className=" shadow-lg p-6 py-7 rounded-xl">
            <p className="text-xl font-semibold ">About Me</p>
            <hr className=" border border-gray-200 my-3 " />
            <p>{User.userProfile.personalInfo.aboutUser}</p>
          </div>
          <div className=" grid grid-cols-2 gap-10 mt-3 *:bg-blue-100 *:rounded-xl *:p-3 *:flex *:items-center *:gap-2">
            <div className="  ">
              <div className=" rounded-full p-2 shadow-lg">
                <BriefCaseIcon className="text-gray-500 size-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Occupation</p>
                <h6 className="font-semibold text-lg">
                  {User.userProfile.personalInfo.occupation}
                </h6>
              </div>
            </div>
            <div className="">
              <div className="shadow-lg rounded-full p-2">
                <LangaugeIcon className="text-green-500 size-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Language</p>
                <h6 className="font-semibold text-lg">
                  {User.userProfile.personalInfo.nativeLanguage}
                </h6>
              </div>
            </div>
            <div className="">
              <div className="shadow-lg rounded-full p-2">
                <WFHIcon className="size-6 text-orange-500" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Work from home</p>
                <h6 className="font-semibold text-lg">
                  {User?.userProfile?.personalInfo?.workFromHome}
                </h6>
              </div>
            </div>

            <div className="">
              <div className="shadow-lg rounded-full p-2">
                <BedIcon className="text-blue-500 size-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Looking for</p>
                <h6 className="font-semibold text-lg">
                  {User.userProfile.roomStatus.preferredRoomType}
                </h6>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-lg px-5 py-5 flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Room Preferences</h2>
            <div className="grid grid-cols-2 ">
              <div>
                <p className="text-md font-semibold">Location </p>
                {User?.userProfile?.roomStatus?.locationPreference?.map(
                  (location) => {
                    return (
                      <p key={location} className="inline-block pe-2">
                        {" "}
                        {location}{" "}
                      </p>
                    );
                  }
                )}
              </div>
              <div>
                <p className="text-md font-semibold">Budget</p>
                <p>&#8377;5000</p>
              </div>
            </div>
          </div>
          <div className="rounded-xl shadow-lg px-5 py-5">
            <h2 className="text-xl font-semibold pb-3">Available rooms</h2>
            <p>No room Available</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 *:rounded-xl *:px-5 *:shadow-lg *:py-5">
          <div className="">
            <h2 className="text-xl font-semibold pb-3">Looking for</h2>
            <div className="flex *:bg-green-100 *:rounded-full w-max *:py-1 *:px-4 gap-2 ">
              {User?.userProfile?.roomStatus?.lookingForRoom == true && (
                <p className="text-green-800 ">Room</p>
              )}
              {User.userProfile.roomStatus.lookingForRoommate == true && (
                <p className="text-green-800">Roommate </p>
              )}
            </div>
          </div>
          <div className=" *:my-2">
            <h2 className="text-xl font-semibold">LifeStyle</h2>
            <div className=" gap-2 flex flex-wrap">
              {User.userProfile.lifeStyle.socialHabits.map((lifeStyle) => {
                return (
                  <div className="inline-block bg-purple-100 rounded-full py-1 px-4 text-purple-800 text-nowrap">
                    {lifeStyle}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <h2 className="text-xl font-semibold pb-3">Interests</h2>
            <div className="flex flex-wrap gap-1">
              {User?.userProfile?.lifeStyle?.interests?.map((interest) => {
                return (
                  <p className="inline-block bg-red-100 rounded-full text-red-800 py-1 px-4">
                    {interest}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
