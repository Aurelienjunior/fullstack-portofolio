import React from 'react';

const HeroSection = () => {
  return (
    <section className=" 2xl:w-[80%] px-4 w-full relative rounded-b-xl h-fit pt-[200px] pb-5 bg-[#0269F3] flex justify-between ">
      <div className=" w-1/2 h-full text-white flex flex-col gap-4 justify-start items-end border border-black ">
        <h1 className=" text-8xl font-bold ">Your Business Digital.</h1>
        <p className=" text-2xl ">
          Turn your Binusess digital by having a website or mobile app. and show
          your presence online to attract more traffice to your business
        </p>
        <div className=" w-full border flex justify-around ">
          <button className=" bg-white text-[#0269F3] text-3xl px-6 py-2 rounded-full ">
            Get Started
          </button>
          <button className=" border bg-[#0269F3] text-3xl px-6 py-2 rounded-full ">
            Download
          </button>
        </div>
      </div>
      <div className=" w-1/2 h-full flex justify-center border border-black ">
        {/* big Image */}
      </div>
    </section>
  );
};

export default HeroSection;
