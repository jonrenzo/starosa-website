import Image from "next/image";
import {NavBar} from "./NavBar";
import Announcement from "@/components/Announcement";
import HeroSection from "./HeroSection";

export default function Home() {
  return (
    <>
    <Announcement>
      <p className="text-center font-medium">
        Open Hours of Sta Rosa City Hall: &nbsp;
        <a href="#" className="inline-block underline"> Mon-Fri &nbsp; </a>
        <a href="#" className="inline-block underline"> 8:00 AM - 5:00 PM </a>
      </p>
    </Announcement>
    <NavBar />
    <HeroSection />

    </>
  );
}
