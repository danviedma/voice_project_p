"use client";
import CarouselJob from "../components/CarouselJob";
import NavBar from "../components/NavBar";
import Testimonials from "../components/Testimonials";
import MainDown from "../components/MainDown";
import Footer from "../components/Footer";

export default function MyJobPage() {
  return (
    <main>
      <NavBar />
      <CarouselJob />
      <Testimonials />
      <MainDown />  
      <Footer />
    </main>
  );
}