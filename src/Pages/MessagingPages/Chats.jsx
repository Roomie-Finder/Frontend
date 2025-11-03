import { useState } from "react";

const MessageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const SendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      d="M3.105 3.105a.5.5 0 01.707 0L19.403 18.697a.5.5 0 01-.707.707L3.105 3.812a.5.5 0 010-.707z"
      clipRule="evenodd"
    />
    <path
      d="M3.105 16.895a.5.5 0 01.707 0L19.403 1.303a.5.5 0 01.707.707L3.812 16.895a.5.5 0 01-.707 0z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Chats() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="w-100 h-[450px] bg-white rounded-lg shadow-xl flex flex-col transition-all duration-300 ease-out">
          {/* Header */}
          <div className="bg-violet-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold text-lg">Messages</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-violet-700 transition-colors"
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Message List */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {/* Received Message Example */}
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-xs">
                <p>Hey! Are you still looking for a roommate?</p>
                <span className="text-xs text-gray-500 block text-right mt-1">
                  10:30 AM
                </span>
              </div>
            </div>

            {/* Sent Message Example */}
            <div className="flex justify-end">
              <div className="bg-violet-500 text-white p-3 rounded-lg max-w-xs">
                <p>Hi! Yes, I am. My listing is still active.</p>
                <span className="text-xs text-blue-100 block text-right mt-1">
                  10:31 AM
                </span>
              </div>
            </div>

            {/* Received Message Example */}
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xs">
                <p>Great! Could I come see the place tomorrow?</p>
                <span className="text-xs text-gray-500 block text-right mt-1">
                  10:32 AM
                </span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 border-t bg-white rounded-b-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                className="bg-violet-600 text-white p-3 rounded-full hover:bg-violet-700 transition-colors"
                aria-label="Send message"
              >
                <SendIcon />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- CHAT BUTTON (Shown when 'isOpen' is false) --- */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 ease-out transform hover:scale-110"
          aria-label="Open chat"
        >
          <MessageIcon />
        </button>
      )}
    </div>
  );
}
