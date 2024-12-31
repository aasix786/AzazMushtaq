"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Images } from "@/utills/Images";
import './style.css'

export default function Slider() {
  const testimonials = [
    {
      content: "Working with Azaz was a game-changer for our project. His expertise in web development not only improved our site’s functionality but also enhanced user engagement. I highly recommend him!",
      name: "Daria Pechaiko",
      company: "Virtua Digital"
    },
    {
      content: "Azaz brought our mobile app vision to life with his innovative approach and attention to detail. His commitment to delivering high-quality results made the entire process seamless.",
      name: "Patrik Jalkell",
      company: "Mirago Media AB."
    },
    {
      content: "From the initial consultation to the final launch, Azaz demonstrated exceptional skill and dedication. His ability to understand our needs and translate them into effective solutions was impressive.",
      name: "Peter Jakubicki",
      company: "FlycoGo"
    }
  ];
  return (
    <>
      <main className="w-full ">
        <h4 className="text-[#80db66] text-lg tracking-widest uppercase font-medium mt-5">
          Client Testimonials
        </h4>
        <h1 className="text-3xl font-semibold sm:text-[50px] lg:text-[70px] my-14">
          Reviews
        </h1>
        <div className="flex items-start w-full ">
      <Image className="h-12" src={Images.testimonial} alt="Testimonial Icon" />
      <Swiper
        cssMode={true}
        pagination={{
          clickable: true,
          el: ".custom-pagination"
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="p-5 py-10">
            <p className="text-2xl ">{testimonial.content}</p>
            <p className="font-semibold mt-5">{testimonial.name}</p>
            <i>{testimonial.company}</i>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
        <div className="custom-pagination flex ml-14 md:ml-16 gap-2 hover:cursor-pointer"></div>
      </main>
    </>
  );
}
