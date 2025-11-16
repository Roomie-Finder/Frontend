import React from "react";
import { motion } from "framer-motion";

const propertyImage1 =
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
const propertyImage2 =
  "https://images.unsplash.com/photo-1645131506334-bb66f3f02bcc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170";

export default function CallToAction() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 sm:gap-50 pb-20 lg:gap-16 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-500 leading-tight">
              Are you looking for Premium Properties?
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              View and book your appointment with our partners
            </p>
            <motion.a
              href="/room"
              className="mt-8 inline-flex items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-full text-white bg-violet-500 hover:bg-green-700 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              View Properties
              <span className="ml-2" aria-hidden="true">
                &rarr;
              </span>
            </motion.a>
          </motion.div>

          <div className="relative h-80 lg:h-96 min-h-[20rem]">
            <motion.img
              src={propertyImage1}
              alt="Premium property interior"
              className="absolute top-0 left-0 w-3/4 h-auto object-cover bg-white p-2 rounded-lg shadow-xl"
              initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: -6 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              whileHover={{
                scale: 1.05,
                rotate: -8,
                zIndex: 10,
                shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
              }}
              loading="lazy"
            />

            <motion.img
              src={propertyImage2}
              alt="Modern living room"
              className="absolute bottom-0 right-0 w-3/4 h-auto object-cover bg-white p-2 rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.5, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
              whileHover={{
                scale: 1.05,
                rotate: 5,
                zIndex: 10,
                shadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
              }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
