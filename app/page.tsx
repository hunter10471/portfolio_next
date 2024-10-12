import Button from "@/components/common/Button/Button";
import Hero from "@/components/Hero/Hero";
import Image from "next/image";
import {
  PiDribbbleLogoFill,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiXLogoFill,
} from "react-icons/pi";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="my-5 flex gap-5">
        <div className="w-full max-w-[500px] h-[500px] relative flex-1">
          <div className="w-full h-full relative">
            <Image
              alt="I'm standing near a Mughal era Hamam (Bathing area) at Masjid Wazir Khan, Lahore PK"
              fill
              className="object-cover object-bottom rounded-2xl"
              src={"/assets/rafay.jpg"}
            />
          </div>
          <div className="relative flex gap-1 mt-2 text-sm italic">
            &ldquo; I'm standing near a Mughal era Hamam (Bathing area) at
            Masjid Wazir Khan, Lahore Pakistan. &rdquo;
          </div>
        </div>
        <div className="flex flex-col flex-1 rounded-xl bg-black/10 backdrop-blur-md p-10">
          <h2 className="text-4xl font-medium mb-4">
            Turning Concepts into High-Performance{" "}
            <span className="text-zinc-600">Digital Products</span>
          </h2>
          <p className="text-lg text-justify">
            Hey, I’m Rafay—a Full Stack Developer with 3 years of experience in
            web development and a year in information security. I specialize in
            building efficient, scalable, and visually engaging digital
            solutions. Along with web development, I’m also into UI/UX, Mobile
            App Development, Branding, and Web Design. My goal is to deliver
            clean, functional, and stylish digital products that make an impact.
            Let’s bring your ideas to life with the right blend of tech and
            design.
          </p>
          <div className="mt-auto flex gap-4">
            <Button text="Contact Me" />
            <Button
              className="p-0 h-9 w-9 text-black bg-white hover:bg-gray-100"
              Component={<PiDribbbleLogoFill size={20} />}
            />
            <Button
              className="p-0 h-9 w-9 text-black bg-white hover:bg-gray-100"
              Component={<PiLinkedinLogoFill size={20} />}
            />
            <Button
              className="p-0 h-9 w-9 text-black bg-white hover:bg-gray-100"
              Component={<PiXLogoFill size={20} />}
            />
            <Button
              className="p-0 h-9 w-9 text-black bg-white hover:bg-gray-100"
              Component={<PiInstagramLogoFill size={20} />}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
