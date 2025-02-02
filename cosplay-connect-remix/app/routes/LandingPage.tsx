// app/routes/_index.tsx
import type { MetaFunction } from "@remix-run/node";
import HeroSection from "~/components/HeroSection";
import FeaturesSection from "~/components/FeaturesSection";
import FeedbackSection from "~/components/FeedbackSection";
import PageLayout from "~/components/PageLayout";

export const meta: MetaFunction = () => {
  return [
    { title: "Cosplay Connect - Connect Cosplayers with Photographers" },
    { 
      name: "description", 
      content: "Find and connect with cosplay photographers and cosplayers for your next convention!" 
    },
  ];
};

export default function Index() {
  return (
    <PageLayout>
      <main className="font-sans">
        <HeroSection />
        <FeaturesSection />
        <FeedbackSection />
      </main>
    </PageLayout>
  );
}