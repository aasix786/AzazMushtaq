import { Images } from "@/utills/Images";
import Slider from "./Slider";
import Image from "next/image";

export default async function Reviews(){
    return(
        <>
        <main className="bg-[#E2ECF6] p-10 flex flex-col lg:flex-row gap-10">
         <Slider/>
         <Image className="lg:w-1/2 rounded-xl  mx-auto md:w-[700px]" src={Images.work} alt=""/>
        </main>
        </>
    )
}