import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export default function UpdateProfile() {
  return (
    <form method="post" action={"user/UpdateProfile"}>
      <div className="space-y-12 ">
        {/* Profile */}
        <div className="border-b border-red/10 pb-12 grid grid-cols-4">
          <div className="pe-2">
            <h2 className="mt-10 text-base/7 font-semibold ">Profile</h2>
            <p className="mt-1 text-sm/6 text-gray-400">
              This information will be displayed publicly so be careful what you
              share
            </p>
          </div>

          <div className="mt-10 col-span-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium "
              >
                Username
              </label>
              <div className="mt-2">
                <div className="flex items-center rounded-md bg-red/5 pl-3 outline-1 -outline-offset-1 outline-red/10 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-500">
                  <div className="shrink-0 text-base text-gray-400 select-none sm:text-sm/6">
                    trueroomie.com/
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="neon"
                    className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base  placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-medium ">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-400">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm/6 font-medium ">
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <UserCircleIcon
                  aria-hidden="true"
                  className="size-12 text-gray-500"
                />
                <button
                  type="button"
                  className="rounded-md bg-red/10 px-3 py-2 text-sm font-semibold  inset-ring inset-ring-red/5 hover:bg-red/20"
                >
                  Change
                </button>
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm/6 font-medium "
              >
                Cover photo
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-red/25 px-6 py-10">
                <div className="text-center">
                  <PhotoIcon
                    aria-hidden="true"
                    className="mx-auto size-12 text-gray-600"
                  />
                  <div className="mt-4 flex text-sm/6 text-gray-400">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs/5 text-gray-400">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal */}
        <div className="border-b border-red/10 pb-12 grid grid-cols-4">
          <div className="pe-3">
            <h2 className="text-base/7 font-semibold ">Personal Information</h2>
            <p className="mt-1 text-sm/6 text-gray-400">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <div className=" col-span-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-medium "
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-medium "
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm/6 font-medium ">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="Age" className="block text-sm/6 font-medium ">
                Age
              </label>
              <div className="mt-2">
                <input
                  id="Age"
                  name="Age"
                  type="Number"
                  min={16}
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="Occupation"
                className="block text-sm/6 font-medium "
              >
                Occupation
              </label>
              <div className="mt-2">
                <input
                  id="Occupation"
                  name="Occupation"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="Language"
                className="block text-sm/6 font-medium "
              >
                Language
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="Language"
                  name="Language"
                  autoComplete="Language"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-red/5 py-1.5 pr-8 pl-3 text-base  outline-1 -outline-offset-1 outline-red/10  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                >
                  <option disabled> Select your first language</option>
                  <option>English</option>
                  <option>Marathi</option>
                  <option>Hindi</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="address" className="block text-sm/6 font-medium ">
                Address
              </label>
              <div className="mt-2">
                <input
                  id="address"
                  name="saddress"
                  type="text"
                  autoComplete="address"
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm/6 font-medium ">
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm/6 font-medium ">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="address-level1"
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm/6 font-medium "
              >
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  id="postal-code"
                  name="postal-code"
                  type="text"
                  autoComplete="postal-code"
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>

        {/* LifeStyle */}
        <div className="border-b border-red/10 pb-12 grid grid-cols-4">
          <div className="pe-3">
            <h2 className="text-base/7 font-semibold ">LifeStyle</h2>
            <p className="mt-1 text-sm/6 text-gray-400">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <div className=" col-span-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="socialHabbits"
                className="block text-sm/6 font-medium "
              >
                Social Habbits
              </label>
              <div className="mt-2">
                <textarea
                  id="socialHabbits"
                  name="socialHabbits"
                  rows={3}
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm/6 text-gray-400">
                Write a few of your habbits.
              </p>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="workfromhome"
                className="block text-sm/6 font-medium "
              >
                Do you Smoke ?
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="workfromhome"
                  name="workfromhome"
                  autoComplete="workfromhome"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-red/5 py-1.5 pr-8 pl-3 text-base  outline-1 -outline-offset-1 outline-red/10  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-3 ">
              <label
                htmlFor="workfromhome"
                className="block text-sm/6 font-medium "
              >
                Do you consume alcohol?
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="workfromhome"
                  name="workfromhome"
                  autoComplete="workfromhome"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-red/5 py-1.5 pr-8 pl-3 text-base  outline-1 -outline-offset-1 outline-red/10  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="workfromhome"
                className="block text-sm/6 font-medium "
              >
                Work From Home
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="workfromhome"
                  name="workfromhome"
                  autoComplete="workfromhome"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-red/5 py-1.5 pr-8 pl-3 text-base  outline-1 -outline-offset-1 outline-red/10  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Room information */}
        <div className="border-b border-red/10 pb-12 grid grid-cols-4">
          <div className="pe-3">
            <h2 className="text-base/7 font-semibold ">LifeStyle</h2>
            <p className="mt-1 text-sm/6 text-gray-400">
              Use a permanent address where you can receive mail.
            </p>
          </div>

          <div className=" col-span-3 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="isLookingForRoom"
                className="block text-sm/6 font-medium "
              >
                Are you looking for a room/flat
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="isLookingForRoom"
                  name="isLookingForRoom"
                  autoComplete="isLookingForRoom"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-red/5 py-1.5 pr-8 pl-3 text-base  outline-1 -outline-offset-1 outline-red/10  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-3 ">
              <label
                htmlFor="RoomAvailable"
                className="block text-sm/6 font-medium "
              >
                Room available
              </label>
              <div className="mt-2 grid grid-cols-1">
                <select
                  id="RoomAvailable"
                  name="RoomAvailable"
                  autoComplete="RoomAvailable"
                  className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-red/5 py-1.5 pr-8 pl-3 text-base  outline-1 -outline-offset-1 outline-red/10  focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-400 sm:size-4"
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="locationPreference"
                className="block text-sm/6 font-medium "
              >
                Preferred locations
              </label>
              <div className="mt-2">
                <input
                  id="locationPreference"
                  name="locationPreference"
                  type="text"
                  autoComplete="locationPreference"
                  className="block w-full rounded-md bg-red/5 px-3 py-1.5 text-base  outline-1 -outline-offset-1 outline-red/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold px-10 py-2 hover:bg-red-500 rounded-full"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-full bg-indigo-200 px-10 py-2 text-sm font-semibold hover:bg-indigo-500 "
        >
          Save
        </button>
      </div>
    </form>
  );
}
