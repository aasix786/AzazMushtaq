import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



export default async function Contact() {
  return (
    <>
      <main id="contact" className="p-10">
        <h4 className="text-[#80db66]  text-lg tracking-widest uppercase font-medium mt-5 text-center">
        Contact Me
        </h4>
        <h1 className="text-3xl  font-semibold sm:text-[50px] lg:text-[70px] my-10  text-center">
        Let’s Start A New Project
        </h1>
      <div className=" flex flex-col lg:flex-row gap-10 lg:items-start mt-20 ">
      <section className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10  lg:w-1/2">
          <div className="flex items-center gap-5">
            <div className=" bg-[#80db66] p-5 rounded-full text-white hover:bg-white hover:text-[#80db66] hover:border-[1px] hover:border-[#80db66] cursor-pointer ">
              <IoLocationSharp className="text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Location</h1>
              <p className="text-[#4D4C5C] text-lg">20 Bordeshi, London, Usa</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className=" bg-[#80db66] p-5 rounded-full text-white hover:bg-white hover:text-[#80db66] hover:border-[1px] hover:border-[#80db66] cursor-pointer ">
              <MdEmail  className="text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Email</h1>
              <p className="text-[#4D4C5C] text-lg">hello@qubohub.com</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className=" bg-[#80db66] p-5 rounded-full text-white hover:bg-white hover:text-[#80db66] hover:border-[1px] hover:border-[#80db66] cursor-pointer ">
              <FaPhoneAlt  className="text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Phone</h1>
              <p className="text-[#4D4C5C] text-lg">+123 456 7890</p>
            </div>
          </div>
        </section>
        <section className="  lg:w-1/2">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
<input type="text" placeholder="Your Name" className="p-3 text-[#4D4C5C] text-lg border-[1px] border-[#4D4C5C] rounded-lg outline-[#80db66]" />
            <input type="text" placeholder="Your Email" className="p-3 text-[#4D4C5C] text-lg border-[1px] border-[#4D4C5C] rounded-lg outline-[#80db66]" />
            <input type="text" placeholder="Your Phone" className="p-3 text-[#4D4C5C] text-lg border-[1px] border-[#4D4C5C] rounded-lg outline-[#80db66]" />
            <input type="text" placeholder="Your Subject" className="p-3 text-[#4D4C5C] text-lg border-[1px] border-[#4D4C5C] rounded-lg outline-[#80db66]" />
            </div>
<textarea placeholder="Start Writing Message Here.." rows={5}  className="p-3 w-full my-10  text-[#4D4C5C] text-lg border-[1px] border-[#4D4C5C] rounded-lg outline-[#80db66]" ></textarea>

<button className="p-2 px-8 bg-[#80db66] text-lg tracking-widest text-white  rounded-lg">
    Submit Now
</button>
        </section>
      </div>
      </main>
    </>
  );
}
