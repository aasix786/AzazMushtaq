"use client";
import { useEffect } from "react";
import { Images } from "@/utills/Images";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";


const services=[
    {
        id: 1,
        title: "Web Development",
        description: "Professional web development services to build scalable and responsive websites.",
        image: Images.offer1,
      },
      {
        id: 2,
        title: "App Development",
        description: "Create engaging and intuitive mobile applications across platforms.",
        image: Images.offer1,
      },
      {
        id: 3,
        title: "Project Management",
        description: "Expert project management services to deliver your project on time and budget.",
        image: Images.offer1,
      },
      {
        id: 4,
        title: "Social Media Marketing",
        description: "Comprehensive social media marketing strategies to grow your business.",
        image: Images.offer1,
      },
]

export default function Offer() {


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
    <main id="service" className="p-10 bg-[#25262F]">
      <h4 className="text-[#80db66] text-lg tracking-widest uppercase font-medium mt-5 text-center">Service</h4>
      <h1 className="text-3xl font-semibold sm:text-[50px] lg:text-[70px] my-10 text-white text-center">
        What I Offer
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 py-10">
        {services.map((service) => (
          <div key={service.id} className="bg-white p-5 md:p-10 flex items-start gap-5 rounded-xl card">
            <Image src={service.image} alt={service.title} />
            <div>
              <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl">{service.title}</h1>
              <p className="my-2 md:text-lg text-[#4D4C5C]">{service.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
