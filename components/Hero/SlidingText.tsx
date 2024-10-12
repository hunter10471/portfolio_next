"use client";
import Marquee from "react-fast-marquee";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { IoCodeSlash } from "react-icons/io5";
import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlineBuild } from "react-icons/ai";
import { VscPreview } from "react-icons/vsc";

const SlidingText = () => {
  const items = [
    { label: "Web Dev", icon: <IoCodeSlash /> },
    { label: "Web Design", icon: <HiOutlinePaintBrush /> },
    { label: "Mobile App Dev", icon: <CiMobile3 /> },
    { label: "UI/UX", icon: <VscPreview /> },
    { label: "Branding", icon: <AiOutlineBuild /> },
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-white/10 text-white h-10 flex items-center mt-14">
      <Marquee pauseOnHover>
        <div className="flex space-x-12 mr-10">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-lg font-light">{item.icon}</span>
              <span className="text-lg font-light">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex space-x-12 mr-10">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-lg font-light">{item.icon}</span>
              <span className="text-lg font-light">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex space-x-12 mr-10">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-lg font-light">{item.icon}</span>
              <span className="text-lg font-light">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex space-x-12 mr-10">
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-lg font-light">{item.icon}</span>
              <span className="text-lg font-light">{item.label}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SlidingText;
