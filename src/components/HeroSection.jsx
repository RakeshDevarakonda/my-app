"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";
import HeroComponent from "./HeroComponent";

export default function HeroSection() {
  const [heroNumber, setHeroNumber] = useState("0");
  const [coins, setCoins] = useState([]); 

  useEffect(() => {
    const socket = io();

    socket.on("connect", () => {
      console.log("✅ Connected to server");
    });

   
    socket.on("heroNumber", (number) => {
      const formatted = number;
      setHeroNumber(formatted);
    });


    socket.on("coinUpdate", (updatedCoins) => {
      console.log("📡 Coin update received:", updatedCoins);
      setCoins(updatedCoins);
      console.log(updatedCoins)
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <section className="flex mt-20 bg-[#181A20] w-full items-center justify-center">
      <HeroComponent heroNumber={heroNumber} coins={coins} />
    </section>
  );
}
