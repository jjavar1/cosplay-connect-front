// app/routes/_index.tsx
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import HeroSection from "~/components/HeroSection";
import FeaturesSection from "~/components/FeaturesSection";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}