import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Azaz Mushtaq - Senior Full Stack & React Native Developer | NodeJS & Laravel Expert",
  description: "Explore Azaz Mushtaq's portfolio in React Native, ReactJS, NodeJS, WordPress, social media marketing, and design. Connect for quality, tailored solutions.",
  keywords:["Azaz Mushtaq portfolio" , "Senior frontend developer" , "React Native developer" , "Mobile App Developer" , "Backend Developer" , "NodeJS Developer" , "Laravel Developer" , "Social media marketing expert" , "Creative UI/UX designer" , "Freelance developer" , "Full-stack developer"],
  openGraph:{
    url:"https://aasix786.github.io/AzazMushtaq/",
    title:"Azaz Mushtaq - Senior Full Stack Developer | React Native Developer | NodeJS, Laravel Developer, & Social Media Expert",
    description:"Explore Azaz Mushtaq's portfolio showcasing expertise in web development, mobile application development, social media marketing, and creative design.",
    images:"https://aasix786.github.io/AzazMushtaq/assets/profile.jpg",
    type:"website"
  },
  twitter:{
    card:"summary_large_image",
    title:"Azaz Mushtaq - Senior Full Stack Developer | React Native Developer | NodeJS, Laravel Developer, & Social Media Expert",
    description:"Explore Azaz Mushtaq's portfolio showcasing expertise in web development, mobile application development, social media marketing, and creative design",
    images:"https://aasix786.github.io/AzazMushtaq/assets/profile.jpg"
  },
  manifest:"/site.webmanifest",
  icons:[
    {
       url:"https://aasix786.github.io/AzazMushtaq/assets/favicon.png",
       type:"image/png"
    },
    {
      url:"/favicon-32x32.png",
      sizes:"32x32",
    },
    {
      url:"/favicon-16x16.png",
      sizes:"16x16",
    },
    {
      rel:"apple-touch-icon",
      url:"/apple-touch-icon.png",
      sizes:"180x180"
    },
  ]

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-642559554"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-642559554');
        `}
      </Script>
    </head>
    <body>
      <Navbar />
      {children}
    </body>
  </html>
  );
}
