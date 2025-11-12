import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Target,
  Users,
  Sparkles,
  Building2,
  MessageCircle,
  TrendingUp,
  CheckCircle,
} from "lucide-react";

import { TeamCarousel } from "@/components/lightswind/team-carousel";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardSlideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 12 },
  },
};

export default function AboutUs() {
  return (
    <div className="text-violet-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center mb-24"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeIn}>
            <h1 className="text-4xl md:text-5xl font-extrabold  mb-6 leading-tight">
              We're transforming the way people find shared living.
            </h1>
            <p className="text-lg md:text-xl text-indigo-300 max-w-3xl tracking-wide">
              Our mission is to simplify the complex and often stressful process
              of finding a roommate. We leverage{" "}
              <strong className="text-indigo-600">
                smart matching technology
              </strong>{" "}
              to connect individuals who share not just an address, but a
              compatible lifestyle, making cohabitation a positive experience
              from day one.
            </p>
          </motion.div>

          <motion.div className="flex flex-col gap-10" variants={fadeIn}>
            <StatItem
              value="1.2 Million+"
              label="Connections Made"
              icon={<Users className="text-indigo-600" />}
            />
            <StatItem
              value="50,000+"
              label="Active & Verified Listings"
              icon={<CheckCircle className="text-green-600" />}
            />
            <StatItem
              value="95%"
              label="Community Satisfaction Rate"
              icon={<Heart className="text-pink-600" />}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="mb-24 shadow-2xl rounded-3xl overflow-hidden"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332"
            alt="A group of diverse friends and roommates"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="mb-24">
          <motion.h2
            className="text-4xl font-extrabold text-center text-violet-950 mb-12 relative pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Core Values
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-indigo-500 rounded-full"></span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <FeatureCard
              icon={<Sparkles size={28} className="text-amber-600 " />}
              title="Smart Matching"
              description="Our intelligent algorithm goes beyond basics, matching you with roommates based on lifestyle, habits, and preferences for true compatibility."
              variants={cardSlideUp}
            />
            <FeatureCard
              icon={<Building2 size={28} className="text-blue-600" />}
              title="Diverse Listings"
              description="Explore a wide range of rooms, apartments, and houses. Whether seeking a quiet study space or a vibrant social home, we have options."
              variants={cardSlideUp}
            />
            <FeatureCard
              icon={<MessageCircle size={28} className="text-green-600" />}
              title="Secure Communication"
              description="Chat safely and privately with potential roommates through our platform before exchanging personal contact information. Your privacy is paramount."
              variants={cardSlideUp}
            />
          </motion.div>
        </div>

        <div className="mb-16">
          <motion.h2
            className="text-4xl font-extrabold text-center text-violet-950 mb-12 relative pb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Meet Our Visionary Team
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-purple-500 rounded-full"></span>
          </motion.h2>
          <motion.div
            className="text-violet-950"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
          >
            <TeamCarousel
              members={teamMembers}
              title="OUR TEAM"
              autoPlay={6000}
              onMemberChange={(member, index) => {}}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

const StatItem = ({ icon, value, label }) => (
  <div className="flex items-center gap-4">
    <div className="flex-shrink-0 p-4 rounded-full">{icon}</div>
    <div>
      <h3 className="text-4xl font-bold text-violet-950">{value}</h3>
      <p className="text-lg text-indigo-600">{label}</p>
    </div>
  </div>
);

const FeatureCard = ({ icon, title, description, variants }) => (
  <motion.div
    className="shadow-2xl rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
    variants={variants}
    whileHover={{ translateY: -5, boxShadow: "0 15px 30px rgba(0,0,0,0.2)" }}
  >
    <div className=" p-4 rounded-full mb-6 ">{icon}</div>
    <h3 className="text-2xl font-bold text-violet-950 mb-3">{title}</h3>
    <p className="text-indigo-300 leading-relaxed">{description}</p>
  </motion.div>
);

const teamMembers = [
  {
    id: "1",
    name: "Yash Yadav",
    role: "Co-Founder & CEO",
    image: "https://avatar.iran.liara.run/public/boy?username=Yash",
    bio: "Driving the vision and strategic direction, Yash is passionate about creating seamless living experiences through technology. His expertise in product development ensures RoomieFinder stays ahead.",
  },
  {
    id: "2",
    name: "Rushikesh Kalhale",
    role: "Co-Founder & CTO",
    image: "https://avatar.iran.liara.run/public/boy?username=Rushikesh",
    bio: "The architect behind our intelligent matching algorithm, Rushikesh brings a decade of experience in software engineering and AI to build a robust and secure platform.",
  },
  {
    id: "3",
    name: "Abhishek Kumbhar",
    role: "Head of Marketing",
    image: "https://avatar.iran.liara.run/public/boy?username=Abhishek",
    bio: "With a keen eye for connecting people with solutions, Abhishek leads our outreach efforts, ensuring more individuals discover the ease and benefits of RoomieFinder.",
  },
  {
    id: "4",
    name: "Yash Yadav",
    role: "Community Manager",
    image: "https://avatar.iran.liara.run/public/girl?username=Yash",
    bio: "Yash is the heart of our community, fostering positive interactions and ensuring every user feels supported. He's dedicated to building a trusted network.",
  },
  {
    id: "5",
    name: "Abhishek Kumbhar",
    role: "Product Designer",
    image: "https://avatar.iran.liara.run/public/boy?username=Abhishek",
    bio: "Crafting intuitive and beautiful user experiences, Abhishek ensures RoomieFinder is not just functional but a delight to use for every single person.",
  },
];
