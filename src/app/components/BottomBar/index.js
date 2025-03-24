import React from "react";
import Button from "../Button";

const BottomBar = ({ selectedSkip }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
      <div className="max-w-7xl mx-auto">
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium"></h3>
            <div>
              <span className="text-xl font-bold text-[#0037C1]">
                £{selectedSkip.price_before_vat}
              </span>
              <span className="text-sm text-gray-400 ml-2">
                {selectedSkip.hire_period_days} days
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button
              type="secondary"
              className="btn-secondary w-full"
              label="Back"
            />
            <Button
              type="primary"
              className="btn-primary w-full"
              label="Continue"
            />
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <h3 className="font-medium">{selectedSkip.size} Yard Skip</h3>
              <p className="text-sm text-gray-400">
                {selectedSkip.hire_period_days} day hire
              </p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#0037C1]">
                £{selectedSkip.price_before_vat}
              </span>
              <span className="text-sm text-gray-400 ml-2">per week</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button label="Back" type="secondary" />
            <Button
              type="primary"
              label="Continue"
              icon={
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
                  className="lucide lucide-arrow-right w-4 h-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
