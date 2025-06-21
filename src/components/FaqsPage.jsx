import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is a cryptocurrency exchange?",
    answer:
      "Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.",
  },
  {
    id: 2,
    question: "What products does Binance provide?",
    answer:
      "Binance is the world's leading cryptocurrency exchange, catering to over 270 million registered users in over 180 countries. With low fees and over 400 cryptocurrencies to trade, Binance is the preferred exchange to trade Bitcoin, Altcoins, and other virtual assets.With Binance users can:Trade hundreds of cryptocurrencies on Spot, Margin, and Futures markets.Buy and sell cryptocurrencies with Binance P2P.Earn interest on your crypto with Binance Earn.Buy or earn new tokens on Binance Launchpool, Airdrop, Megadrop, etc.Trade, stake, and loan NFTs on Binance NFT marketplace.To get started, check out our learning.",
  },
  {
    id: 3,
    question: "How to buy Bitcoin and other cryptocurrencies on Binance",
    answer:
      "There are several ways to buy cryptocurrencies on Binance. You can use a credit/debit card, cash balance, or Apple Pay/Google Pay to purchase crypto on Binance. Before getting started, please make sure you’ve completed Identity Verification for your Binance account.To learn more, check out our overview.",
  },
  {
    id: 4,
    question: "How to track cryptocurrency prices",
    answer:
      "The easiest way to track the latest cryptocurrency prices, trading volumes, trending altcoins, and market cap is the Binance Cryptocurrency Directory. Click on the coins to know historical coin prices, 24-hour trading volume, and the price of cryptocurrencies like Bitcoin, Ethereum, BNB and others in real-time.",
  },
  {
    id: 5,
    question: "How to trade cryptocurrencies on Binance",
    answer:
      "You can trade hundreds of cryptocurrencies on Binance via the Spot, Margin, Futures, and Options markets. To begin trading, users need to register an account, complete identity verification, buy/deposit crypto, and start trading.",
  },
  {
    id: 6,
    question: "How to earn from crypto on Binance",
    answer:
      "Users can earn rewards on more than 180+ cryptocurrencies by using one of the products offered on Binance Earn. Our platform offers dozens of digital assets like Bitcoin, Ethereum, and stablecoins.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-[1248px] mx-auto  py-12">
      <h2 className="text-center text-4xl font-bold mb-16">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <div
          key={faq.id}
          className="mb-6 p-4 bg-[#181A20] rounded-lg cursor-pointer"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-8 w-8 flex items-center justify-center border border-gray-500 rounded text-md font-medium mr-4">
                {faq.id}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {faq.question}
              </h3>
            </div>
            <div
              className={`text-2xl h-8 w-8 rounded-3xl flex items-center justify-center ${
                openIndex === index ? "bg-yellow-300 text-black" : ""
              }`}
            >
              {openIndex === index ? "-" : "+"}
            </div>
          </div>
          {openIndex === index && (
            <p className="mt-4 ml-9 w-[90%] text-gray-700 dark:text-gray-300">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
