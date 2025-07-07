"use client";

import React, { useRef } from "react";
import CountUp from "react-countup";
import { FaBitcoin, FaEthereum, FaGoogle, FaApple } from "react-icons/fa";
import { SiBinance, SiRipple, SiSolana } from "react-icons/si";
import { QrCode } from "lucide-react";

export default function HeroComponent({ heroNumber, coins }) {
  const countUpRef = useRef(null);

  const getIcon = (name) => {
    const icons = {
      BTC: <FaBitcoin className="text-yellow-500" />,
      ETH: <FaEthereum className="text-purple-400" />,
      BNB: <SiBinance className="text-yellow-300" />,
      XRP: <SiRipple className="text-blue-400" />,
      SOL: <SiSolana className="text-green-400" />,
    };
    return icons[name] || <span className="text-white">🪙</span>;
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between w-[80%]">
      {/* LEFT SECTION */}
      <div className="w-[50%] flex flex-col justify-between p-4">
        <div className="topone">
          <h2 className="text-yellow-400 text-[84px] font-extrabold">
            <CountUp start={0} end={heroNumber} duration={2.75} separator=",">
              {({ countUpRef }) => <span ref={countUpRef} />}
            </CountUp>
          </h2>
          <h2 className="text-[84px] font-bold m-0">USERS</h2>
          <h2 className="text-[84px] font-bold m-0">TRUST US</h2>

          <div className="flex mt-6 max-w-md">
            <input
              type="text"
              placeholder="Email/Phone number"
              className="flex-1 px-4 py-3 rounded-l bg-[#1E2329] text-white outline-none border border-[#2B3139]"
            />
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-r font-bold hover:bg-yellow-300">
              Sign Up
            </button>
          </div>
        </div>

        {/* Auth & QR Section */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center gap-6 text-sm text-gray-400">
          <div className="flex flex-col items-start">
            <p className="mb-3 text-base text-gray-300 font-semibold">
              Or Continue With
            </p>
            <div className="flex gap-4">
              <button className="bg-[#1E2329] p-3 rounded hover:bg-gray-800 border border-[#2B3139] text-white">
                <FaGoogle className="w-7 h-7" />
              </button>
              <button className="bg-[#1E2329] p-3 rounded hover:bg-gray-800 border border-[#2B3139] text-white">
                <FaApple className="w-7 h-7 text-black" />
              </button>
            </div>
          </div>

          <div className="flex flex-col items-start">
            <p className="mb-3 text-base text-gray-300 font-semibold">
              Download App
            </p>
            <button className="p-3 rounded border border-[#2B3139] hover:bg-gray-800 bg-transparent text-white">
              <QrCode className="w-7 h-7 text-green-400" />
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-[50%] justify-items-end space-y-7">
        {/* Coins Box */}
        <div className="bg-[#1E2329] rounded-xl p-5 w-[80%]">
          <div className="flex justify-between items-center mb-3 p-5">
            <div className="flex gap-4 text-sm font-medium">
              <span className="text-white text-lg border-b-2 border-yellow-400 pb-1">
                Popular
              </span>
              <span className="text-white text-lg opacity-50 pb-1">
                New Listing
              </span>
            </div>
            <span className="text-gray-400 text-sm">View All 350+ Coins ›</span>
          </div>

          {coins.length > 0 ? (
            coins.map((coin, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 text-sm"
              >
                <div className="flex items-center gap-2 min-w-[160px]">
                  <span className="text-xl">{getIcon(coin.name)}</span>
                  <span className="text-xl">{coin.name}</span>
                  <span className="text-lg opacity-50">{coin.sidename}</span>
                </div>

                <div className="flex items-center justify-end w-[120px]">
                  <span className="text-xl text-white text-right">
                    ${coin.price}
                  </span>
                </div>

                <div className="flex items-center justify-end w-[80px]">
                  <span
                    className={`${
                      coin.change?.includes("-")
                        ? "text-red-500"
                        : "text-green-500"
                    } text-right`}
                  >
                    {coin.change}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="text-white text-sm p-4">Loading coins...</div>
          )}
        </div>

        {/* News Box */}
        <div className="bg-[#1E2329] rounded-xl p-4 w-[80%]">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-white font-semibold text-xl">News</h3>
            <span className="text-gray-400 text-sm">View All News ›</span>
          </div>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="mt-6 text-lg font-medium">
              U.S. Ethereum Spot ETF Experiences Significant Outflow
            </li>
            <li className="mt-6 text-lg font-medium">
              xAI Corp. Offers Improved Pricing for $5 Billion Debt Issuance
            </li>
            <li className="mt-6 text-lg font-medium">
              Yuan Coin Technology Explores Stablecoin Opportunities in Hong
              Kong
            </li>
            <li className="mt-6 text-lg font-medium">
              Crypto Fear and Greed Index Returns to Neutral
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
