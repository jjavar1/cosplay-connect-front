import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <FeedbackSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
