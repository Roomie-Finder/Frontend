import { MdSearch, MdNotifications } from "react-icons/md";

export default function Header({ admin }) {
  return (
    <header className=" p-4 shadow-sm flex justify-between items-center z-10 sticky top-0">
      <div className="relative flex items-center w-1/3">
        <MdSearch className="absolute left-3 text-indigo-500 text-xl" />
        <input
          type="text"
          placeholder="Search users, listings, messages..."
          className="w-full pl-10 pr-4 py-2 bg-gray-300/60 rounded-lg focus:outline-none  focus:bg-gray-300/50"
        />
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <MdNotifications className="text-gray-600 text-2xl hover:text-gray-800 cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500  text-xs rounded-full h-4 w-4 flex items-center justify-center">
            3
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-right">
            <p className="text-sm font-semibold text-gray-800">
              Admin {admin.firstName}
            </p>
            <p className="text-xs text-gray-500">{admin.username}</p>
          </div>
          <img
            src={`https://api.dicebear.com/8.x/initials/svg?seed=${admin?.firstName}`}
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full "
            loading="lazy"
          />
        </div>
      </div>
    </header>
  );
}
