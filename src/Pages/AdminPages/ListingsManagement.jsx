import { Link } from "react-router";

export default function ListingsManagement({ listings, setlistings }) {
  async function deleteRoom(rid) {
    try {
      let response = await api.delete(`/admin/deleteRoom/${rid}`);
      setlistings(response.data);
    } catch (e) {
      alert("error occured deleting user !!");
    }
  }

  return (
    <div className=" p-6 rounded-3xl border border-gray-200 overflow-x-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Recent Listings
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Latest roommate listings posted on the platform
      </p>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Posted
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {listings?.map((listing) => (
            <tr key={listing?.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <img
                    className="h-9 w-9 rounded-full mr-3"
                    src={`https://api.dicebear.com/8.x/initials/svg?seed=${
                      listing?.roomName || ""
                    }`}
                    alt={`${listing?.roomName} Avatar`}
                    loading="lazy"
                  />
                  <div className="text-sm font-medium text-gray-900">
                    {listing?.roomName}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {listing?.address}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {listing?.rent}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {listing.type}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${
                      listing?.status === "active"
                        ? "bg-green-100 text-green-800"
                        : listing?.status === "pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-red-100 text-red-800"
                    }`}
                >
                  {listing?.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {listing?.posted}
              </td>
              <td className="flex gap-3 px-6 py-4  text-sm font-medium">
                <Link
                  to={`/room/${listing.id}`}
                  className="text-blue-600 hover:text-blue-900"
                >
                  View
                </Link>
                <button
                  onClick={() => deleteRoom(listing.id)}
                  className="text-red-500 hover:text-red-900"
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
