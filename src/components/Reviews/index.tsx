import { Images } from "@/utills/Images";
import Slider from "./Slider";
import Image from "next/image";

export default async function Reviews(){
    return(
        <>
        <main className="bg-[#E2ECF6] p-10 flex flex-col gap-10 lg:flex-row overflow-x-hidden">
         <div className="lg:w-1/2">
         <Slider/>
         </div>
         <div className="lg:w-1/2">
         <Image className=" rounded-xl " src={Images.work} alt="Review Image"/>
         </div>
        </main>
        </>
    )
}