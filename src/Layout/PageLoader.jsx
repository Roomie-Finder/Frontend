import React from "react";
import { IoHome } from "react-icons/io5";
import { FaUserFriends, FaKey } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";

const PageLoader = () => {
  return (
    <>
      <style>{`
        @keyframes fade-in-scale {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes slide-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in-up {
          animation: slide-in-up 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        @keyframes grow-and-glow {
          0% {
            transform: scale(0.5);
            opacity: 0;
            filter: drop-shadow(0 0 2px currentColor);
          }
          100% {
            transform: scale(1);
            opacity: 1;
            filter: drop-shadow(0 0 10px currentColor);
          }
        }
        .animate-grow-and-glow {
          animation: grow-and-glow 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes fly-in-from-corner {
          0% {
            opacity: 0;
            transform: var(--fly-in-start-transform, translate(-100px, -100px) scale(0.5) rotate(-90deg));
          }
          60% {
            opacity: 1;
            transform: var(--fly-in-mid-transform, translate(10px, 10px) scale(1.1) rotate(10deg));
          }
          100% {
            opacity: 1;
            transform: var(--fly-in-end-transform, translate(0, 0) scale(1) rotate(0deg));
          }
        }
        .animate-fly-in {
          animation: fly-in-from-corner 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        @keyframes breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-breathe {
          animation: breathe 3s ease-in-out infinite;
        }

        /* Custom animation delay utilities */
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-1200 { animation-delay: 1200ms; }
        .animation-delay-1500 { animation-delay: 1500ms; }
      `}</style>
      <div className="flex flex-col items-center justify-center h-screen w-full backdrop-blur text-white overflow-hidden">
        <div className="relative w-64 h-64 flex items-center justify-center animate-breathe animation-delay-1500">
          {/* Central House */}
          <div className="absolute opacity-0 animate-grow-and-glow animation-delay-400">
            <IoHome className="w-20 h-20 text-teal-400" />
          </div>

          {/* Converging Icons */}
          <div
            className="absolute opacity-0 animate-fly-in animation-delay-600"
            style={{
              top: "20%",
              left: "20%",
              "--fly-in-start-transform":
                "translate(-120px, -120px) rotate(-90deg) scale(0.5)",
              "--fly-in-end-transform": "translate(0, 0) rotate(0deg) scale(1)",
            }}
          >
            <FaKey className="w-10 h-10 text-yellow-500" />
          </div>

          <div
            className="absolute opacity-0 animate-fly-in animation-delay-800"
            style={{
              top: "20%",
              right: "20%",
              "--fly-in-start-transform":
                "translate(120px, -120px) rotate(90deg) scale(0.5)",
              "--fly-in-end-transform": "translate(0, 0) rotate(0deg) scale(1)",
            }}
          >
            <MdLocationOn className="w-10 h-10 text-rose-500" />
          </div>

          <div
            className="absolute opacity-0 animate-fly-in animation-delay-1000"
            style={{
              bottom: "20%",
              right: "20%",
              "--fly-in-start-transform":
                "translate(120px, 120px) rotate(-90deg) scale(0.5)",
              "--fly-in-end-transform": "translate(0, 0) rotate(0deg) scale(1)",
            }}
          >
            <FaUserFriends className="w-10 h-10 text-orange-500" />
          </div>

          <div
            className="absolute opacity-0 animate-fly-in animation-delay-1200"
            style={{
              bottom: "20%",
              left: "20%",
              "--fly-in-start-transform":
                "translate(-120px, 120px) rotate(90deg) scale(0.5)",
              "--fly-in-end-transform": "translate(0, 0) rotate(0deg) scale(1)",
            }}
          >
            <BsFillChatDotsFill className="w-9 h-9 text-sky-500" />
          </div>
        </div>

        <p className="mt-8 text-xl text-slate-600 opacity-0 animate-slide-in-up animation-delay-1500 tracking-wider">
          Loading...
        </p>
      </div>
    </>
  );
};

export default PageLoader;
