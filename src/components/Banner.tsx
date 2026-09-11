import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-0 ">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-6 lg:gap-8">
        {/* Left Content */}
        <div className="col-span-1 md:col-span-7 py-4 sm:py-6 lg:py-10 px-2 sm:px-4 lg:px-8 text-center lg:text-left">
          <h2 className="font-inter text-[38px] sm:text-[48px] md:text-[54px] lg:text-[68px] font-extrabold leading-[1.05] sm:leading-none">
            Build Your Ideal{" "}
            <span className="gradient-text">Development Stack</span>
          </h2>

          <p className="text-[#475569] text-[15px] sm:text-[16px] lg:text-[18px] max-w-full sm:max-w-xl lg:w-143.75 mt-5 sm:mt-6 lg:mt-8 leading-relaxed mx-auto lg:mx-0">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          {/* Buttons */}
          <div className="mt-8 sm:mt-10 lg:mt-15 flex gap-2 sm:gap-3 justify-center lg:justify-start">
            <button className="font-inter gradient-button rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white whitespace-nowrap flex-1 sm:flex-none">
              Explore Technologies
            </button>

            <button className="font-inter text-[#475569] py-2.5 sm:py-3 px-3 sm:px-6 lg:px-14 rounded-lg border border-[#E5E7EB] text-sm sm:text-base whitespace-nowrap flex-1 sm:flex-none">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="col-span-1 md:col-span-5 flex justify-center md:justify-end py-4 sm:py-4 lg:py-10 -my-25">
          <img
            src={bannerImage}
            alt="Development stack"
            className="w-70 sm:w-90 md:w-105 lg:w-131.5 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;


