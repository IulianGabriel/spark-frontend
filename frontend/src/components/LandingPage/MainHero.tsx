import bigLogo from "../../assets/Shiny Logo.png";

interface MainHeroProps {
  onLearnMoreClick: () => void;
}

const MainHero = ({ onLearnMoreClick }: MainHeroProps) => {
  return (
    <>
      <section className="flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <img
          src={bigLogo}
          alt="mainLogo"
          className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mb-8 sm:mb-12"
        />

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8">
          <span className="text-white">Ignite Your</span>
          <br />
          <span className="text-yellow-400">Social Spark</span>
        </h1>

        <p className="text-center text-gray-400 sm:text-md lg:text-2xl max-w-2xl lg:max-w-4xl leading-relaxed mb-8 sm:mb-12">
          Connect, share, and discover in a minimalist social experience
          designed for authentic connections.
        </p>

        <div className="flex sm:flex-row gap-6 sm:gap-8">
          <button className="px-6 py-3 sm:px-10 sm:py-4 bg-yellow-400 text-black rounded-lg text-base sm:text-lg font-medium hover:bg-yellow-300 transition-colors">
            Join Spark Today
          </button>
          <button
            onClick={onLearnMoreClick}
            className="px-8 py-3 sm:px-10 sm:py-4 border-2 border-white text-white rounded-lg text-base sm:text-lg font-medium hover:bg-white hover:text-black transition-colors"
          >
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default MainHero;
