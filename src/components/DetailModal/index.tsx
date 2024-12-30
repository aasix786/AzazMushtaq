import React from "react";
import Image, { StaticImageData } from "next/image";
import { RxCross2 } from "react-icons/rx";



interface ProjectDetail {
  img: string | StaticImageData; 
  imgMob?:  string | StaticImageData;
  heading: string; 
  desc: string; 
  type: string; 
  client: string;
  duration: string; 
  task: string; 
  link:string;
  Budget: string; 
  tags: string[]; 
  alt?:string | undefined
}


interface DetailModalProps {
  details: ProjectDetail | null; 
  onClose: () => void; 
}

const DetailModal: React.FC<DetailModalProps> = ({ details, onClose }) => {
  if (!details) return null;

  return (
    <div className="fixed inset-0  z-[9999] flex items-center justify-center bg-black bg-opacity-50 overflow-x-hidden overflow-y-auto  ">
      <div className="bg-white absolute top-10  p-10    rounded-lg shadow-lg w-11/12">
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#E2ECFC] p-2 rounded-full text-lg text-[#80db66] hover:bg-[#80db66] hover:text-white"
          >
            <RxCross2 className="text-3xl" />
          </button>
        </div>
        <div className="relative hidden md:!block w-full h-[500px] my-4 ">
          <Image
            src={details.img}
            alt={details.alt || details.heading}
            className="   shadow-2xl rounded-xl w-full h-full "
            priority
          />
        </div>
       
        {
          details.imgMob &&   <Image
          src={details?.imgMob}
          alt={details.alt || details.heading}
          className=" md:hidden  my-5 w-full   shadow-2xl rounded-xl  "
          
        />
        }
        
        <section  className="lg:!flex items-start gap-20 lg:my-20">
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold my-5 lg:mt-0">
              {details.heading}
            </h2>

            <p className="my-5">{details.desc}</p>
          </div>
          <div className="bg-[#E2ECFC] leading-loose p-5 rounded-xl lg:w-1/2">
            <p>
              <strong>Type:</strong> {details.type}
            </p>
            <p>
              <strong>Client:</strong> {details.client}
            </p>
            <p>
              <strong>Duration:</strong> {details.duration}
            </p>
            <p>
              <strong>Task:</strong> {details.task}
            </p>
            <p>
              <strong>Budget:</strong> {details.Budget}
            </p>
           <a href={details.link} target="_blank">
           <button className="p-2 px-4 bg-[#80db66] text-white uppercase rounded-lg my-5">
              View Live
            </button>
           </a>
          </div>
        </section>
        <div className="my-5">
          <strong>Tags:</strong> {details.tags.join(", ")}
        </div>
      </div>
    </div>
  );
};

export default DetailModal;
