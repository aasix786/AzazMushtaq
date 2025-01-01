"use client"
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);  
  const [isLoading, setIsLoading] = useState(false);
  const [message , setMessage] = useState("")

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
  
    emailjs
      .sendForm(
        "service_rttcrhi", 
        "template_1tltn0r", 
        form.current!, 
        "Dso5ZIjFry38Qk0FD" 
      )
      .then(
        () => {
          setIsLoading(false);
          setMessage("Your Email has been sent successfully");
          setTimeout(() => setMessage(""), 3000); 
        },
        (error) => {
          console.log(error);
          setMessage("Failed to send email. Please try again.");
          setIsLoading(false);
          setTimeout(() => setMessage(""), 3000); 
        }
      );
  };
  

  return (
    <>
      <main id="contact" className="p-10">
        <h4 className="text-[#80db66]  text-lg tracking-widest uppercase font-medium mt-5 text-center">
          Contact Me
        </h4>
        <h2 className="text-3xl  font-semibold sm:text-[50px] lg:text-[70px] my-10  text-center">
          Let’s Start A New Project
        </h2>
        <div className=" flex flex-col lg:flex-row gap-10 lg:items-start mt-20 ">
          <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10  lg:w-1/2">
            <div className="flex items-center gap-5">
              <div className=" bg-[#80db66] p-5 rounded-full text-white hover:bg-white hover:text-[#80db66] hover:border-[1px] hover:border-[#80db66] cursor-pointer ">
                <IoLocationSharp className="text-xl" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">Location</h2>
                <p className="text-[#4D4C5C] text-lg">Lahore, Pakistan</p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=aziijnab@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="bg-[#80db66] p-5 rounded-full text-white hover:bg-white hover:text-[#80db66] hover:border-[1px] hover:border-[#80db66] cursor-pointer">
                  <MdEmail className="text-xl" />
                </div>
              </a>
              <div>
                <h2 className="text-2xl font-semibold">Email</h2>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=aziijnab@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4D4C5C] text-lg"
                >
                  aziijnab@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 w-max ">
              <Link href={`tel:+1 916 857 8156`}>
                <div className=" bg-[#80db66] p-5 rounded-full text-white hover:bg-white hover:text-[#80db66] hover:border-[1px] hover:border-[#80db66] cursor-pointer ">
                  <FaPhoneAlt className="text-xl" />
                </div>
              </Link>
              <div>
                <h2 className="text-2xl font-semibold">Phone</h2>
                <Link href={`tel:+1 916 857 8156`}>
                  <p className="text-[#4D4C5C] text-lg cursor-pointer">
                    +1 916 857 8156
                  </p>
                </Link>
              </div>
            </div>
          </section>
          <section className="w-full lg:w-1/2" >
          <form ref={form} className="w-full  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <input
                type="text"
                placeholder="Your Name"
                name="from_name"
                className="p-3 text-[#4D4C5C] text-lg border-[1px] border-[#4D4C5C] rounded-lg outline-[#80db66]"
              />
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                className="p-3 text-[#4D4C5C] text-lg border-[1px] border-[#4D4C5C] rounded-lg outline-[#80db66]"
              />
              <input
                type="text"
                placeholder="Your Phone"
                name="phone"
                className="p-3 text-[#4D4C5C] text-lg border-[1px] border-[#4D4C5C] rounded-lg outline-[#80db66]"
              />
              <input
                type="text"
                placeholder="Your Subject"
                name="subject"
                className="p-3 text-[#4D4C5C] text-lg border-[1px] border-[#4D4C5C] rounded-lg outline-[#80db66]"
              />
            </div>
            <textarea
              placeholder="Start Writing Message Here.."
              name="message"
              rows={5}
              className="p-3 w-full my-10  text-[#4D4C5C] text-lg border-[1px] border-[#4D4C5C] rounded-lg outline-[#80db66]"
            ></textarea>

            <button onClick={sendEmail} className="p-2 px-8 bg-[#80db66] text-lg tracking-widest text-white  rounded-lg">
              {
                isLoading ? "Sending..." : "Send Message"
              }
            </button>
            {
              message && <p className="text-sm text-[#4D4C5C] my-2">{message}</p>
            }
          </form>
          </section>
        </div>
      </main>
    </>
  );
}
