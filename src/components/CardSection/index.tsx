"use client";
import { Images } from "@/utills/Images";
import Image from "next/image";
import { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

export default function CardSection() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      VanillaTilt.init(card as HTMLElement, {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    });
  }, []);

  return (
    <>
      <main className="bg-[#E2ECF6] relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-16 p-10 gap-10 lg:gap-5 place-items-center">
        <Image
        priority
          className=" hidden lg:!block absolute left-10 top-10"
          src={Images.content1}
          alt=""
        />
        <section className="bg-white shadow-sm flex flex-col gap-5 p-10 px-5 lg:py-14 rounded-lg max-w-[400px] card">
          <Image className="w-10 lg:w-[60px]" src={Images.icon1} priority alt="" />
          <h2 className="font-semibold text-2xl">Dedication</h2>
          <p className=" text-[#4D4C5C]">
            The heart of my work is dedication. I’m passionate about creating
            high-quality solutions that make a difference. Every project is a
            new opportunity to deliver something meaningful, and I put my all
            into bringing ideas to life, from the first line of code to the
            finished product.
          </p>
        </section>

        <section className="bg-white shadow-sm flex flex-col gap-5 p-10 px-5 lg:py-14 rounded-lg max-w-[400px] card lg:mt-32">
          <Image className="w-10 lg:w-[60px]" priority src={Images.icon2} alt="" />
          <h2 className="font-semibold text-2xl">Smart Work</h2>
          <p className=" text-[#4D4C5C]">
            It’s not just about working harder—it’s about working smarter. I
            stay up-to-date with the latest tools and strategies to deliver
            innovative solutions that save time without cutting corners.
            Efficiency and creativity go hand-in-hand in my process, ensuring
            every project reaches its fullest potential.
          </p>
        </section>

        <section className="bg-white shadow-sm flex flex-col gap-5 px-5 p-10 lg:py-14 rounded-lg max-w-[400px] card">
          <Image className="w-10 lg:w-[50px]" src={Images.icon3} priority alt="" />
          <h2 className="font-semibold text-2xl">Collaboration</h2>
          <p className=" text-[#4D4C5C]">
            Collaboration is key to every great project. I value the ideas and
            input of each team member, working together to create solutions that
            are stronger than any of us could build alone. For me, teamwork
            isn’t just about working with others; it’s about creating something
            amazing together.
          </p>
        </section>

        <section className="bg-white shadow-sm flex flex-col gap-5 p-10 px-5 lg:py-14 rounded-lg max-w-[400px] card lg:mt-32">
          <Image className="w-10 lg:w-[60px]" src={Images.icon4} priority alt="" />
          <h2 className="font-semibold text-2xl">Technology</h2>
          <p className=" text-[#4D4C5C]">
            Technology is always evolving, and so am I. I’m constantly exploring
            new tech and trends to keep my work future-ready. By integrating
            cutting-edge innovations, I aim to build solutions that not only
            meet today’s standards but also prepare for tomorrow’s
            possibilities.
          </p>
        </section>
      </main>
    </>
  );
}
