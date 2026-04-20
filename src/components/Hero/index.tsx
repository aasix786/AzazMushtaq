"use client";
import { Images } from "@/utills/Images";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
// import { FaFacebookF, FaYoutube } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";

import "./style.css";

const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ??
  "https://calendly.com/jasonhammer/30min";

export default function Hero() {
  const styling = {
    backgroundImage: `url('${Images.sliderBg.src}')`,
    width: "100%",
    height: "100%",
    
  };

  return (
    <>
      <main
        className="w-full pt-20 sm:pt-16 px-7 sm:px-10 lg:flex justify-between"
        style={styling}
        id="home"
      >
        <section className="relative pb-10">
          <h2 className="text-[#80DB66] mt-32 text-center lg:text-left text-xl font-bold tracking-[10px]">
            {"HELLO I'M"}
          </h2>
          <h2 className="text-white text-[50px] tracking-widest md:text-[80px] lg:text-[90px] text-center lg:text-left lg:w-1/3 font-bold">
            Jason Hammer
          </h2>
          <div className="text-center lg:text-left">
            <span className="text-lg md:text-2xl font-semibold text-white">
              A Passionate{" "}
            </span>
            <TypeAnimation
            sequence={[
              "Senior Mobile App Engineer",
              1200,
              "React Native Specialist",
              1200,
              "Full-Stack Architect (Node.js & Laravel)",
              1200,
              "Scalable App Solutions Expert",
              1200,
              "Startup Tech Consultant",
              1200,
            ]}
              wrapper="span"
              speed={50}
              className="text-md md:text-4xl font-semibold text-[#80DB66]"
              repeat={Infinity}
            />
          </div>
          <div className="flex flex-col items-center lg:items-start gap-6 my-10">
            <button
              type="button"
              className="bg-[#80DB66] p-2 px-4 text-center md:py-4 md:px-10 tracking-widest font-semibold uppercase rounded-md text-white hover:opacity-90 transition-opacity"
              onClick={() => {
                if (typeof window === "undefined") return;
                if (window.Calendly) {
                  window.Calendly.initPopupWidget({ url: CALENDLY_URL });
                } else {
                  window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
                }
              }}
            >
              Schedule time with me
            </button>
            <Image
              src={Images.processDiagram}
              alt="How to schedule a meeting — step by step"
              className="w-full max-w-md lg:max-w-4xl rounded-md object-contain mt-10"
              sizes="(max-width: 1023px) 100vw, 56rem"
            />
          </div>
          <Image
            className="hidden lg:!block absolute left-0 bottom-10 "
            src={Images.shape3}
            alt="Shape 3"
            priority
          />
        </section>

        <section className="relative flex justify-center lg:pt-20  lg:w-1/2">
          <div className="absolute inset-x-0 top-10 lg:left-0  sm:top-16 lg:top-24  flex justify-center items-center">
            <div className="animate-pulse bg-[#3b3c46]  rounded-full opacity-30 w-[250px] h-[250px] sm:h-[420px] sm:w-[420px] lg:w-[500px] lg:h-[500px]  scale-animation"></div>
          </div>
          <Image
            className="relative z-10 w-60 h-80 sm:h-auto sm:w-auto"
            src={Images.heroImage}
            alt="Jason Hammer - Senior Full Stack Developer Profile Photo"
            priority
          />
          <Image
            className="hidden lg:!block absolute right-10 top-10 w-[55px]"
            src={Images.shape1}
            alt="Shape 1"
            priority
          />
          <Image
            className="hidden lg:!block absolute left-0 top-16 w-[55px]"
            src={Images.shape4}
            alt="Shape 4"
            priority
          />
        </section>
        {/* <section className="hidden lg:!block h-60 lg:!absolute right-4 top-52">
          <div className="p-5 border-[1px] border-slate-700  cursor-pointer rounded-md hover:bg-[#80DB66] hover-rotate-x-360 transition-transform duration-500">
            <FaFacebookF className="text-xl text-white rotate-x-360" />
          </div>
          <div className="p-5 border-[1px] border-slate-700  cursor-pointer rounded-md my-2 hover:bg-[#80DB66] hover-rotate-x-360 transition-transform duration-500">
            <FaTwitter className="text-xl text-white rotate-x-360" />
          </div>
          <div className="p-5 border-[1px] border-slate-700  cursor-pointer rounded-md my-2 hover:bg-[#80DB66] hover-rotate-x-360 transition-transform duration-500">
            <FaLinkedinIn className="text-xl text-white rotate-x-360" />
          </div>
          <div className="p-5 border-[1px] border-slate-700  cursor-pointer rounded-md hover:bg-[#80DB66] hover-rotate-x-360 transition-transform duration-500">
            <FaYoutube className="text-xl text-white rotate-x-360" />
          </div>
        </section> */}
      </main>
    </>
  );
}
