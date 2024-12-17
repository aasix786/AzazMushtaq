import About from "@/components/About";
import Animation from "@/components/About/Animation";
import Awards from "@/components/Awards";
import CardSection from "@/components/CardSection";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Skill from "@/components/Skill";
import Stats from "@/components/Stats";


export default async function Home() {
  return (
    <>
    <Hero/>
    <CardSection/>
    <About/>
    <Portfolio/>
    <Stats/>
    <Awards/>
    <Experience/>
    <Education/>
    <Animation/>
    <Skill/>
    <Offer/>
    <Pricing/>
    <Reviews/>
    <Contact/>
    </>
  );
}
