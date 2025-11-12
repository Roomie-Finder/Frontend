import { useEffect, useState } from "react";
import {
  CheckBadgeIcon,
  LocationIcon,
  BedIcon,
  BriefCaseIcon,
  LangaugeIcon,
  WFHIcon,
  HomeIcon,
} from "../../Layout/Icons";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AnimatedNotification from "@/components/lightswind/animated-notification.tsx";
import { Home, PlusIcon } from "lucide-react";
import { HomeModernIcon } from "@heroicons/react/16/solid";
import ProfileBack from "../../assets/ProfileBack.JPG";

export default function UserProfile() {
  let [User, setUser] = useState({});
  let [loading, setLoading] = useState(true);
  let { userid } = useParams();
  let [userRooms, setuserRooms] = useState([]);

  useEffect(() => {
    async function getuser() {
      if (!userid) return;
      setLoading(true);
      try {
        let newuser = await axios.get(`http://localhost:8080/user/${userid}`);
        let rooms = await axios.get(
          `http://localhost:8080/room/user/${userid}`
        );
        setUser(newuser.data);
        setuserRooms(rooms.data);
        console.log(newuser.data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }

    getuser();
  }, [userid]);

  if (loading) {
    return (
      <div className="flex justify-center items-center text-indigo-600 text-2xl font-semibold min-h-screen">
        <svg
          className="mr-3 size-8 animate-spin border-4 border-indigo-200 border-t-indigo-600 rounded-full"
          viewBox="0 0 24 24"
        ></svg>
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="lg:px-24 flex flex-col gap-10 bg-gray-50 min-h-screen">
      <AnimatedNotification
        autoGenerate={false}
        maxNotifications={3}
        variant="glass"
        position="top-right"
        showAvatars={false}
        allowDismiss={true}
        notifications={[]}
        autoDismissTimeout={3000}
      />

      <div className=" pb-2 rounded-2xl gap-5 items-center bg-white">
        <div>
          <img
            src={ProfileBack}
            alt=""
            loading="lazy"
            className="w-full h-50 object-cover rounded-2xl"
          />
        </div>
        <div className="flex">
          <img
            src={`https://avatar.iran.liara.run/public/boy?username=${User.firstName}`}
            alt="User Avatar"
            className="absolute rounded-full h-24 sm:h-32 shadow-lg p-1 aspect-square border translate-x-15 -translate-y-10"
            loading="lazy"
          />
          <div className="flex flex-col items-start ms-60">
            <h1 className="flex items-center gap-2 sm:text-2xl lg:text-3xl text-gray-900 text-nowrap  ">
              <span>{User?.firstName || ""}</span>{" "}
              <span>{User?.lastName || ""}</span>
              <CheckBadgeIcon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500" />
            </h1>
            <p className="sm:text-xl text-gray-600">
              {User?.userProfile?.personalInfo?.age} years old
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <LocationIcon className="size-4" />
              {User?.userProfile?.personalInfo?.city || "Location not set"}
            </p>
          </div>
          <div className=" m-auto col-span-2 ">
            <Link
              to="/user/update"
              className="text-white text-sm sm:text-base rounded-full sm:px-6 sm:py-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition-all duration-300"
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-8">
          {/* About Me */}
          <div className="bg-white rounded-2xl px-6 py-5">
            <h2 className="text-xl text-gray-700">About Me</h2>
            <hr className="border border-gray-200 my-4" />
            <p className="text-gray-700 leading-relaxed">
              {User?.userProfile?.personalInfo?.aboutUser ||
                "This user hasn't written an about section yet."}
            </p>
            <h2 className="text-xl text-gray-700 mt-8">Looking for</h2>
            <hr className="border border-gray-200 my-2" />
            <div className="flex flex-wrap gap-3 text-gray-700">
              A clean, responsible roommate who respects shared spaces and quiet
              hours. Ideally someone around my age who's also working full-time.
            </div>
          </div>

          {/* Create Room  */}
          <div className="rounded-2xl px-6 py-5 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg text-white">
            <h2 className="text-2xl font-bold">Have a spare room?</h2>
            <p className="mt-2 mb-4 opacity-90">
              List your room and find the perfect roommate today.
            </p>
            <Link
              to="/room/create"
              className="inline-flex items-center gap-2 justify-center w-full text-base font-semibold py-3 px-5 bg-white text-indigo-600 rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 hover:-translate-y-0.5"
            >
              <PlusIcon className="size-5" />
              List Your Room
            </Link>
          </div>

          {/* Lifestyle Card */}
          <div className="rounded-2xl px-6 shadow-lg py-5 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 pb-4">Lifestyle</h2>
            <div className="flex flex-wrap gap-2">
              {User?.userProfile?.lifeStyle?.socialHabits.map((lifeStyle) => (
                <div
                  key={lifeStyle}
                  className="inline-block bg-indigo-100 rounded-full py-1.5 px-4 text-indigo-800 font-medium text-nowrap"
                >
                  {lifeStyle}
                </div>
              ))}
            </div>
          </div>

          {/* Interests Card */}
          <div className="rounded-2xl px-6 shadow-lg py-5 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 pb-4">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {User?.userProfile?.lifeStyle?.interests?.map((interest) => (
                <p
                  key={interest}
                  className="inline-block bg-rose-100 rounded-full text-rose-800 py-1.5 px-4 font-medium"
                >
                  {interest}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-2 flex flex-col gap-8">
          <div className="shadow-lg p-6 py-7 rounded-2xl bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              <InfoItem
                icon={<BriefCaseIcon className="size-6" />}
                label="Occupation"
                value={User?.userProfile?.personalInfo?.occupation}
              />
              <InfoItem
                icon={<LangaugeIcon className="size-6" />}
                label="Language"
                value={User?.userProfile?.personalInfo?.nativeLanguage}
              />
              <InfoItem
                icon={<WFHIcon className="size-6" />}
                label="Work Arrangement"
                value={User?.userProfile?.personalInfo?.workFromHome}
              />
              <InfoItem
                icon={<BedIcon className="size-6" />}
                label="Preferred Room Type"
                value={User?.userProfile?.roomStatus?.preferredRoomType}
              />
            </div>
          </div>

          <div className="rounded-2xl shadow-lg px-6 py-5 bg-white flex flex-col gap-3">
            <h2 className="text-2xl font-bold text-gray-900">
              Room Preferences
            </h2>
            <hr className="border border-gray-200 my-2" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-md font-semibold text-gray-800">Location</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {User?.userProfile?.roomStatus?.locationPreference?.length >
                  0 ? (
                    User.userProfile.roomStatus.locationPreference.map(
                      (location) => (
                        <p
                          key={location}
                          className="inline-block pe-2 text-gray-700"
                        >
                          {location}
                        </p>
                      )
                    )
                  ) : (
                    <p className="text-gray-500">No specified locations</p>
                  )}
                </div>
              </div>
              <div>
                <p className="text-md font-semibold text-gray-800">Budget</p>
                <p className="text-gray-700 mt-2">&#8377;5000</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-lg px-6 py-5 bg-white">
            <h2 className="text-2xl font-bold text-gray-900 pb-6 flex flex-col ">
              My Rooms
            </h2>
            <div className=" flex flex-col gap-2 *:rounded-full w-full  *:border-2 *:border-gray-300/50 *:bg-violet-200/20 *:px-10 *cursor-pointer ">
              {userRooms.length
                ? userRooms.map((room) => (
                    <Link
                      to={`/room/${room.id}`}
                      className="px-7 py-3 w-full flex "
                    >
                      <div className="w-full grid grid-cols-2 truncate">
                        <h1 className="flex items-center gap-2 text-violet-800">
                          <HomeModernIcon className="size-4" /> {room.roomName}
                        </h1>
                        <p className="flex gap-1 items-center">
                          <LocationIcon />
                          {room.address}
                        </p>
                      </div>
                    </Link>
                  ))
                : "no"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const InfoItem = ({ icon, label, value }) => {
  if (!value) return null;
  return (
    <div className="flex items-center gap-4">
      <div className="flex-shrink-0 text-gray-500">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <h6 className="font-semibold text-lg text-gray-900">{value}</h6>
      </div>
    </div>
  );
};
