import React from "react";
import {
  MapPin,
  Trash2,
  Truck,
  Shield,
  Calendar,
  CreditCard,
} from "lucide-react";

const NavBar = ({ activeIndex = 2 }) => {
  const items = [
    { label: "Select Skip", icon: <Truck className="w-6 h-6" /> },
    { label: "Postcode", icon: <MapPin className="w-6 h-6" /> },
    { label: "Waste Type", icon: <Trash2 className="w-6 h-6" /> },
    { label: "Permit Check", icon: <Shield className="w-6 h-6" /> },
    { label: "Choose Date", icon: <Calendar className="w-6 h-6" /> },
    { label: "Payment", icon: <CreditCard className="w-6 h-6" /> },
  ];

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="md:hidden mb-8">
        <select
          value={activeIndex}
          className="w-full bg-[#1A1A1A] text-white border border-[#2A2A2A] rounded-lg p-3 focus:outline-none focus:border-[#0037C1]"
        >
          {items.map((item, index) => (
            <option
              key={index}
              value={index}
              disabled={index > activeIndex}
              className={
                index <= activeIndex ? "text-[#0037C1]" : "text-white/60"
              }
            >
              {item.label}
            </option>
          ))}
        </select>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center mb-8 overflow-x-auto">
        <div className="flex items-center space-x-4">
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <button
                className={`${
                  index > activeIndex && "cursor-not-allowed"
                } flex items-center whitespace-nowrap transition-colors cursor-pointer ${
                  index <= activeIndex
                    ? "text-[#0037C1]"
                    : "text-white/60 cursor-not-allowed opacity-50"
                }`}
                disabled={index > activeIndex}
              >
                {item.icon}
                <span className="ml-2 text-white">{item.label}</span>
              </button>
              {index < items.length - 1 && (
                <div
                  className={`w-16 h-px ${
                    index < activeIndex ? "bg-[#0037C1]" : "bg-[#2A2A2A]"
                  }`}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
