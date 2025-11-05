import React, { useState } from "react";

const FormRow = ({ label, children }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    {children}
  </div>
);

export default function CreateRoom() {
  const [formData, setFormData] = useState({
    roomName: "",
    address: "",
    rent: "",
    propertyType: "PG",
    lookingFor: "Male",
    deposit: "",
    aboutRoom: "",
    amenities: "",
    parkingAvailable: false,
    roommatePreferences: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
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
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-6">Room Listing Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Room Name */}
        <FormRow label="Room Name">
          <input
            type="text"
            name="roomName"
            value={formData.roomName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., Zolo Mount View"
          />
        </FormRow>

        {/* Address */}
        <FormRow label="Address">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., Hinjewadi Phase 3, Pune"
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
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g., 6800"
            />
          </FormRow>
          <FormRow label="Deposit">
            <input
              type="number"
              name="deposit"
              value={formData.deposit}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g., 10000"
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
              className="w-full p-2 border border-gray-300 rounded bg-white"
            >
              <option value="PG">PG</option>
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
              className="w-full p-2 border border-gray-300 rounded bg-white"
            >
              <option value="Male">Male</option>
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
            className="w-full p-2 border border-gray-300 rounded"
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
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., Wifi, TV, Housekeeping"
          />
        </FormRow>

        {/* Roommate Preferences */}
        <FormRow label="Roommate Preferences (comma-separated)">
          <input
            type="text"
            name="roommatePreferences"
            value={formData.roommatePreferences}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="e.g., Prefer working professional, Non-smoking"
          />
        </FormRow>

        {/* Parking Available */}
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="parkingAvailable"
              checked={formData.parkingAvailable}
              onChange={handleChange}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded mr-2"
            />
            <span className="text-sm text-gray-700">Parking Available</span>
          </label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Submit Listing
          </button>
        </div>
      </form>
    </div>
  );
}
