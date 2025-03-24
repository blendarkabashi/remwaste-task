import React from "react";

const Button = ({ className, label, type, icon, onClick }) => {
  let bgClasses =
    type == "primary"
      ? "bg-[#0037C1] hover:bg-[#002da1] bg-[#0037C1]"
      : "bg-[#2a2a2a] hover:bg-[#252424]";
  return (
    <button
      onClick={onClick}
      className={`${className} text-white py-2.5 cursor-pointer px-4 rounded-md transition-all flex items-center justify-center space-x-2 ${bgClasses} gap-2`}
    >
      {label}
      {icon}
    </button>
  );
};

export default Button;
