import axios from "axios";
import { useEffect, useState } from "react";

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
    return <div>loading</div>;
  }

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 ">
      {rooms.map((room) => {
        return (
          <div
            className="card w-auto flex flex-row p-3 rounded-2xl shadow-lg hover:scale-103 "
            key={room.id}
          >
            <div className="image sm:w-50 w-80 lg:h-43 lg:w-70 bg-red-200 flex justify-center items-center rounded-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-orange-600"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="card-info flex flex-col justify-start ms-2 gap-2 w-full p-2 lg:gap-5">
              <div>
                <div className="font-semibold ">Unkown user</div>
                <div className="text-xs flex items-center gap-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-3 text-gray-300"
                  >
                    <path
                      fill-rule="evenodd"
                      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {room.address}
                </div>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 w-full ">
                <div className="col-span-2 lg:col-span-1">
                  <div className="text-nowrap text-xs">Rooms available </div>
                  <div className="text-sm">{room.rooms}</div>
                </div>
                <div className="">
                  <div className="text-nowrap text-xs">Looking for </div>
                  <div className="text-sm">Male</div>
                </div>
                <div className="">
                  <div className="text-nowrap text-xs">Looking for </div>
                  <div className="text-sm">Roommate</div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-row items-start text-normal">
                  {room.rent}
                  <div className="text-sm items-center p-3 pt-1"> Rent</div>
                </div>
                <button className="text-indigo-700 bg-indigo-50 w-max hover:bg-indigo-100 p-2 px-4 rounded-full text-sm">
                  view more
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
