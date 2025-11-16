"use client";
import Navbar from "../Layout/Navbar";
import React, { Suspense, lazy } from "react";
import HeroSection from "./HomePageComponents/HeroSection";

const Footer = lazy(() => import("../Layout/Footer"));
const FeaturedListings = lazy(() =>
  import("./HomePageComponents/FeaturedListings")
);
const HowItWorks = lazy(() => import("./HomePageComponents/HowItWorks"));
const CallToAction = lazy(() => import("./HomePageComponents/CallToAction"));
const TrustAndSafety = lazy(() => import("./HomePageComponents/TrusAndSafety"));

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
      <TrustAndSafety />

      {/* how it works */}
      <CallToAction />

      <Footer />
    </div>
  );
}
