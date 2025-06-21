"use client";

import { useState } from "react";
import { Apple, Windows, Linux, Download } from "lucide-react";

export default function DownloadAppSection() {
  const [activeTab, setActiveTab] = useState("Lite");

  const images = {
    Desktop:
      "https://media.istockphoto.com/id/1468636958/photo/seen-from-behind-business-woman-analysing-stock-market.jpg?s=1024x1024&w=is&k=20&c=q6CNKwgQXGPPeIo6-Db-1MsYeXtf7sqc6FnCwUVKRt4=",
    Lite: "https://media.istockphoto.com/id/1308299146/photo/unrecognizable-businesswoman-looking-at-stock-charts-on-her-mobile-phone.jpg?s=1024x1024&w=is&k=20&c=Fd5tWBESZTqqG_aFOpsngPuNt8bkv2LFsfn2mF8CtQg=",
    Pro: "https://media.istockphoto.com/id/1148413471/photo/young-woman-working-at-night-modern-office-loft-red-and-green-candlestick-chart-and-stock.jpg?s=1024x1024&w=is&k=20&c=LQedyT0-Jh8kRqK2ELB1HeoIlt-fJIkHRe58A46CuPE=",
  };

  return (
    <section className="bg-[#181A20] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Phone Image */}
        <div className="w-full  lg:w-1/2  ">
          <img
            src={images[activeTab]}
            alt={`${activeTab} Screenshot`}
            className="w-[300px] h-[600px] rounded-lg object-cover"
          />

          <div className="flex gap-20 pt-8 text-sm">
            {["Desktop", "Lite", "Pro"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 border-b-2 ${
                  activeTab === tab
                    ? "border-yellow-400 text-white"
                    : "border-transparent text-gray-400"
                } hover:text-white transition`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
          <h2 className="text-5xl font-bold leading-snug">
            Trade on the go. Anywhere, anytime.
          </h2>

          <div className="flex flex-row items-center justify-center gap-4">
            <img
              src="https://img.freepik.com/premium-vector/vector-qr-code-example-smartphone-scan_535345-3786.jpg?semt=ais_hybrid&w=740"
              alt="QR Code"
              className="rounded-lg h-[200px] w-[200px] object-contain"
            />
            <div className="flex flex-col gap-1">
              <p className="text-gray-400 text-md">Scan to Download App</p>
              <p className="font-semibold text-base">iOS and Android</p>
            </div>
          </div>

<div className="flex justify-evenly items-center pt-4 w-full max-w-md mx-auto">
  <div className="flex flex-col items-center gap-2">
    <Apple size={32} />
    <p className="text-base font-medium">MacOS</p>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Apple size={32} />
    <p className="text-base font-medium">Windows</p>
  </div>
  <div className="flex flex-col items-center gap-2">
    <Apple size={32} />
    <p className="text-base font-medium">Linux</p>
  </div>
</div>


          {/* Tabs */}

          {/* More Download Options */}
          <div className="flex items-center gap-2 pt-6 text-sm text-white hover:text-white cursor-pointer">
            <Download size={20} />
            <span className="text-lg font-bold">More Download Options</span>
          </div>
        </div>
      </div>
    </section>
  );
}
