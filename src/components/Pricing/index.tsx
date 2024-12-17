
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";



export default async function Pricing(){
    return(
        <>
        <main id="pricing" className="p-10 ">
        <h4 className="text-[#80db66]  text-lg tracking-widest uppercase font-medium mt-5 text-center">Let’s Start Working</h4>
        <h1 className="text-3xl  font-semibold sm:text-[50px] lg:text-[70px] my-10  text-center">Pricing Plans</h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-10  ">
            <div className="bg-white shadow-xl p-5 md:p-10  rounded-xl hover:-translate-y-5  transition-all duration-300">
                <h1 className=" border-b-[1px] border-black pb-5 text-2xl text-black font-semibold w-full">Hourly</h1>
                <span className="flex items-center gap-3 ">
                <h1 className=" text-[60px] text-[#80db66] font-bold ">$99</h1>
                <p className="mt-5 text-xl">/ Per Hour</p>
                </span>
                <ul>
                    <li className="text-lg flex items-center gap-3 my-2"><FcCheckmark />   One time contract     </li>
                    <li className="text-lg flex items-center gap-3 my-2"><FcCheckmark />   Flexible Contract    </li>
                    <li className="text-lg flex items-center gap-3 my-2"><FcCheckmark />   Source Files</li>
                    <li className="text-lg flex items-center gap-3 my-2"><RxCross2 className="text-[#4D4C5C]" />  Support   </li>
                    <li className="text-lg flex items-center gap-3 my-2"><RxCross2 className="text-[#4D4C5C]" />  Support   </li>
 </ul>

 <button className="p-2 px-8 tracking-widest my-3 bg-[#80db66] text-white rounded-lg font-semibold cursor-pointer">
    Start Now
 </button>
                
             
            </div>

            <div className="bg-white shadow-xl p-5 md:p-10  rounded-xl hover:-translate-y-5  transition-all duration-300">
                <h1 className=" border-b-[1px] border-black pb-5 text-2xl text-black font-semibold w-full">Hourly</h1>
                <span className="flex items-center gap-3 ">
                <h1 className=" text-[60px] text-[#80db66] font-bold ">$99</h1>
                <p className="mt-5 text-xl">/ Per Hour</p>
                </span>
                <ul>
                    <li className="text-lg flex items-center gap-3 my-2"><FcCheckmark />   One time contract     </li>
                    <li className="text-lg flex items-center gap-3 my-2"><FcCheckmark />   Flexible Contract    </li>
                    <li className="text-lg flex items-center gap-3 my-2"><FcCheckmark />   Source Files</li>
                    <li className="text-lg flex items-center gap-3 my-2"><RxCross2 className="text-[#4D4C5C]" />  Support   </li>
                    <li className="text-lg flex items-center gap-3 my-2"><RxCross2 className="text-[#4D4C5C]" />  Support   </li>
 </ul>

 <button className="p-2 px-8 tracking-widest my-3 bg-[#80db66] text-white rounded-lg font-semibold cursor-pointer">
    Start Now
 </button>
                
             
            </div>

            <div className="bg-white shadow-xl p-5 md:p-10  rounded-xl hover:-translate-y-5  transition-all duration-300">
                <h1 className=" border-b-[1px] border-black pb-5 text-2xl text-black font-semibold w-full">Hourly</h1>
                <span className="flex items-center gap-3 ">
                <h1 className=" text-[60px] text-[#80db66] font-bold ">$99</h1>
                <p className="mt-5 text-xl">/ Per Hour</p>
                </span>
                <ul>
                    <li className="text-lg flex items-center gap-3 my-2"><FcCheckmark />   One time contract     </li>
                    <li className="text-lg flex items-center gap-3 my-2"><FcCheckmark />   Flexible Contract    </li>
                    <li className="text-lg flex items-center gap-3 my-2"><FcCheckmark />   Source Files</li>
                    <li className="text-lg flex items-center gap-3 my-2"><RxCross2 className="text-[#4D4C5C]" />  Support   </li>
                    <li className="text-lg flex items-center gap-3 my-2"><RxCross2 className="text-[#4D4C5C]" />  Support   </li>
 </ul>

 <button className="p-2 px-8 tracking-widest my-3 bg-[#80db66] text-white rounded-lg font-semibold cursor-pointer">
    Start Now
 </button>
                
             
            </div>

            
          
         
        </section>
        </main>
        </>
    )
}