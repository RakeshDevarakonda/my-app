import {
  Github,
  GitBranch,
  Youtube,
  MessageCircle,
  MoreHorizontal,
  AlarmClock,
  Activity,
  Airplay,
  Archive,
  Atom,
  BookOpen,
  Calendar,
  Camera,
  Chrome,
  Cloud,
  Globe,
  DollarSign,
  Moon,
} from "lucide-react";
// import { TelegramIcon } from "@mui/icons-material"; // Remove if unused

export default function Footer() {
  const icons = [
    Github,
    GitBranch,
    Youtube,
    MessageCircle,
    MoreHorizontal,
    AlarmClock,
    Activity,
    Airplay,
    Archive,
    Atom,
    BookOpen,
    Calendar,
    Camera,
    Chrome,
    Cloud,
  ];

  const footerLinks = [
    {
      title: "About Us",
      items: [
        "About",
        "Careers",
        "Announcements",
        "News",
        "Press",
        "Legal",
        "Terms",
        "Privacy",
        "Building Trust",
        "Blog",
        "Community",
        "Risk Warning",
        "Notices",
        "Downloads",
        "Desktop Application",
      ],
    },
    {
      title: "Products",
      items: [
        "Exchange",
        "Buy Crypto",
        "Pay",
        "Academy",
        "Live",
        "Tax",
        "Gift Card",
        "Launchpool",
        "Auto-Invest",
        "ETH Staking",
        "NFT",
        "BABT",
        "Research",
        "Charity",
      ],
    },
    {
      title: "Business",
      items: [
        "P2P Merchant Application",
        "P2Pro Merchant Application",
        "Listing Application",
        "Institutional & VIP Services",
        "Labs",
        "Binance Connect",
      ],
    },
    {
      title: "Support",
      items: [
        "24/7 Chat Support",
        "Support Center",
        "Product Feedback & Suggestions",
        "Fees",
        "APIs",
        "Binance Verify",
        "Trading Rules",
        "Binance Airdrop Portal",
        "Law Enforcement Requests",
      ],
    },
  ];

  return (
    <footer className="bg-zinc-900 text-white px-6 py-12">
      <div className="max-w-[1248px] mx-auto flex flex-row justify-evenly w-full gap-12">
        {/* Left Section - Community */}
        <div className="flex flex-col gap-4 w-1/4">
          <h5 className="text-lg font-semibold">Community</h5>
          <div className="flex flex-row flex-wrap gap-4">
            <div className="grid grid-cols-4 gap-4">
              {icons.map((Icon, idx) => (
                <span
                  key={idx}
                  className="flex w-12 h-12 items-center justify-center bg-white text-black rounded-full hover:bg-yellow-400 transition"
                >
                  <Icon size={22} />
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-300">
            <div className="flex items-center gap-2 text-[18px]">
              <Globe size={16} /> English
            </div>
            <div className="flex items-center gap-2 text-[18px]">
              <DollarSign size={16} /> USD-$
            </div>
            <div className="flex items-center gap-2 text-[18px]">
              Theme
              <div className="bg-gray-700 w-10 h-5 rounded-full flex items-center justify-start px-1">
                <Moon size={12} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Footer Links */}
        <div className="w-[80%] flex flex-row justify-around text-sm">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="font-semibold mb-3 text-xl">{section.title}</h3>
              <ul className="space-y-2 text-gray-300 font-medium">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-white text-[15px] cursor-pointer"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
