import { featuresData } from "../../data/featuresData";
import { forwardRef } from "react";

const LearnMore = forwardRef<HTMLElement, object>((_props, ref) => {
  return (
    <section ref={ref} className="py-20 sm:py-28 lg:py-34 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
          <span className="text-white">Everything You Need to</span>
          <br />
          <span className="text-yellow-400">Stay Connected</span>
        </h2>
        <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-center">
          Spark brings together all the essential social features in one clean,
          intuitive platform.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className="flex-col justify-items-center content-center text-center bg-gray-900/50 border-1 border-yellow-400 rounded-xl p-6 lg:p-8 hover:bg-gray-900/70 transition-all duration-300 group"
          >
            <div className="text-yellow-400 mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300">
              <feature.icon className="w-12 h-12 lg:w-16 lg:h-16" />
            </div>

            <h3 className="text-white text-xl lg:text-2xl font-bold mb-3 lg:mb-4">
              {feature.title}
            </h3>

            <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default LearnMore;
