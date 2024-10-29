import React from "react";
import {
  FaStar,
  FaUserPlus,
  FaWallet,
} from "react-icons/fa";
import { IoFootballSharp } from "react-icons/io5";
import { SiLivejournal } from "react-icons/si";

interface FooterItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}


const footerItems: FooterItem[] = [
  { icon: <IoFootballSharp className="text-xl" />, label: "SPORTS" },
  { icon: <FaStar className="text-xl" />, label: "FAVORITES" },
  { icon: <FaUserPlus className="text-xl" />, label: "INVITE" },
  {
    icon: <SiLivejournal className="text-2xl text-blue-500" />,
    label: "CASINO LIVE",
    isActive: true,
  },
  { icon: <FaWallet className="text-xl" />, label: "CASHIER" },
];

const Footer: React.FC = () => {
  return (
    <div className="fixed  bottom-0 w-full bg-white py-2 border-t border-gray-200 flex justify-around items-center text-xs sm:text-sm text-gray-500">
      {footerItems.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-center ${
            item.isActive ? "text-blue-500 font-semibold" : ""
          }`}
        >
          {item.icon}
          <span className="mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Footer;
