"use client";

import Image from "next/image";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import MainCenter from "./components/MainCenter";
import Footer from "./components/Footer";
import MainDown from "./components/MainDown";



export default function Home() {
  return (
    <main>
      
      {/* <Banner/> */}
      <NavBar />
      <Carousel />
      <MainCenter />
      <MainDown />  
      <Footer />
    </main>
  );
}
