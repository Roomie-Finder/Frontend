"use client";

import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import HeroSection from "./HomePageComponents/HeroSection";
import CallToAction from "./HomePageComponents/CallToAction";
import HowItWorks from "./HomePageComponents/HowItWorks";
import FeaturedListings from "./HomePageComponents/FeaturedListings";
import { TrustSafety } from "./HomePageComponents/TrusAndSafety";

export default function HomePage() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* hero section */}
      <HeroSection />

      {/* room section */}
      <HowItWorks />

      {/* Featured Listings */}
      <FeaturedListings />

      {/* TrusAndSafety */}
      <TrustSafety />

      {/* how it works */}
      <CallToAction />

      <Footer />
    </div>
  );
}
