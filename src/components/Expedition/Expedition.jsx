import React, { useLayoutEffect, useRef } from "react";
import logo from "../images/plog.png";
import cloud from "../images/cloud.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Blog from "../Blog/Blog";

const Expedition = () => {
  const contentRef = useRef("");
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const animate = gsap.timeline({
      scrollTrigger: {
        trigger: ".about1",
        start: "top top",
        endTrigger: contentRef?.current,
        end: "bottom center",
        toggleClass: { targets: ".about1", className: "active" },
      },
    });
    animate.from(contentRef?.current, { duration: 1 });
  }, []);

  return (
    <section ref={contentRef} className="overflow-hidden">
      <div
        className="bg-mountain w-full h-[550px] 2xl:h-[900px] bg-no-repeat bg-cover bg-center
        lg:mt-28 flex items-end justify-center relative overflow-hidden md:overflow-visible">
        <div className="text-white pb-2 text-center absolute bottom-6 md:bottom-0 !z-50 py-[7rem]">
          <img
            className="w-[8rem] md:w-[40rem] 2xl:w-[16rem] mx-auto"
            src={logo}
            alt="logoImg"
          />
          <h1 className="text-3xl 2xl:text-6xl font-bold capitalize py-4">
          Amazing Studio Works 
          </h1>
          <p className="px-6 lg:w-[60rem] 2xl:w-[85rem] mx-auto text-sm md:text-base 2xl:text-2xl">
          With a focus on quality and attention to detail, we strive for excellence in everything we do. Our goal is not just to meet client expectations but to exceed them, delivering results that inspire and resonate.
Above all, our studio is a community of passionate creatives who love what we do. We are committed to fostering a supportive and inclusive environment where every voice is heard and every idea is valued.
          </p>
        </div>
        {Array(14)
          .fill()
          .map((_, i) => (
            <img
              className="absolute right-0 left-0 bottom-[-3rem] sm:bottom-[-6rem] md:bottom-[-9rem]
                2xl:bottom-[-15rem]"
              key={i}
              src={cloud}
              alt="cloudImg"
              style={{ animation: `cloud ${i + 15}s linear infinite` }}
            />
          ))}
      </div>
      <Blog />
    </section>
  );
};

export default Expedition;
