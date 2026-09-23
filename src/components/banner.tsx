import bannerImg from "../assets/banner-stack.png";

const banner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
            Build Your Ideal
          </h1>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent leading-tight">
            Development Stack
          </h1>

          <p className="mt-6 text-gray-500 text-lg leading-8 max-w-xl">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits
            your next project.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="cursor-pointer px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 hover:scale-105 transition">
              Explore Technologies
            </button>

            <button className="cursor-pointer px-6 py-3 rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

    
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src={bannerImg}
            alt="Development Stack"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default banner;