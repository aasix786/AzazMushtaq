import { Images } from "@/utills/Images";
import Image from "next/image";
import { MdOutlineWorkHistory } from "react-icons/md";


export default async function Experience(){

 const data=[
    {
        title:"Core PHP Developer",
        company:"TRzameen.com",
        time:"( 2016 - 2017 )",
        desc:"Developed robust back-end systems and optimized core functionalities, enhancing the user experience through clean, efficient, and maintainable code."
       
    },
    {
        title:"Full Stack React Native & Backend Developer",
        company:"Truckload",
        time:"( 2017 - 2018 )",
        desc:"Built full-stack solutions using React Native and Laravel, delivering scalable applications that streamline operations and provide exceptional user experiences."
       
    },
    {
        title:"React Native Developer",
        company:"Synx",
        time:"( 2018 - 2019 )",
        desc:"Collaborated on cross-platform mobile apps with an emphasis on performance, user-friendly interfaces, and consistency across iOS and Android platforms"
       
    },
    {
        title:"Product Manager and Full Stack Developer",
        company:"Onism Solutions",
        time:"( 2019 - Present )",
        desc:"Overseeing product development and leading a dynamic team, I contribute to full-stack projects that prioritize user engagement and seamless functionality across platforms."
    }
 ]
    return(
        <>
        <main className="p-10 flex flex-col-reverse lg:flex-row gap-10">
            <Image className="lg:w-1/2 rounded-xl  mx-auto md:w-[700px]" priority src={Images.work} alt=""/>
            <section className="lg:w-1/2">
            <h4 className="text-[#80db66]  text-lg tracking-widest uppercase font-medium mt-5">Work Experience
            </h4>
            <h2 className="text-3xl  font-semibold sm:text-[50px] lg:text-[70px] my-10">My Experience</h2>
            <p className="text-[#4D4C5C] lg:text-xl my-5">Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye khbor nio na sit voluptatem.</p>
            <section className="my-5">
                {
                    data.reverse().map((item,index)=>(
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