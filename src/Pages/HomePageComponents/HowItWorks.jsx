import React from "react";
import { motion } from "framer-motion";
import {
  UserCircleIcon,
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

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

export default function HowItWorks() {
  const steps = [
    {
      icon: UserCircleIcon,
      name: "Create Your Profile",
      description:
        "Build a detailed profile highlighting your lifestyle, habits, budget, and what you're looking for in a roommate.",
    },
    {
      icon: MagnifyingGlassIcon,
      name: "Search & Match",
      description:
        "Use our advanced filters to browse compatible roommates and room listings. Our matching system helps you find the perfect fit.",
    },
    {
      icon: ChatBubbleLeftRightIcon,
      name: "Connect Securely",
      description:
        "Chat with potential matches safely through our secure messaging system before deciding to share personal details.",
    },
  ];

  return (
    <div className=" py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">
            Finding a great roommate is simple
          </h2>
          <p className="mt-4 text-lg leading-8 ">
            Our platform is designed to make your search for the perfect
            roommate safe, easy, and efficient.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-y-12 md:gap-x-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={itemVariants}
            >
              <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-green-100 text-green-600">
                <step.icon className="h-6 w-6" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-7 text-gray-500">
                {step.name}
              </h3>
              <p className="mt-2 text-base leading-7 text-gray-400">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
