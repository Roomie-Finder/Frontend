import {
  CheckBadgeIcon,
  LocationIcon,
  BedIcon,
  BriefCaseIcon,
  LangaugeIcon,
  WFHIcon,
} from "../../Layout/Icons";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import RoomCard from "../RoomPages/RoomCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import AnimatedNotification from "@/components/lightswind/animated-notification.js";
import api from "../../api/axiosConfig";
import PageLoader from "../../Layout/PageLoader";

export default function UserProfile() {
  let localUser = JSON.parse(localStorage.getItem("user"));
  let [User, setUser] = useState({});
  let [loading, setLoading] = useState(true);
  let { useridFromParam } = useParams();
  let [userRooms, setuserRooms] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    async function getuser() {
      if (!useridFromParam) {
        alert("error occured");
        navigate("/no page found");
      }

      setLoading(true);
      try {
        let newuser = await api.get(`/user/${useridFromParam}`);
        let rooms = await api.get(`/room/user/${useridFromParam}`);
        setUser(newuser.data);
        setuserRooms(rooms.data);
      } catch (e) {
        alert("error occured while fetching user...");
        navigate("/room");
      } finally {
        setLoading(false);
      }
    }

    getuser();
  }, [useridFromParam]);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="lg:px-24 flex flex-col gap-10  min-h-screen pb-20 rounded-2xl ">
      <AnimatedNotification
        autoGenerate={false}
        maxNotifications={3}
        variant="glass"
        position="top-right"
        showAvatars={true}
        allowDismiss={true}
        notifications={[]}
        autoDismissTimeout={3000}
      />

      <div className=" pb-2 rounded-2xl gap-5 items-center ">
        <div>
          <img
            src="https://res.cloudinary.com/dcdjrjgaq/image/upload/v1763302660/ProfileBack_dc03v9.webp"
            alt=""
            loading="lazy"
            className="w-full h-50 object-cover rounded-t-2xl"
            fetchPriority="high"
          />
        </div>
        <div className="flex rounded-b-2xl outline-3 outline-gray-200/10 pb-3 shadow-sm/10">
          <img
            src={`https://avatar.iran.liara.run/public/boy?username=${User.firstName}&size=150`}
            alt="User Avatar"
            className="absolute rounded-full h-24 sm:h-32 shadow-lg p-1 aspect-square border translate-x-15 -translate-y-10"
            loading="lazy"
          />
          <div className="flex-grow flex-col items-start ms-60">
            <h1 className="flex items-center gap-2 sm:text-2xl lg:text-3xl text-gray-700 text-nowrap  ">
              <span>{User?.firstName || ""}</span>{" "}
              <span>{User?.lastName || ""}</span>
              <CheckBadgeIcon className="w-4 h-4 sm:w-6 sm:h-6 text-blue-500" />
            </h1>
            <p className="sm:text-lg text-gray-600">
              {User?.userProfile?.personalInfo?.age} years old
            </p>
            <p className="flex items-center gap-2 text-gray-600">
              <LocationIcon className="size-4" />
              {User?.userProfile?.personalInfo?.city || "Location not set"}
            </p>
          </div>
          <div className=" m-auto me-10">
            <Link
              to="/user/update"
              className="text-white text-sm sm:text-base rounded-full sm:px-6 sm:py-3 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 "
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
        <div className="flex flex-col gap-8">
          {/* About Me */}
          <div className="bg-gray-400/5 rounded-2xl px-6 py-5 outline-2 outline-gray-400/5">
            <h2 className="text-xl text-gray-700">About Me</h2>
            <hr className="border-t border-gray-500/40 my-4" />
            <p className="text-gray-700 leading-relaxed">
              {User?.userProfile?.personalInfo?.aboutUser ||
                "This user hasn't written an about section yet."}
            </p>
            <h2 className="text-xl text-gray-700 mt-8">Looking for</h2>
            <hr className="border-t border-gray-500/40 my-2" />
            <div className="flex flex-wrap gap-3 text-gray-700">
              {User?.userProfile?.roomStatus?.lookingFor}
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
        </div>
        <div className="col-span-2 flex flex-col gap-8">
          {/* Info like occupation & etc  */}
          <div className="shadow-lg/3 p-6 py-7 rounded-2xl bg-gray-400/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
              <InfoItem
                icon={<BriefCaseIcon className="size-6 text-violet-400" />}
                label="Occupation"
                value={User?.userProfile?.personalInfo?.occupation}
              />
              <InfoItem
                icon={<LangaugeIcon className="size-6 text-green-400" />}
                label="Language"
                value={User?.userProfile?.personalInfo?.nativeLanguage}
              />
              <InfoItem
                icon={<WFHIcon className="size-6 text-orange-400" />}
                label="Work Arrangement"
                value={User?.userProfile?.personalInfo?.workFromHome}
              />
              <InfoItem
                icon={<BedIcon className="size-6 text-blue-400" />}
                label="Preferred Room Type"
                value={User?.userProfile?.roomStatus?.preferredRoomType}
              />
            </div>
          </div>

          {/* Lifestyle Card */}
          <div className="rounded-2xl px-6 shadow-lg/3 py-5 bg-gray-400/5">
            <h2 className="text-2xl pb-4">Lifestyle</h2>
            <div className="flex flex-wrap gap-2 grid grid-cols-2 sm:grid-cols-5">
              {User?.userProfile?.lifeStyle?.socialHabits.map((lifeStyle) => (
                <div
                  key={lifeStyle}
                  className=" bg-indigo-100 rounded-full py-1.5 px-6 text-indigo-800 font-medium text-nowrap"
                >
                  {lifeStyle}
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies and Interests Card */}
          <div className="rounded-2xl px-6 shadow-lg/3 py-5 bg-gray-400/5">
            <h2 className="text-2xl  pb-4">Hobbies & Interests</h2>
            <div className="flex flex-wrap gap-2 grid grid-cols-2 sm:grid-cols-5">
              {User?.userProfile?.lifeStyle?.interests?.map((interest) => (
                <p
                  key={interest}
                  className="inline-block bg-rose-100 rounded-full text-rose-800 py-1.5 px-6 font-medium"
                >
                  {interest}
                </p>
              ))}
            </div>
          </div>

          {/* Room Preferences */}
          <div className="rounded-2xl shadow-lg/3 px-6 py-5 bg-gray-400/5 flex flex-col gap-3">
            <h2 className="text-2xl ">Room Preferences</h2>
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
                <p className="text-gray-700 mt-2">
                  &#8377;{User?.userProfile?.roomStatus?.budget || " 0.00"}
                </p>
              </div>
            </div>
          </div>

          {/* User Rooms */}
          <div className="rounded-2xl shadow-lg/3 px-6 py-5 bg-gray-400/5 ">
            <h2 className="text-2xl   pb-6 flex flex-col ">My Rooms</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-3  *cursor-pointer ">
              {userRooms.length
                ? userRooms.map((room, index) => (
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
                      location={room.address}
                      price={`₹${room?.rent}/mo`}
                      type={room?.propertyType}
                    />
                  ))
                : "create your first room"}
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
        <h6 className="font-semibold text-lg ">{value}</h6>
      </div>
    </div>
  );
};
