import Image from "next/image";
import Button from "./components/Button";
import BottomBar from "./components/BottomBar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-8 overflow-x-auto">
          <div className="flex items-center space-x-4">
            <button className="flex items-center whitespace-nowrap transition-colors text-[#0037C1] cursor-pointer hover:text-[#0037C1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-map-pin w-6 h-6"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span className="ml-2 text-white">Postcode</span>
            </button>
            <div className="w-16 h-px bg-[#0037C1]"></div>
            <button className="flex items-center whitespace-nowrap transition-colors text-[#0037C1] cursor-pointer hover:text-[#0037C1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash2 w-6 h-6"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                <line x1="10" x2="10" y1="11" y2="17"></line>
                <line x1="14" x2="14" y1="11" y2="17"></line>
              </svg>
              <span className="ml-2 text-white">Waste Type</span>
            </button>
            <div className="w-16 h-px bg-[#2A2A2A]"></div>
            <button className="flex items-center whitespace-nowrap transition-colors text-[#0037C1] cursor-pointer hover:text-[#0037C1]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-truck w-6 h-6"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
              <span className="ml-2 text-white">Select Skip</span>
            </button>
            <div className="w-16 h-px bg-[#2A2A2A]"></div>
            <button
              disabled=""
              className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield w-6 h-6"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
              </svg>
              <span className="ml-2 text-white">Permit Check</span>
            </button>
            <div className="w-16 h-px bg-[#2A2A2A]"></div>
            <button
              disabled=""
              className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-calendar w-6 h-6"
              >
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                <path d="M3 10h18"></path>
              </svg>
              <span className="ml-2 text-white">Choose Date</span>
            </button>
            <div className="w-16 h-px bg-[#2A2A2A]"></div>
            <button
              disabled=""
              className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-credit-card w-6 h-6"
              >
                <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                <line x1="2" x2="22" y1="10" y2="10"></line>
              </svg>
              <span className="ml-2 text-white">Payment</span>
            </button>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pb-32">
          <h2 className="text-2xl font-bold text-center mb-4">
            Choose Your Skip Size
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Select the skip size that best suits your needs
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="group relative rounded-lg border-2 p-4 md:p-6 transition-all border-[#0037C1] bg-[#1C1C1C] text-white cursor-pointer">
              <div className="absolute top-3 right-3 md:top-4 md:right-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-check w-5 h-5 md:w-6 md:h-6 text-[#0037C1]"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&amp;w=800"
                  alt="40 Yard Skip"
                  className="w-full h-36 md:h-48 object-cover rounded-md mb-4"
                />
                <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium shadow-md">
                  40 Yards
                </div>
                <div className="absolute bottom-3 left-2 z-20 space-y-2">
                  <div className="bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0"
                    >
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                    <span className="text-xs font-medium text-yellow-500">
                      Private Property Only
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
                40 Yard Skip
              </h3>
              <p className="text-sm text-gray-400 mb-4 md:mb-6">
                14 day hire period
              </p>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                    £836
                  </span>
                  <span className="text-sm text-gray-400 ml-2">per week</span>
                </div>
              </div>
              <button
                className="w-full py-2.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2
          bg-[#0037C1] text-white hover:bg-[#002da1]
          false"
              >
                <span>Selected</span>
              </button>
            </div>
          </div>
        </div>
        <BottomBar />
      </main>
    </div>
  );
}
