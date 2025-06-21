"use client"

import { useEffect, useState } from "react";
import io from "socket.io-client";
import HeroComponent from "./HeroComponent";

let socket;

export default function HeroSection() {
  const [heroNumber, setHeroNumber] = useState("0");

  useEffect(() => {
    socket = io();

    socket.on("heroNumber", (number) => {
      const formatted = new Intl.NumberFormat("en-US").format(number);
      setHeroNumber(formatted);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <section className=" flex mt-20 bg-[#181A20]  w-full items-center justify-center">

      <HeroComponent heroNumber={heroNumber} />
    
    </section>
  );
}
