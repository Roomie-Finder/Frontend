import React, { useState, useEffect } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  HomeIcon,
  BriefcaseIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router";

export default function UpdateProfileForm({
  currentUser,
  onSubmit,
  isLoading = false,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    contactNo: "",
    age: "",
    city: "",
    occupation: "",
    nativeLanguage: "",
    workFromHome: "No",
    aboutUser: "",
    sleepSchedule: "Flexible",
    socialHabits: "",
    interests: "",
    smokingDrinkingHabbit: "",
    lookingFor: "",
    locationPreference: "",
    preferredRoomType: "Any",
  });

  useEffect(() => {
    if (currentUser) {
      const personalInfo = currentUser.userProfile?.personalInfo || {};
      const lifeStyle = currentUser.userProfile?.lifeStyle || {};
      const roomStatus = currentUser.userProfile?.roomStatus || {};

      setFormData({
        firstName: currentUser.firstName || "",
        lastName: currentUser.lastName || "",
        username: currentUser.username || "",
        contactNo: personalInfo.contactNo || "",
        age: personalInfo.age || "",
        city: personalInfo.city || "",
        occupation: personalInfo.occupation || "",
        nativeLanguage: personalInfo.nativeLanguage || "",
        workFromHome: personalInfo.workFromHome || "No",
        aboutUser: personalInfo.aboutUser || "",
        sleepSchedule: lifeStyle.sleepSchedule || "Flexible",
        socialHabits: (lifeStyle.socialHabits || []).join(", "),
        interests: (lifeStyle.interests || []).join(", "),
        smokingDrinkingHabbit: (lifeStyle.smokingDrinkingHabbit || []).join(
          ", "
        ),
        isLookingForRoom: roomStatus.isLookingForRoom,
        isLookingForRoommate: roomStatus.isLookingForRoommate,
        preferredRoomType: roomStatus.preferredRoomType || "Any",
        locationPreference: (roomStatus.locationPreference || []).join(", "),
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const splitAndTrim = (str) =>
      str
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean);

    const dataToSubmit = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      username: formData.username,

      userProfile: {
        personalInfo: {
          aboutUser: formData.aboutUser,
          contactNo: formData.contactNo,
          occupation: formData.occupation,
          workFromHome: formData.workFromHome,
          nativeLanguage: formData.nativeLanguage,
          city: formData.city,
          age: Number(formData.age) || 0,
        },
        lifeStyle: {
          socialHabits: splitAndTrim(formData.socialHabits),
          interests: splitAndTrim(formData.interests),
          smokingDrinkingHabbit: splitAndTrim(formData.smokingDrinkingHabbit),
          sleepSchedule: formData.sleepSchedule,
        },
        roomStatus: {
          lookingFor: formData.lookingFor || "Tell about your preferences....",
          locationPreference: splitAndTrim(formData.locationPreference),
          preferredRoomType: formData.preferredRoomType,
        },
      },
    };

    onSubmit(dataToSubmit);
  };

  return (
    <div className=" mx-auto  overflow-hidden">
      {/* --- SECTION 1: PERSONAL INFORMATION --- */}
      <div className="p-2 md:p-5 grid grid-cols-3">
        <div className="col-span-1 pt-5">
          <h1 className="text-xl font-semibold  mb-2">Profile</h1>
          <p className="text-gray-600 mb-8">
            This information will be displayed publicly <br />
            so be careful what you share.
          </p>
        </div>
        <div className="col-span-2  bg-gray-400/10 rounded-2xl p-10">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormInput
                label="username Address"
                name="username"
                type="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="e.g., jane.doe@example.com"
                icon={EnvelopeIcon}
              />
            </div>

            <FormTextarea
              label="About Me"
              name="aboutUser"
              rows="4"
              value={formData.aboutUser}
              onChange={handleChange}
              placeholder="Tell everyone a bit about yourself..."
            />
            {/* image */}
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
                      required
                      multiple
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs/5 text-gray-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
            <div className="pt-6 flex justify-end gap-5 ">
              <Link
                to={`/user/${currentUser.id}`}
                className="bg-gray-500/60 hover:bg-gray-500 rounded-full px-10 flex items-center"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex justify-center items-center py-2 px-10 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-violet-400/50 hover:bg-violet-800 focus:outline-none focus:ring-0 focus:border-indigo-700 disabled:opacity-50"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr />

      {/* Personal Information */}
      <div className="p-2 md:p-5 grid grid-cols-3">
        <div className="col-span-1 pt-5">
          <h1 className="text-xl font-semibold  mb-2">Personal Information</h1>
          <p className="text-gray-600 mb-8">
            Fill out this section with your accurate personal details <br />
            for our records and communication purposes
          </p>
        </div>
        <div className="col-span-2  bg-gray-400/10 rounded-2xl p-10">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-2 gap-5">
              <FormInput
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="e.g., Jane"
              />
              <FormInput
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="e.g., Doe"
              />
              <FormInput
                label="Contact Phone"
                name="contactNo"
                type="tel"
                value={formData.contactNo}
                onChange={handleChange}
                placeholder="e.g., 9876543210"
                icon={PhoneIcon}
              />
              <FormInput
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                placeholder="e.g., 25"
              />
              <FormInput
                label="Current City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="e.g., Pune"
                icon={HomeIcon}
              />
              <FormInput
                label="Occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="e.g., Software Engineer"
                icon={BriefcaseIcon}
              />
              <FormInput
                label="Native Language"
                name="nativeLanguage"
                value={formData.nativeLanguage}
                onChange={handleChange}
                placeholder="e.g., Hindi"
              />
            </div>
            <div className="mt-6">
              <FormSelect
                label="Work Arrangement"
                name="workFromHome"
                value={formData.workFromHome}
                onChange={handleChange}
              >
                <option>No</option>
                <option>Yes</option>
                <option>Hybrid</option>
              </FormSelect>
            </div>
            <div className="pt-6 flex justify-end gap-5 ">
              <Link
                to={`/user/${currentUser.id}`}
                className="bg-gray-500/60 hover:bg-gray-500 rounded-full px-10 flex items-center"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex justify-center items-center py-2 px-10 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-violet-400/50 hover:bg-violet-800 focus:outline-none focus:ring-0 focus:border-indigo-700 disabled:opacity-50"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <hr />

      {/* --- SECTION 2: LIFESTYLE & HABITS --- */}
      <div className="p-2 md:p-5 grid grid-cols-3">
        <div className="col-span-1 pt-5">
          <h1 className="text-xl font-semibold  mb-2">Lifestyle & Habits</h1>
          <p className="text-gray-600 mb-8">
            Please use this section to share your personal pursuits, <br />{" "}
            hobbies, and activities you enjoy .
          </p>
        </div>
        <div className="col-span-2  bg-gray-400/10 rounded-2xl p-10">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-6">
              <FormSelect
                label="Sleep Schedule"
                name="sleepSchedule"
                value={formData.sleepSchedule}
                onChange={handleChange}
              >
                <option>Flexible</option>
                <option>Early Bird</option>
                <option>Night Owl</option>
              </FormSelect>
              <FormInput
                label="Social Habits (comma-separated)"
                name="socialHabits"
                value={formData.socialHabits}
                onChange={handleChange}
                placeholder="e.g., Quiet, Social, Introvert"
                icon={SparklesIcon}
              />
              <FormInput
                label="Interests (comma-separated)"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                placeholder="e.g., Reading, Gaming, Hiking"
              />
              <FormInput
                label="Smoking/Drinking Habits (comma-separated)"
                name="smokingDrinkingHabbit"
                value={formData.smokingDrinkingHabbit}
                onChange={handleChange}
                placeholder="e.g., Non-smoker, Social drinker"
              />
            </div>
            <div className="pt-6 flex justify-end gap-5 ">
              <Link
                to={`/user/${currentUser.id}`}
                className="bg-gray-500/60 hover:bg-gray-500 rounded-full px-10 flex items-center"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex justify-center items-center py-2 px-10 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-violet-400/50 hover:bg-violet-800 focus:outline-none focus:ring-0 focus:border-indigo-700 disabled:opacity-50"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>

      <hr />

      {/* Room Information */}
      <div className="p-2 md:p-5 grid grid-cols-3">
        <div className="col-span-1 pt-5">
          <h1 className="text-xl font-semibold  mb-2">Room Preferences</h1>
          <p className="text-gray-600 mb-8">
            Let us know your preferences for the room.
          </p>
        </div>
        <div className="col-span-2  bg-gray-400/10 rounded-2xl p-10">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="space-y-6">
              <FormInput
                label="Preferred Locations (comma-separated)"
                name="locationPreference"
                value={formData.locationPreference}
                onChange={handleChange}
                placeholder="e.g., Koregaon Park, Hinjewadi"
              />
              <FormSelect
                label="Preferred Room Type"
                name="preferredRoomType"
                value={formData.preferredRoomType}
                onChange={handleChange}
              >
                <option>Any</option>
                <option>PG</option>
                <option>Apartment</option>
                <option>House</option>
                <option>Other</option>
              </FormSelect>
            </div>
            <FormTextarea
              label="Lookin For"
              name="lookingFor"
              rows="4"
              value={formData.lookingFor}
              onChange={handleChange}
              placeholder="room or roommate preferences...."
            />
            <div className="pt-6 flex justify-end gap-5 ">
              <Link
                to={`/user/${currentUser.id}`}
                className="bg-gray-500/60 hover:bg-gray-500 rounded-full px-10 flex items-center"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex justify-center items-center py-2 px-10 border border-transparent shadow-sm text-base font-medium rounded-full text-white bg-violet-400/50 hover:bg-violet-800 focus:outline-none focus:ring-0 focus:border-indigo-700 disabled:opacity-50"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const FormInput = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  icon: Icon,
}) => (
  <div className="col-span-1">
    <label htmlFor={name} className="block text-sm font-medium  mb-1.5">
      {label}
    </label>
    <div className="relative">
      {Icon && (
        <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
          <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
      )}
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`block w-full rounded-lg  sm:text-sm  border border-gray-400/20
                   py-2.5 
                   ${Icon ? "pl-10 pr-4" : "px-4"} 
                   focus:ring-0 focus:border-indigo-500 border-gray-200`}
      />
    </div>
  </div>
);

const FormTextarea = ({ label, name, rows, value, onChange, placeholder }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium  mb-1.5">
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="block w-full rounded-lg sm:text-sm border border-gray-400/40
                   px-4 py-2.5 
                   focus:ring-0 focus:border-indigo-500"
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, children }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium  mb-1.5">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="block w-full rounded-lg border-gray-300 border border-gray-400/40 sm:text-sm text-gray-500 py-2.5 px-4  focus:ring-0 focus:border-indigo-500"
    >
      {children}
    </select>
  </div>
);
