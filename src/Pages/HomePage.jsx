"use client";

import Navbar from "../Components/Layout/Navbar";
import Footer from "../Components/Layout/Footer";
import { Link } from "react-router";
import { Heart, Target, Users } from "lucide-react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function HomePage() {
  return (
    <div className="bg-gray-900 bg-white">
      <Navbar />
      {/* hero section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
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
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-15">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center ">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Find your next roommate today.{" "}
              <a href="#" className="font-semibold text-indigo-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center  ">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-indigo-500 sm:text-7xl">
              Discover compatible people to share your home with.
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
              Forget endless scrolling and awkward interviews; we connect you
              based on lifestyle, habits, and values.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-full bg-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get started
              </a>
              <Link
                to="/AboutUs"
                className="text-sm/6 font-semibold text-indigo-500"
              >
                About Us
              </Link>
            </div>
          </div>
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
      {/* aboutus section */}
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* --- Page Content --- */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* --- Hero Section --- */}
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden p-8 md:p-16 mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              About Our Mission
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We are a passionate team dedicated to creating seamless and
              beautiful digital experiences that empower users and businesses to
              achieve their goals.
            </p>
          </div>

          {/* --- Features/Values Section --- */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <FeatureCard
              icon={<Heart size={24} />}
              title="Passion"
              description="We love what we do, and we pour that passion into every project, ensuring the highest quality and attention to detail."
            />
            <FeatureCard
              icon={<Target size={24} />}
              title="Vision"
              description="Our goal is to be at the forefront of innovation, constantly exploring new technologies to solve real-world problems."
            />
            <FeatureCard
              icon={<Users size={24} />}
              title="Community"
              description="We believe in building strong relationships with our clients and users, fostering a community built on trust and collaboration."
            />
          </div>

          {/* --- Meet the Team Section --- */}
          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <TeamMember
                imgUrl="https://placehold.co/400x400/93C5FD/white?text=Jane"
                name="Jane Doe"
                role="Chief Executive Officer"
              />
              <TeamMember
                imgUrl="https://placehold.co/400x400/818CF8/white?text=John"
                name="John Smith"
                role="Lead Developer"
              />
              <TeamMember
                imgUrl="https://placehold.co/400x400/F0ABFC/white?text=Alice"
                name="Alice Johnson"
                role="UX/UI Designer"
              />
              <TeamMember
                imgUrl="https://placehold.co/400x400/A7F3D0/white?text=Mike"
                name="Mike Brown"
                role="Marketing Director"
              />
            </div>
          </div>
        </div>

        {/* --- Footer --- */}
        <footer className="bg-white border-t border-gray-200 mt-16">
          <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p>
              &copy; {new Date().getFullYear()} OurSite. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
      <Footer />
    </div>
  );
}

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-100">
    <div className="text-blue-500 bg-blue-100 p-3 rounded-full mb-4 w-12 h-12 flex items-center justify-center">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamMember = ({ imgUrl, name, role }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <img
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-blue-100"
      src={imgUrl}
      alt={name}
      onError={(e) => {
        e.target.src = "https://placehold.co/400x400/CCCCCC/white?text=Image";
      }}
    />
    <h4 className="text-xl font-semibold text-gray-900">{name}</h4>
    <p className="text-blue-600 font-medium">{role}</p>
  </div>
);
