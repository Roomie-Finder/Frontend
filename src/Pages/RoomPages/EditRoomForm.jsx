import api from "../../api/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function EditRoomForm({ formData, setFormData, roomid }) {
  let navigate = useNavigate();

  let [loading, setloading] = useState(false);

  let handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    try {
      await api.post(`/room/update/${roomid}`, formData);
      navigate("/room");
    } catch (error) {
      alert("error occured while updating....");
      navigate("/room");
    }
    setloading(false);
  };

  let handleChange = (e) => {
    let { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  let handleFileChange = () => {};
  return (
    <>
      <div className="w-full md:grid md:grid-cols-3 lg:px-20 mx-auto  p-5 rounded-xl shadow gap-5 pb-25 ">
        <div className="col-span-1 mb-10 pt-5">
          <h1 className="text-2xl font-semibold mb-6">room Information</h1>
          <p>
            Use a permanent address where you can <br />
            receive mail.
          </p>
        </div>
        <div className="col-span-2 w-full bg-gray-300/10 p-10 rounded-2xl ">
          <form onSubmit={handleSubmit} className="w-full gap-5 flex flex-col">
            {/* room Name */}
            <FormRow label="room Name">
              <input
                type="text"
                name="roomName"
                value={formData.roomName}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-xl"
                placeholder="  Zolo "
                disabled={loading}
                required
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
                disabled={loading}
                required
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
                  disabled={loading}
                  required
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
                  disabled={loading}
                  required
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
                  className="w-full p-2 border border-gray-300 rounded-xl "
                  disabled={loading}
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
                  className="w-full p-2 border border-gray-300 rounded-xl "
                  disabled={loading}
                >
                  <option value="male ">Male</option>
                  <option value="female">Female</option>
                  <option value="any">Any</option>
                </select>
              </FormRow>
            </div>

            {/* About room */}
            <FormRow label="About room">
              <textarea
                name="aboutRoom"
                rows="4"
                value={formData.aboutRoom}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-xl"
                placeholder="Describe the room and amenities..."
                disabled={loading}
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
                disabled={loading}
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
                placeholder=" Non-smoker, Clean, Working professional"
                disabled={loading}
              />
            </FormRow>

            {/* Image Upload */}
            <FormRow label="room Image">
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-blue-700/25 px-6 py-10">
                <div className="text-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    data-slot="icon"
                    aria-hidden="true"
                    className="mx-auto size-12 text-violet-600"
                  >
                    <path
                      d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                  <div className="mt-4 flex text-sm/6 text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        type="file"
                        name="file"
                        className="sr-only"
                        onChange={handleFileChange}
                        multiple
                        disabled={loading}
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-400">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </FormRow>

            {/* Parking Checkbox */}
            <FormRow label="Parking Available">
              <input
                type="checkbox"
                name="parkingAvailable"
                checked={formData.parkingAvailable}
                onChange={handleChange}
                className="ml-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                disabled={loading}
              />
            </FormRow>

            <div className="flex justify-end mt-6">
              {loading ? (
                <button
                  className="w-80 bg-violet-400 text-white p-3 rounded-full flex gap-4 justify-center"
                  disabled
                >
                  <svg
                    className="size-7 border-white/50 border-5 border-t-5 border-t-white rounded-full animate-spin motion-reduce:hidden"
                    viewBox="0 0 24 24"
                  ></svg>
                  <p className="flex items-center">Processing....</p>
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-80 bg-violet-700 text-white p-3 rounded-full hover:bg-violet-800 hover:cursor-pointer"
                >
                  Update
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

const FormRow = ({ label, children }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-500 mb-1">
      {label}
    </label>
    {children}
  </div>
);
