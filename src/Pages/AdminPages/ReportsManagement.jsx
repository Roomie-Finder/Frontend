import api from "../../api/axiosConfig";

export default function ReportsManagement({ reports, setReports }) {
  async function deleteReport(id) {
    try {
      let res = await api.delete(`/report/${id}`);
      setReports(res.data);
    } catch (error) {
      alert("error deleting report.. ");
    }
  }

  return (
    <div className=" shadow-md rounded-3xl overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="*:text-left">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              contact Info
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              descriptioon
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className=" divide-y divide-gray-200">
          {reports?.map((report) => (
            <tr key={report.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {report?.contactInfo}
              </td>

              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 truncate">
                {report?.description}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${
                      report?.status === "resolved"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                >
                  {report?.status || "not resolved"}
                </span>
              </td>
              <td className="px-6 py-4 flex whitespace-nowrap text-right text-sm font-medium">
                <button
                  onClick={() => deleteReport(report?.id)}
                  className="text-red-600 hover:text-red-900 ml-4"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {reports.length == 0 && (
            <div className="py-5 ps-5 ">No reports yet</div>
          )}
        </tbody>
      </table>
    </div>
  );
}
