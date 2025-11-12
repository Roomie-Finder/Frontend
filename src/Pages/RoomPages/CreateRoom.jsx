import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function CreateRoom() {
  let navigate = useNavigate();
  const dateObject = new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[dateObject.getMonth()];
  const dayNumber = dateObject.getDate();

  const date = `${dayNumber} ${monthName.slice(0, 3)} `;

  const [formData, setFormData] = useState({
    roomName: "",
    address: "",
    rent: "",
    status: "active",
    propertyType: "PG",
    lookingFor: "male",
    deposit: "",
    aboutRoom: "",
    amenities: "",
    date: date,
    roommatePreferences: "",
    images: [],
    parkingAvailable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setSelectedFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    let user = JSON.parse(localStorage.getItem("user"));
    e.preventDefault();
    const submissionData = {
      ...formData,
      rent: Number(formData.rent) || 0,
      deposit: Number(formData.deposit) || 0,
      amenities: formData.amenities
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
      roommatePreferences: formData.roommatePreferences
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    };

    try {
      let response = await axios.post(
        `http://localhost:8080/room/create/${user.id}`,
        submissionData
      );
      console.log(response.data);
      if (response.status === 200 || response.status === 201) navigate("/room");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="w-full md:grid md:grid-cols-3 lg:px-20 mx-auto bg-white p-10 rounded-xl shadow gap-5 pb-25 ">
      <div className="col-span-1 mb-10">
        <h1 className="text-2xl font-semibold mb-6">Room Information</h1>
        <p>
          Use a permanent address where you can <br />
          receive mail.
        </p>
      </div>
      <div className="col-span-2 w-full">
        <form onSubmit={handleSubmit} className="w-full gap-5 flex flex-col">
          {/* Room Name */}
          <FormRow label="Room Name">
            <input
              type="text"
              name="roomName"
              value={formData.roomName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-xl"
              placeholder="   Zolo "
            />
          </FormRow>

          {/* Address */}
          <FormRow label="Address">
            <textarea
              type="text"
              name="address"
              rows={2}
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-xl"
              placeholder=" Hinjewadi Phase 3, Pune"
            />
          </FormRow>

          {/* Rent and Deposit  */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormRow label="Rent (per month)">
              <input
                type="number"
                name="rent"
                value={formData.rent}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-xl"
                placeholder=" 6800"
              />
            </FormRow>
            <FormRow label="Deposit">
              <input
                type="number"
                name="deposit"
                value={formData.deposit}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-xl"
                placeholder=" 10000"
              />
            </FormRow>
          </div>

          {/* Property Type and Looking For*/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormRow label="Property Type">
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-xl bg-white"
              >
                <option value="PG" selected>
                  PG
                </option>
                <option value="Apartment">Apartment</option>
                <option value="House">House</option>
                <option value="Other">Other</option>
              </select>
            </FormRow>
            <FormRow label="Looking For">
              <select
                name="lookingFor"
                value={formData.lookingFor}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-xl bg-white"
              >
                <option value="Male" selected>
                  Male
                </option>
                <option value="Female">Female</option>
                <option value="Any">Any</option>
              </select>
            </FormRow>
          </div>

          {/* About Room */}
          <FormRow label="About Room">
            <textarea
              name="aboutRoom"
              rows="4"
              value={formData.aboutRoom}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-xl"
              placeholder="Describe the room and amenities..."
            />
          </FormRow>

          {/* Amenities  */}
          <FormRow label="Amenities (comma-separated)">
            <input
              type="text"
              name="amenities"
              value={formData.amenities}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-xl"
              placeholder=" Wifi, TV, Housekeeping"
            />
          </FormRow>

          {/* Roommate Preferences */}
          <FormRow label="Roommate Preferences (comma-separated)">
            <input
              type="text"
              name="roommatePreferences"
              value={formData.roommatePreferences}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-xl"
              placeholder=" Prefer working professional, Non-smoking"
            />
          </FormRow>

          <FormRow label="Upload a file">
            <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-300 px-6 py-10">
              <div class="text-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  data-slot="icon"
                  aria-hidden="true"
                  class="mx-auto size-12 text-gray-600"
                >
                  <path
                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  />
                </svg>
                <div class="mt-4 flex text-sm/6 text-gray-400">
                  <label
                    for="file-upload"
                    class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      type="file"
                      name="file-upload"
                      class="sr-only"
                    />
                  </label>
                  <p class="pl-1">or drag and drop</p>
                </div>
                <p class="text-xs/5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </FormRow>

          {/* Parking Available */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="parkingAvailable"
                checked={formData.parkingAvailable}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded-xl mr-2"
              />
              <span className="text-sm text-gray-700">Parking Available</span>
            </label>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-violet-700 text-white p-3 rounded-full hover:bg-violet-800 hover:cursor-pointer"
            >
              Create Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const FormRow = ({ label, children }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {children}
  </div>
);
