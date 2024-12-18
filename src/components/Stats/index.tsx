"use client";
import CountUp from "react-countup";
export default function Stats() {
  return (
    <>
      <main className="bg-[#25262F] p-10 py-20 flex flex-col lg:flex-row gap-20">
        <section className="lg:w-1/2">
          <h4 className="text-[#80db66]  text-lg tracking-widest uppercase font-medium mt-5">
            Fun Facts
          </h4>
          <h1 className="text-4xl tracking-widest text-white font-semibold lg:text-[60px] leading-tight ">
            I Develop System that Works
          </h1>
          <p className="text-[#A0A0BB] lg:text-xl my-10">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia dese runt mollit anim id est laboru doloremque laudantium,
            totaeaque ipsa quae ab illo inven tore veritatis et quasi architecto
            beatae vitae.
          </p>
        </section>

        <section className="grid  grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-20 ">
          <div className=" p-5 border-[1px] border-slate-700 flex items-center gap-5 rounded-lg">
            <CountUp
              className="text-[85px] text-[#80db66]"
              end={8}
              duration={2.75}
            />
            <h1 className="text-2xl text-white">Years of Experience</h1>
          </div>
          <div className=" p-5 border-[1px] border-slate-700 flex items-center gap-5 rounded-lg">
            <span className="flex items-center">
              <CountUp
                className="text-[80px] text-[#80db66]"
                end={200}
                duration={2.75}
              />
                <p className="text-[50px] text-[#80db66]">+</p>
            </span>
            <h1 className="text-2xl text-white">Total Clients</h1>
          </div>
          <div className=" p-5     border-[1px] border-slate-700 flex items-center gap-5 rounded-lg">
            <span className="flex items-center">
              <CountUp
                className="text-[80px] text-[#80db66]"
                end={80}
                duration={2.75}
              />
              <p className="text-[50px] text-[#80db66]">+</p>
            </span>
            <h1 className="text-2xl text-white">Projects Completed</h1>
          </div>
          <div className=" p-5     border-[1px] border-slate-700 flex items-center gap-5 rounded-lg">
            <CountUp
              className="text-[80px] text-[#80db66]"
              end={5}
              duration={2.75}
            />
              <p className="text-[50px] text-[#80db66]">+</p>
            <h1 className="text-2xl text-white">Digital Products</h1>
          </div>
        </section>
      </main>
    </>
  );
}
