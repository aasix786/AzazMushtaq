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
          className=" hidden lg:!block absolute left-10 top-10"
          src={Images.content1}
          alt=""
        />
        <section className="bg-white shadow-sm flex flex-col gap-5 p-10 lg:py-14 rounded-lg max-w-[400px] card">
          <Image className="w-10 lg:w-[60px]" src={Images.icon1} alt="" />
          <h1 className="font-semibold text-2xl">Dedication</h1>
          <p className="lg:text-xl text-[#4D4C5C]">
            Seaque ipsa quae ab illo inven tore veritatis et qua si architecto
            beatae atis et sopno vitae.
          </p>
        </section>

        <section className="bg-white shadow-sm flex flex-col gap-5 p-10 lg:py-14 rounded-lg max-w-[400px] card lg:mt-32">
          <Image className="w-10 lg:w-[60px]" src={Images.icon2} alt="" />
          <h1 className="font-semibold text-2xl">Dedication</h1>
          <p className="lg:text-xl text-[#4D4C5C]">
            Seaque ipsa quae ab illo inven tore veritatis et qua si architecto
            beatae atis et sopno vitae.
          </p>
        </section>

        <section className="bg-white shadow-sm flex flex-col gap-5 p-10 lg:py-14 rounded-lg max-w-[400px] card">
          <Image className="w-10 lg:w-[50px]" src={Images.icon3} alt="" />
          <h1 className="font-semibold text-2xl">Dedication</h1>
          <p className="lg:text-xl text-[#4D4C5C]">
            Seaque ipsa quae ab illo inven tore veritatis et qua si architecto
            beatae atis et sopno vitae.
          </p>
        </section>

        <section className="bg-white shadow-sm flex flex-col gap-5 p-10 lg:py-14 rounded-lg max-w-[400px] card lg:mt-32">
          <Image className="w-10 lg:w-[60px]" src={Images.icon4} alt="" />
          <h1 className="font-semibold text-2xl">Dedication</h1>
          <p className="lg:text-xl text-[#4D4C5C]">
            Seaque ipsa quae ab illo inven tore veritatis et qua si architecto
            beatae atis et sopno vitae.
          </p>
        </section>
      </main>
    </>
  );
}
