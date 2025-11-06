import React, { useState, useEffect } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  HomeIcon,
  BriefcaseIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export default function UpdateProfileForm({
  currentUser,
  onSubmit,
  isLoading = false,
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
    isLookingForRoom: false,
    isLookingForRoommate: false,
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
        email: currentUser.email || "",
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
        isLookingForRoom: roomStatus.isLookingForRoom || false,
        isLookingForRoommate: roomStatus.isLookingForRoommate || false,
        preferredRoomType: roomStatus.preferredRoomType || "Any",
        locationPreference: (roomStatus.locationPreference || []).join(", "),
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
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
      email: formData.email,

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
          isLookingForRoom: formData.isLookingForRoom,
          isLookingForRoommate: formData.isLookingForRoommate,
          locationPreference: splitAndTrim(formData.locationPreference),
          preferredRoomType: formData.preferredRoomType,
        },
      },
    };

    onSubmit(dataToSubmit);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6 md:p-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Profile Settings
          </h1>
          <p className="text-gray-600 mb-8">
            Update your profile and roommate preferences.
          </p>

          <form onSubmit={handleSubmit} className="space-y-10">
            {/* --- SECTION 1: PERSONAL INFORMATION --- */}
            <fieldset>
              <legend className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Personal Information
              </legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g., jane.doe@example.com"
                  icon={EnvelopeIcon}
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
              <div className="mt-6">
                <FormTextarea
                  label="About Me"
                  name="aboutUser"
                  rows="4"
                  value={formData.aboutUser}
                  onChange={handleChange}
                  placeholder="Tell everyone a bit about yourself..."
                />
              </div>
            </fieldset>

            {/* --- SECTION 2: LIFESTYLE & HABITS --- */}
            <fieldset>
              <legend className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Lifestyle & Habits
              </legend>
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
            </fieldset>

            <fieldset>
              <legend className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-2">
                Room Preferences
              </legend>
              <div className="space-y-6">
                <div className="flex space-x-8">
                  <FormCheckbox
                    label="I'm looking for a room"
                    name="isLookingForRoom"
                    checked={formData.isLookingForRoom}
                    onChange={handleChange}
                  />
                  <FormCheckbox
                    label="I'm looking for a roommate"
                    name="isLookingForRoommate"
                    checked={formData.isLookingForRoommate}
                    onChange={handleChange}
                  />
                </div>
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
            </fieldset>

            {/* --- SUBMIT BUTTON --- */}
            <div className="pt-6 border-t border-gray-200 flex justify-end">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex justify-center items-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:border-indigo-700 disabled:opacity-50"
              >
                {isLoading ? "Saving..." : "Update Profile"}
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
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1.5"
    >
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
        className={`block w-full rounded-lg border-gray-300 shadow-sm sm:text-sm 
                   py-2.5 
                   ${Icon ? "pl-10 pr-4" : "px-4"} 
                   focus:ring-0 focus:border-indigo-500`}
      />
    </div>
  </div>
);

const FormTextarea = ({ label, name, rows, value, onChange, placeholder }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1.5"
    >
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="block w-full rounded-lg border-gray-300 shadow-sm sm:text-sm 
                   px-4 py-2.5 
                   focus:ring-0 focus:border-indigo-500"
    />
  </div>
);

const FormSelect = ({ label, name, value, onChange, children }) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1.5"
    >
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="block w-full rounded-lg border-gray-300 shadow-sm sm:text-sm 
                   py-2.5 px-4 
                   focus:ring-0 focus:border-indigo-500"
    >
      {children}
    </select>
  </div>
);

const FormCheckbox = ({ label, name, checked, onChange }) => (
  <div className="relative flex items-start">
    <div className="flex h-6 items-center">
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 
                   focus:ring-0"
      />
    </div>
    <div className="ml-3 text-sm leading-6">
      <label htmlFor={name} className="font-medium text-gray-900">
        {label}
      </label>
    </div>
  </div>
);
