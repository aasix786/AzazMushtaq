import { Images } from "@/utills/Images";
import Image from "next/image";
import { MdOutlineWorkHistory } from "react-icons/md";


export default async function Education(){

 const data=[
    {
        title:"Masters of Science in Computer Science",
        company:"FAST - National University",
        time:"( 2019 - 2021 )",
        desc:"Gained in-depth knowledge in advanced computing topics, including artificial intelligence, data science, and software architecture. This program strengthened my skills in research and problem-solving, preparing me to tackle complex challenges in software development and innovation."
    },
    {
        title:"Bachelor of Science in Computer Science",
        company:"Arid Agriculture University",
        time:"( 2014 - 2018 )",
        desc:"Developed a strong foundation in software engineering, algorithms, and systems design, with a focus on real-world applications and problem-solving in both web and mobile development."
    },
 ]
    return(
        <>
        <main className="p-10 flex flex-col-reverse lg:flex-row-reverse gap-10">
            <Image className="lg:w-1/2 rounded-xl  mx-auto md:w-[700px]" src={Images.work} priority alt=""/>
            <section className="lg:w-1/2">
            <h4 className="text-[#80db66]  text-lg tracking-widest uppercase font-medium mt-5">Education</h4>
            <h2 className="text-3xl  font-semibold sm:text-[50px] lg:text-[70px] my-10">My Education</h2>
            <p className="text-[#4D4C5C] lg:text-xl my-5">Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem.</p>
            <section className="my-5">
                {
                    data.map((item,index)=>(
                     <>
                     <div key={index} className="flex items-start gap-5 my-10">
                        <div className=" bg-[#80db66] p-4 rounded-lg text-white hover:bg-white hover:text-[#80db66] hover:border-[1px] hover:border-[#80db66] cursor-pointer ">
                        <MdOutlineWorkHistory className="text-4xl" />
                        </div>
                        <div>
                         <h2 className=" text-3xl font-semibold">{item.title}</h2>
                         <span className="flex items-center gap-2 my-2">
                            <h4 className=" text-base font-semibold">{item.company}</h4>
                            <p>{item.time}</p>
                         </span>
                         <p>{item.desc}</p>
                        </div>
                     </div>
                     </>
                    ))
                }
            </section>
            </section>
        </main>
        </>
    )
}