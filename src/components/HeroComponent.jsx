

import React from 'react'
import { CircleUserRound, Apple, QrCode } from "lucide-react";

export default function HeroComponent({heroNumber}) {
  return (
   <div className="flex flex-col lg:flex-row  justify-between w-[80%] ">
        <div className="  w-[50%] flex flex-col justify-between p-4">
          <div className="topone">
            <h2 className="text-yellow-400 text-[84px] font-extrabold">
              {heroNumber}
            </h2>
            <h2 className="text-[84px] font-bold m-0 p-0">USERS</h2>
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

          <div className="mt-6 flex flex-col md:flex-row md:items-center gap-6 text-sm text-gray-400">
            <div>
              <p className="mb-2 text-sm text-gray-300">Or Continue With</p>
              <div className="flex gap-3">
                <button className="bg-[#1E2329] p-2 rounded hover:bg-gray-800 transition">
                  <CircleUserRound className="w-6 h-6" />
                </button>
                <button className="bg-[#1E2329] p-2 rounded hover:bg-gray-800 transition">
                  <Apple className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div>
              <p className="mb-2">Download App</p>
              <button className="bg-[#1E2329] p-2 rounded">
                <QrCode className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-[50%] justify-items-end    space-y-7">
          <div className="bg-[#1E2329] rounded-xl p-5 w-[80%]">
            <div className="flex justify-between items-center mb-3 p-5">
              <div className="flex gap-4 text-sm font-medium">
                <span className="text-white text-lg border-b-2 border-yellow-400 pb-1">
                  Popular
                </span>
                <span className="text-white text-lg  opacity-50 pb-1">
                  New Listing
                </span>
              </div>
              <span className="text-gray-400 text-sm">
                View All 350+ Coins ›
              </span>
            </div>

            {[
              {
                icon: "₿",
                name: "BTC ",
                sidename: "Bitcoin",
                price: "$103,754.00",
                change: "-2.15%",
              },
              {
                icon: "Ξ",
                name: "ETH ",
                sidename: "Ethereum",
                price: "$2,436.67",
                change: "-4.54%",
              },
              {
                icon: "Ⓑ",
                name: "BNB ",
                price: "$641.17",
                sidename: "BNB",
                change: "-1.02%",
              },
              { icon: "✕", name: "XRP XRP", price: "$2.14", change: "-1.39%" },
              {
                icon: "◎",
                name: "SOL ",
                sidename: "Solana",
                price: "$142.19",
                change: "-4.20%",
              },
            ].map((coin, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-2 text-sm"
              >
                <div className="flex items-center gap-2">
                  {/* <span className="text-xl">{coin.icon}</span> */}
                  <span className="text-xl">{coin.name}</span>
                  <span className="text-lg opacity-50 ">{coin.sidename}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl">{coin.price}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-red-500">{coin.change}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#1E2329] rounded-xl p-4 w-[80%]">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-white font-semibold text-xl">News</h3>
              <span className="text-gray-400 text-sm">View All News ›</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="mt-6  text-lg font-medium">
                U.S. Ethereum Spot ETF Experiences Significant Outflow
              </li>
              <li className="mt-6  text-lg font-medium">
                xAI Corp. Offers Improved Pricing for $5 Billion Debt Issuance
              </li>
              <li className="mt-6  text-lg font-medium">
                Yuan Coin Technology Explores Stablecoin Opportunities in Hong
                Kong
              </li>
              <li className="mt-6  text-lg font-medium">
                Crypto Fear and Greed Index Returns to Neutral
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}
