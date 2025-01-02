"use client";
import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Images } from "@/utills/Images";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";
import "./style.css";
import Animation from "./Animation";

export default function About() {
  const cardRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }
  }, []);

  return (
    <>
      <main
        id="about"
        className="p-10 bg-white py-20 flex flex-col md:flex-row  gap-20  "
      >
        <section className="w-full md:w-2/5 relative ">
          <Image
            data-aos="fade-right"
            src={Images.aboutImage}
            className="   card pl-10"
            alt="Azaz Mushtaq - Senior Full Stack Developer Profile Photo"
            priority
          />

        </section>
        <section className="md:w-3/5">
          <h2 className=" text-[#80DB66] uppercase text-xl tracking-widest">
            About Me
          </h2>
          <h2 className="text-4xl tracking-widest font-semibold lg:text-[60px] leading-tight ">
            I Develop System that Works
          </h2>
          <p className="text-[#4D4C5C] lg:text-xl my-5">
            {
              "As a Full Stack Developer at Onism Solution, I am dedicated to creating innovative software solutions that transform industries. With a Master's in Computer Science and extensive experience across various programming languages, frameworks, and databases, I specialize in building robust, scalable applications that deliver exceptional user experiences."
            }
          </p>
          <hr />

          <section className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 whitespace-nowrap ">
            <div className="grid grid-cols-2  ">
              <ul className="flex flex-col gap-5">
                <li className="text-[#4D4C5C] font-semibold text-lg">Name</li>
                <li className="text-[#4D4C5C] font-semibold text-lg">Age</li>
                <li className="text-[#4D4C5C] font-semibold text-lg">
                  Occupation
                </li>
              </ul>
              <ul className="flex flex-col w-1/2 sm:w-full gap-5">
                <li className="text-lg">Azaz Mushtaq</li>
                <li className="text-lg">29 Years</li>
                <li className="text-lg">System Engineer</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 mt-5 sm:mt-0 md:mt-5 lg:mt-0 ">
              <ul className="flex flex-col gap-5">
                <li className="text-[#4D4C5C] font-semibold text-lg">Phone</li>
                <li className="text-[#4D4C5C] font-semibold text-lg">Email</li>
                <li className="text-[#4D4C5C] font-semibold text-lg">
                  Nationality
                </li>
              </ul>
              <ul className="flex flex-col w-1/2 sm:w-full gap-5">
                <li className="text-lg">(916) 857-8156</li>
                <li className="text-lg">aziijnab@gmail.com</li>
                <li className="text-lg">Pakistani</li>
              </ul>
            </div>
          </section>
          <hr />
        </section>
      </main>
      <Animation />
    </>
  );
}
