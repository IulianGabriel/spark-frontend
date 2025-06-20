const GetStarted = () => {
  return (
    <section className="px-4 py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
          <span className="block">Ready to Spark</span>
          <span className="block text-yellow-400 mt-2">New Connections?</span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of users who have already discovered a better way to
          connect and share.
        </p>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl mb-4 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50">
          Get Started for Free
        </button>

        <p className="text-gray-400 text-sm md:text-base">
          No credit card required • Join in seconds
        </p>
      </div>

      <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
    </section>
  );
};

export default GetStarted;
