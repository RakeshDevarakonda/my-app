"use client";

import { useState } from "react";
import { FaApple, FaWindows, FaLinux } from "react-icons/fa";
import { Download } from "lucide-react";

export default function DownloadAppSection() {
  const [activeTab, setActiveTab] = useState("Lite");

  const images = {
    Desktop: "/download-desktop-dark-en.png",
    Lite: "/download-lite-dark-en.svg",
    Pro: "/download-pro-dark-en.svg",
  };

  return (
    <section className="bg-[#181A20] text-white px-6 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left - Phone Image + Tabs */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <img
            src={images[activeTab]}
            alt={`${activeTab} Screenshot`}
            className="w-[320px] h-[580px] rounded-xl object-cover shadow-lg"
          />

          {/* Tabs */}
          <div className="flex gap-12 pt-8 text-lg font-medium">
            {["Desktop", "Lite", "Pro"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 border-b-2 ${
                  activeTab === tab
                    ? "border-yellow-400 text-white"
                    : "border-transparent text-gray-400"
                } hover:text-white transition duration-200`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10 items-center lg:items-start text-center lg:text-left">
          {/* Header Text */}
          <h2 className="text-3xl lg:text-4xl font-bold leading-snug max-w-xl break-words">
            Trade on the go. Anywhere, anytime.
          </h2>

          {/* QR Side-by-side with text */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="p-4 border border-white rounded-xl bg-transparent">
              <img
                src="https://img.freepik.com/premium-vector/vector-qr-code-example-smartphone-scan_535345-3786.jpg?semt=ais_hybrid&w=740"
                alt="QR Code"
                className="rounded-md h-[180px] w-full object-contain"
              />
            </div>
            <div className="text-left">
              <p className="text-white text-xl font-bold mb-1">
                Scan to Download App
              </p>
              <p className="text-white text-base">iOS & Android</p>
            </div>
          </div>

          {/* OS Icons */}
          <div className="flex justify-between items-center pt-10 w-full max-w-md gap-10">
            <div className="flex flex-col items-center gap-2">
              <FaApple className="w-9 h-9 text-white" />
              <p className="text-lg font-semibold text-white">macOS</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaWindows className="w-9 h-9 text-white" />
              <p className="text-lg font-semibold text-white">Windows</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <FaLinux className="w-9 h-9 text-white" />
              <p className="text-lg font-semibold text-white">Linux</p>
            </div>
          </div>

          {/* Download More Options */}
          <div className="flex items-center gap-2 pt-8 text-white hover:text-yellow-400 transition cursor-pointer">
            <Download size={22} />
            <span className="text-lg font-semibold">More Download Options</span>
          </div>
        </div>
      </div>
    </section>
  );
}
