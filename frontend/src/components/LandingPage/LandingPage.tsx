import Navbar from "./Navbar";
import MainHero from "./MainHero";
import LearnMore from "./LearnMore";
import GetStarted from "./GetStarted";
import Footer from "./Footer";
import { useRef } from "react";

const LandingPage = () => {
  const learnMoreRef = useRef<HTMLDivElement | null>(null);
  // Smooth scrolling functionality
  const scrollToLearnMoreSection = () => {
    learnMoreRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-800 via-black to-gray-700 min-h-screen text-white font-roboto">
        <Navbar />
        <MainHero onLearnMoreClick={scrollToLearnMoreSection} />
        <LearnMore ref={learnMoreRef} />
        <GetStarted />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
