import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const pulseVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 10,
      delay: 0.3,
    },
  },
};

export default function HeroSection() {
  let user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="relative isolate px-6  lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="relative isolate overflow-hidden py-4 sm:py-22 lg:py-5 min-h-screen flex items-top justify-center">
        <motion.div
          className="mx-auto max-w-2xl text-center relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hidden sm:mb-8 sm:flex sm:justify-center"
            variants={pulseVariants}
          >
            <div className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 transition duration-300">
              Find your next roommate today.{" "}
              <a
                href="/how-it-works"
                className="font-semibold text-indigo-600 hover:text-indigo-500 transition duration-200"
              >
                <span aria-hidden="true" className="absolute inset-0" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-balance text-indigo-500 sm:leading-tight"
            variants={itemVariants}
          >
            Discover Compatible People to Share Your Home With.
          </motion.h1>

          <motion.p
            className="mt-8 text-lg md:text-xl text-balance text-gray-700 font-light max-w-xl mx-auto"
            variants={itemVariants}
          >
            Forget endless scrolling and awkward interviews. We connect you
            based on lifestyle, habits, and values for a harmonious living
            experience.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            variants={itemVariants}
          >
            <motion.a
              href={`${user ? "/room" : "/login#signup"}`}
              className="rounded-full bg-indigo-600 px-8 py-3.5 text-base font-semibold text-white shadow-xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300 ease-in-out"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <Link
              to="/aboutus"
              className="text-base font-semibold leading-7 text-indigo-600 hover:text-indigo-500 transition duration-200"
            >
              Learn More <span aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </div>
  );
}
