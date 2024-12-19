"use client"
import { useState } from "react";
import { Images } from "@/utills/Images";
import Image from "next/image";
import DetailModal from "../DetailModal";
import { StaticImageData } from "next/image";

interface ProjectDetail {
    img: string | StaticImageData; 
    imgMob?:string | StaticImageData;
    heading: string; 
    desc: string;
    type: string; 
    client: string; 
    duration: string; 
    task: string; 
    Budget: string; 
    link:string;
    tags: string[]; 
}

interface Project {
    type: string; 
    title: string; 
    img: string | StaticImageData;
    detail: ProjectDetail[]; 
}

export default function Portfolio() {
    const projects: Project[] = [ // Specify the type of projects
        {
            type: "Web Development",
            title: "Full Stack Development in a team for Clicky - E-commerce Store",
            img: Images.clickyWeb,
            detail: [
                {
                    img: Images.clickyWeb,
                    imgMob:Images.clickyMob,
                    heading: "Clicky.pk",
                    desc: "Clicky.pk is an online shopping platform offering a wide range of fashion and lifestyle products for men, women, and kids. It features a diverse selection of clothing, footwear, accessories, and beauty products from top local and international brands. Clicky.pk aims to provide customers with a seamless shopping experience, offering high-quality products at competitive prices, along with fast shipping and easy returns. The website is user-friendly, with categories and filters for easy navigation, and often hosts sales and promotions, making it a go-to destination for fashion-forward shoppers in Pakistan.",
                    type: "Web Design",
                    client: "Juwel Khan",
                    duration: "2 weeks",
                    task: "UI/UX Frontend",
                    Budget: "$2000",
                    link:"https://www.clicky.pk/",
                    tags: ["Web Design", "Social Media"]
                }
            ]
        },
        {
            type: "Mobile Application",
            title: "Cross Platform React Native Development for Interioraty ",
            img: Images.mealWeb,
            detail: [
                {
                    img: Images.mealWeb,
                    heading: "ABC Corp Website",
                    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                    type: "Development",
                    client: "ABC Corp",
                    duration: "1 month",
                    link:"https://www.clicky.pk/",
                    task: "Full Stack Development",
                    Budget: "$5000",
                    tags: ["Development", "E-commerce"]
                }
            ]
        },
        {
            type: "Full Stack Development",
            title: "Website Development for ABC Corporation",
            img: Images.jolibeeWeb,
            detail: [
                {
                    img: Images.jolibeeWeb,
                    imgMob:Images.clickyMob,
                    heading: "ABC Corp Website",
                    desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
                    type: "Development",
                    client: "ABC Corp",
                    duration: "1 month",
                    link:"https://www.clicky.pk/",
                    task: "Full Stack Development",
                    Budget: "$5000",
                    tags: ["Development", "E-commerce"]
                }
            ]
        },
        {
            type: "Product Development",
            title: "Mobile & Web Application development for SetMore",
            img: Images.jolibeeWeb,
            detail: [
                {
                    img: Images.jolibeeWeb,
                    imgMob:Images.clickyMob,
                    heading: "Setmore",
                    desc: "Setmore is an online appointment scheduling platform designed for businesses and professionals to streamline bookings and manage client appointments. It offers an intuitive interface with features like calendar integration, automated reminders, and payment processing. Users can create customizable booking pages, enabling clients to book services 24/7. The platform supports team scheduling, making it ideal for businesses of all sizes. Additionally, Setmore integrates with popular apps like Zoom, Google Calendar, and Facebook, enhancing productivity and connectivity.",
                    type: "Development",
                    client: "ABC Corp",
                    duration: "1 month",
                    link:"https://www.setmore.com/",
                    task: "Product Development",
                    Budget: "$5000",
                    tags: ["Appointment Scheduling", "Business Productivity Tool"]
                }
            ]
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedDetail, setSelectedDetail] = useState<ProjectDetail | null>(null); 

    const handleOpenModal = (detail: ProjectDetail) => { 
        setSelectedDetail(detail);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedDetail(null);
    };

    return (
        <>
            <main id="work" className="p-10 ">
                <h4 className="text-[#80db66] text-center text-lg tracking-widest uppercase font-medium mt-5">Portfolio</h4>
                <h1 className="text-3xl text-center font-semibold sm:text-[50px] md:text-[70px] my-10">My Recent Works</h1>
                {
                    projects.map((item, index) => (
                        <section key={index} className="py-10 border-t-[1px] border-b-[1px] flex flex-col xl:flex-row group justify-between">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-20">
                                <p className="text-lg font-medium  lg:w-[180px]">{item.type}</p>
                                <h1 className="text-2xl text-center sm:text-left lg:text-[35px] font-bold max-w-[600px] !leading-[70px]">{item.title}</h1>
                            </div>
                            <div className="flex items-center justify-between sm:gap-20 lg:gap-10">
                                <Image
                                    className="w-48 shadow-lg rounded-lg transition-transform duration-500 ease-in-out"
                                    src={item.img}
                                    alt=""
                                />
                                <span 
                                    className="h-20 w-20 border-[1px] rounded-full relative group-hover:bg-[#80db66] cursor-pointer"
                                    onClick={() => handleOpenModal(item.detail[0])} 
                                >
                                    <p className="absolute left-7 top-4 text-4xl text-[#80db66] group-hover:text-white">+</p>
                                </span>
                            </div>
                        </section>
                    ))
                }
                {isModalOpen && <DetailModal details={selectedDetail} onClose={handleCloseModal} />}
            </main>
        </>
    );
}
