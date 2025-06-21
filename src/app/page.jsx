"use client";


import DownloadAppSection from "@/components/DownloadApp";
import Earning from "@/components/Earning";
import FAQPage from "@/components/FaqsPage";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <DownloadAppSection />
      <FAQPage />
      <Earning />
      <Footer />
    </>
  );
}
