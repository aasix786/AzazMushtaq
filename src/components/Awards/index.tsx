import { Images } from "@/utills/Images";
import Image from "next/image";

export default async function Awards() {
  const data = [
    {
      img: Images.brand,
      title: "Best Developer",
      year: "2022",
      company: "Developer Association",
      place: "New York, Usa",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.",
    },
    {
      img: Images.brand,
      title: "Best Developer",
      year: "2022",
      company: "Developer Association",
      place: "New York, Usa",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.",
    },
    {
      img: Images.brand,
      title: "Best Developer",
      year: "2022",
      company: "Developer Association",
      place: "New York, Usa",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolore.",
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
            className="py-10 border-t-[1px] border-b-[1px] flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between"
          >
            <Image className=" md:h-10" src={item.img} alt="" />
            <div className="">
              <h1 className="text-2xl  font-bold whitespace-nowrap  ">
                {item.title}
              </h1>
              <p>{item.year}</p>
            </div>
            <div className="">
              <h1 className="text-2xl  font-bold whitespace-nowrap ">
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
