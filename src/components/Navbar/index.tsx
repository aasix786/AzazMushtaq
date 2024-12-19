"use client";
import { Images } from "@/utills/Images";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";


export default function Navbar() {
  const [sticky, setSticky] = useState(false);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 px-5 py-10 flex !w-full items-center justify-between transition-all duration-300 ease-in-out ${
          sticky
            ? "fixed z-[9999] bg-[#25262F] py-4 shadow-md transition-all duration-300 ease-in-out"
            : "absolute"
        }`}
      >
       <Link href={'/'}>
       <Image
          className={`transition-all duration-300 ease-in-out ${
            sticky ? "w-[130px]" : "w-[130px] sm:w-1/7"
          }`}
          src={Images.logo}
          alt="logo"
        />
       </Link>
        <section className=" hidden  lg:!flex justify-between items-center gap-10">
          <ul className="flex justify-between gap-10 text-white">
           <Link href={'/#home'}>
           <li className="hover:text-[#80DB66] font-semibold cursor-pointer">
              Home
            </li>
           </Link>
         <Link href={'/#about'}>
         <li className="hover:text-[#80DB66] font-semibold cursor-pointer">
              About
            </li>
         </Link>
            <Link href={'/#work'}>
            <li className="hover:text-[#80DB66] font-semibold cursor-pointer">
              Works
            </li>
            </Link>
            <Link href={'/#service'}>
            <li className="hover:text-[#80DB66] font-semibold cursor-pointer">
              Service
            </li>
            </Link>
           <Link href={'/#contact'}>
           <li className="hover:text-[#80DB66] font-semibold cursor-pointer">
              Contact
            </li>
           </Link>
          </ul>
          {/* <button
            className={`border-[1px] text-white rounded-md border-[#80DB66] uppercase hover:bg-[#80DB66] transition-all duration-300 ease-in-out ${
              sticky ? " px-4 py-[6px] " : "py-2 px-8"
            }`}
          >
            Download CV
          </button> */}
        </section>
        <section className="flex items-center  lg:!hidden ">
          {/* <button
            className={`border-[1px] text-white mr-3 sm:mr-10 rounded-md border-[#80DB66] uppercase hover:bg-[#80DB66] p-2 px-8 transition-all duration-300 ease-in-out ${
              sticky ? "py-[6px] px-6" : " px-4"
            }`}
          >
            Download CV
          </button> */}
          <button onClick={toggleDrawer}>
            <IoMenu className=" text-4xl text-[#80DB66]" />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            className=" !bg-[#80DB66]"
          >
            <main>
              <RxCross2
                onClick={toggleDrawer}
                className=" text-2xl absolute right-2 top-2 text-white"
              />
              <ul className="flex flex-col mt-20 gap-5 text-white">
               <Link href={'/#home'}>
               <li  onClick={toggleDrawer} className="p-3 hover:bg-white hover:text-black  cursor-pointer">
                  Home
                </li>
               </Link>
               <Link href={'/#about'}>
               <li  onClick={toggleDrawer} className="p-3  cursor-pointer hover:bg-white hover:text-black">About</li>
               </Link>
               <Link href={'/#work'}>
               <li  onClick={toggleDrawer} className="p-3  cursor-pointer hover:bg-white hover:text-black">Works</li>
               </Link>
              <Link href={'/#service'}>
              <li  onClick={toggleDrawer} className="p-3  cursor-pointer hover:bg-white hover:text-black">Service</li>
              </Link>
              <Link href={'/#contact'}>
              <li  onClick={toggleDrawer} className="p-3  cursor-pointer hover:bg-white hover:text-black">Contact</li>
              </Link>
               
              
              </ul>
            </main>
          </Drawer>
        </section>
      </header>
    </>
  );
}
