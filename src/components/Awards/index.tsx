import { Images } from "@/utills/Images";
import Image from "next/image";

export default async function Awards() {
  const data = [
    {
      img: Images.brand,
      title: "Top Software Engineer",
      year: "2024",
      company: "Onism Solution LLC",
      place: "Lahore, Pak",
      desc: "Honored for expertise in software engineering, achieving excellence in building robust and scalable systems for clients across various industries.",
    },
    {
      img: Images.brand,
      title: "Outstanding Mobile App Developer",
      year: "2022",
      company: "Synx",
      place: "London, UK",
      desc: "Recognized for exceptional skill in mobile app development, delivering innovative solutions that enhance user experience and functionality.",
    },
    {
      img: Images.brand,
      title: "Excellence in Web Development",
      year: "2021",
      company: "Truckload",
      place: "New York, Usa",
      desc: "Awarded for creating cutting-edge, responsive websites that meet the latest industry standards and drive meaningful engagement for users.",
    },
  ];
  return (
    <>
      <main className="p-10 ">
        <h4 className="text-[#80db66] text-center text-lg tracking-widest uppercase font-medium mt-5">
          Success Stories
        </h4>
        <h1 className="text-3xl text-center font-semibold sm:text-[50px] md:text-[70px] my-10 mb-20">
          Awards & Achivements
        </h1>
        {data.map((item, index) => (
          <section
            key={index}
            className="py-10 border-t-[1px] border-b-[1px] flex flex-col lg:flex-row gap-10 lg:gap-14  justify-between"
          >
            <Image className=" md:h-10" src={item.img} alt="" />
            <div className="lg:w-[400px] ">
              <h1 className="text-2xl  font-bold   ">
                {item.title}
              </h1>
              <p>{item.year}</p>
            </div>
            <div className=" lg:w-[400px]">
              <h1 className="text-2xl  font-bold  ">
                {item.company}
              </h1>
              <p>{item.place}</p>
            </div>
            <p className="">{item.desc}</p>
          </section>
        ))}
      </main>
    </>
  );
}
