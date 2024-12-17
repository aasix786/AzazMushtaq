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
  return (
    <>
      <main className="w-full lg:w-1/2">
        <h4 className="text-[#80db66] text-lg tracking-widest uppercase font-medium mt-5">
          Work Experience
        </h4>
        <h1 className="text-3xl font-semibold sm:text-[50px] lg:text-[70px] my-10">
          My Experience
        </h1>
        <div className="flex items-start">
          <Image className=" h-12" src={Images.testimonial} alt="" />
          <Swiper
            cssMode={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination", // Custom class for pagination
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide className="p-5 py-10">
              <p className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                ex, sapiente vel omnis qui fugit accusamus, pariatur eum magnam
                nemo architecto dolorum necessitatibus alias, rerum veritatis
                vero molestiae eveniet harum!
              </p>
            </SwiperSlide>

            <SwiperSlide className="p-5 py-10">
              <p className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                ex, sapiente vel omnis qui fugit accusamus, pariatur eum magnam
                nemo architecto dolorum necessitatibus alias, rerum veritatis
                vero molestiae eveniet harum!
              </p>
            </SwiperSlide>

            <SwiperSlide className="p-5 py-10">
              <p className="text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                ex, sapiente vel omnis qui fugit accusamus, pariatur eum magnam
                nemo architecto dolorum necessitatibus alias, rerum veritatis
                vero molestiae eveniet harum!
              </p>
            </SwiperSlide>
          </Swiper>
        
        </div>
        <div className="custom-pagination ml-16"></div>
      </main>
    </>
  );
}
