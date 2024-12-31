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
    alt?:string | undefined
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
                    tags: ["Web Design", "Social Media"],
                    alt:"React Native Mobile App for Soil Testing"
                }
            ]
        },
        {
            type: "Mobile Application",
            title: "Cross Platform React Native Development for Interioraty ",
            img: Images.interiorApp,
            detail: [
                {
                    img: Images.interiorApp,
                    heading: "Home AI - AI Interior Design",
                    desc: "The Interior Home Design AI app is your ultimate companion for transforming your living spaces with ease. Powered by advanced AI technology, the app helps you visualize and create stunning interior designs tailored to your preferences. Upload photos of your space and get personalized design suggestions, from furniture placement to color palettes. Explore a variety of styles, experiment with layouts, and see real-time previews using augmented reality. Whether you're redecorating, remodeling, or planning a new design, this app simplifies the process, making professional-grade interior design accessible to everyone.",
                    type: "Development",
                    client: "ABC Corp",
                    duration: "1 month",
                    link:"https://play.google.com/store/apps/details?id=interior.home.design.ai&hl=en",
                    task: "Full Stack Development",
                    Budget: "$5000",
                    tags: ["Interior Design", "Room Makeover" , "AI Home Design"],
                    alt:"Responsive WordPress Landing Page Design"
                }
            ]
        },
        {
            type: "Full Stack Development",
            title: "Backend and frontend development for AI powered Tattoo Idea generation website",
            img: Images.inkWeb,
            detail: [
                {
                    img: Images.inkWeb,
                    imgMob:Images.inkMob,
                    heading: "ABC Corp Website",
                    desc: "InkGenius is an AI-powered platform that creates original tattoo designs tailored to your ideas and preferences. INK GENIUS By selecting a tattoo style and inputting your concept, the AI generates a unique design for you. This service aims to streamline the tattoo design process, making it quicker and more personalized. It caters to tattoo enthusiasts, first-timers, and artists seeking inspiration. The platform offers various styles to choose from, ensuring your tattoo is one-of-a-kind. Additionally, InkGenius provides resources like a tattoo cost calculator and a temporary tattoo guide to assist users in their tattoo journey. The platform is designed to make the tattoo experience seamless and enjoyable from start to finish.",
                    type: "Development",
                    client: "ABC Corp",
                    duration: "1 month",
                    link:"https://www.clicky.pk/",
                    task: "Full Stack Development",
                    Budget: "$5000",
                    tags: ["AITattooDesign", "CustomTattoos" , "InkGenius"]
                }
            ]
        },
        {
            type: "Product Development",
            title: "Mobile and Web Application development for SetMore",
            img: Images.setMore,
            detail: [
                {
                    img: Images.setMore,
                    imgMob:Images.setMoreMob,
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
                <h2 className="text-3xl text-center font-semibold sm:text-[50px] md:text-[70px] my-10">My Recent Works</h2>
                {
                    projects.map((item, index) => (
                        <section key={index} className="py-10 border-t-[1px] border-b-[1px] flex flex-col xl:flex-row group justify-between">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-20">
                                <p className="text-lg font-medium  lg:w-[180px]">{item.type}</p>
                                <h2 className="text-2xl text-center sm:text-left lg:text-[35px] font-bold max-w-[600px] !leading-[70px]">{item.title}</h2>
                            </div>
                            <div className="flex items-center justify-between sm:gap-20 lg:gap-10">
                                <Image
                                    className="w-48 shadow-lg rounded-lg transition-transform duration-500 ease-in-out"
                                    src={item.img}
                                    alt=""
                                    priority
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
