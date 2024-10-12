import { Poppins } from "next/font/google";
import React from "react";
import SlidingText from "./SlidingText";

const poppins = Poppins({ subsets: ["latin"], weight: ["300", "700"] });
const Hero = () => {
  return (
    <div className="overflow-hidden w-full flex font-bold flex-col items-center justify-center from-[#1c1c1c] via-[#2c2c2c] to-[#101010] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.45),_transparent_60%),_linear-gradient(to_bottom,_#1c1c1c,_#101010)] min-h-[400px] rounded-2xl">
      <h1
        className={`${poppins.className} text-6xl text-white leading-[70px] text-center`}
      >
        Transforming Ideas into Stunning <br />{" "}
        <span className="text-zinc-400 font-light">Digital Experiences </span>
      </h1>
      <SlidingText />
    </div>
  );
};

export default Hero;
