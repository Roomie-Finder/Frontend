import React, { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import api from "../../api/axiosConfig";
import { useNavigate, useParams } from "react-router";

const ReportPage = () => {
  let navigate = useNavigate();
  let { roomId } = useParams();
  let { userId } = useParams();
  const [report, setReport] = useState({
    type: "",
    description: "",
    contactInfo: "",
    refId: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const reportReasons = [
    "Scam or Fraud Attempt",
    "Inappropriate Language/Behavior",
    "Misleading or False Listing (Room)",
    "Harassment or Threats",
    "Spam or Junk Messages",
    "Safety Concern/Immediate Danger",
    "Other",
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(roomId + " " + userId);
      if (roomId) {
      } else if (userId) {
      } else {
        await api.post(`/report/new`, report);
      }
    } catch (error) {
      alert("Report saving failed !!");
      navigate("/room");
    }

    setReport({
      type: "",
      description: "",
      contactInfo: "",
    });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="my-15 mb-30 flex items-center justify-center ">
        <div className="max-w-xl w-full bg-green-500/5 rounded-2xl p-10 border border-green-200 text-center">
          <div className="w-full flex justify-center my-5 text-green-400">
            <FaRegCircleCheck className="size-12 " />
          </div>
          <h2 className="text-3xl font-bold text-green-400 mb-4">
            Report Submitted Successfully
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for helping us keep our community safe. We will review
            your report immediately and take appropriate action. You will be
            contacted if we require further details.
          </p>
          <a
            href="/"
            className="text-indigo-600 hover:text-indigo-800 font-medium"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-slate-700 text-center mb-4">
          Report a User or Listing
        </h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          Your report is anonymous and critical for maintaining a safe platform.
          Please provide as much detail as possible.
        </p>

        <form
          onSubmit={handleSubmit}
          className=" rounded-2xl p-8 border-2 border-gray-500/50 space-y-6"
        >
          {/* Report Reason */}
          <div>
            <label
              htmlFor=""
              className="block text-xl font-medium text-gray-600 mb-2"
            >
              1. What are you reporting?
            </label>
            <select
              name="type"
              required
              value={report.type}
              onChange={(e) => {
                let { name, value } = e.target;
                setReport((prev) => ({ ...prev, [name]: value }));
              }}
              className="mt-1 block w-full pl-4 pr-10 py-3 text-base text-gray-500  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-lg bg-gray-600/10 border"
              disabled={isSubmitted}
            >
              <option value="" disabled>
                Select a reason...
              </option>
              {reportReasons.map((reason) => (
                <option key={reason} value={reason}>
                  {reason}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-xl font-medium text-gray-600 mb-2"
            >
              2. Describe the issue (What happened? Who was involved? When?)
            </label>
            <textarea
              id="description"
              name="description"
              rows="5"
              required
              value={report.description}
              onChange={(e) => {
                let { name, value } = e.target;
                setReport((prev) => ({ ...prev, [name]: value }));
              }}
              placeholder="Provide specific details, dates, or relevant message snippets..."
              className="mt-1 block w-full p-4 text-base text-gray-600 focus:outline focus:outline-violet-500  rounded-lg bg-gray-600/10 border resize-none"
              disabled={isSubmitted}
            ></textarea>
          </div>

          {/* Optional Contact */}
          <div>
            <label
              htmlFor="contactInfo"
              className="block text-xl font-medium text-gray-600 mb-2"
            >
              3. Your Contact Email (for follow-up)
            </label>
            <input
              type="email"
              id="contactInfo"
              name="contactInfo"
              value={report.contactInfo}
              onChange={(e) => {
                let { name, value } = e.target;
                setReport((prev) => ({ ...prev, [name]: value }));
              }}
              placeholder="your.email@example.com (Kept confidential)"
              className="mt-1 block w-full p-4 text-base text-gray-600 focus:outline focus:outline-violet-500  rounded-lg bg-gray-600/10 border"
              disabled={isSubmitted}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-lg font-semibold text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-150 ease-in-out"
            >
              Submit Anonymous Report
            </button>
          </div>

          <p className="text-sm text-center text-gray-600 mt-6">
            For immediate emergencies, please contact local authorities first.
          </p>
        </form>
      </div>
    </div>
  );
};

export default ReportPage;
