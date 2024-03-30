import React from "react";
import log2 from "../images/log3.png";
import { motion as m } from "framer-motion";

import HeadAnimation from "../Animation/HeadAnimation";

const Banner = () => {
  return (
    <div
      className="w-full h-screen  clip
      flex flex-col items-center text-center gap-14 text-white">
      <div className="relative w-full h-screen overflow-hidden">

  <div className="absolute inset-0 z-0">
    <video autoPlay loop muted  className="w-full h-full object-cover"  >
      <source src="./Video.mp4" type="video/mp4" />
      
    </video>
  </div>

  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
    <div className="mt-16 md:mt-7">
      <img className="w-[13rem]" src={log2} alt="" />
    </div>

    <div>
      <h1 className="text-3xl md:text-6xl 2xl:text-8xl capitalize font-bold md:w-[44rem] 2xl:w-[73rem] px-4 mx-auto textShadow">
        <HeadAnimation text={"welcome to Studio Pari MultiMedia"} />
      </h1>
      <p className="md:w-[30rem] 2xl:w-[40rem] 2xl:text-2xl mx-auto mt-4 textShadow px-3 font-medium">
        Welcome to our studio's online hub, where creativity meets digital innovation. Explore our portfolio, unleash your imagination, and embark on a journey of visual delight
      </p>
    </div>
  </div>
</div>

      
    </div>
  );
};

export default Banner;
