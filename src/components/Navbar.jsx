import { ChevronDown } from "lucide-react";
export default function Navbar() {
  return (
    <div className="bg-[#181A20] text-white px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-6 p-3">
        <div className="flex items-center space-x-2">
          <span className="text-yellow-400 font-bold text-xl">BINANCE</span>
        </div>
        {[
          "Buy Crypto",
          "Markets",
          "Trade",
          "Futures",
          "Earn",
          "Square",
          "More",
        ].map((item) => (
          <div
            key={item}
            className="text-md font-sans hover:text-yellow-400 cursor-pointer"
          >
            {item}
            {/* <ChevronDown size={16} /> */}
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        <button className="text-lg">🔍</button>
        <button className="bg-[#2B3139] text-white px-3 py-1 rounded text-md">
          Log In
        </button>
        <button className="bg-yellow-400 text-black px-3 py-1 rounded text-md font-medium hover:bg-yellow-300">
          Sign Up
        </button>
        <button className="text-lg">🌐</button>
        <button className="text-lg">🌙</button>
      </div>
    </div>
  );
}
