import React from "react";
import { FooterSection } from "./sections/FooterSection";
import { ReviewAndSubmitSection } from "./sections/ReviewAndSubmitSection";

export const ReviewSubmit = (): JSX.Element => {
  // Define the navigation steps
  const navigationSteps = [
    { number: 1, label: "Campaign creation" },
    { number: 2, label: "Review & Submit", active: true },
    { number: 3, label: "Payment" },
    { number: 4, label: "Conversions" },
    { number: 5, label: "Tracking" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f6f7f8]">
      {/* Header */}
      <header className="flex items-center h-[60px] w-full bg-[#1d4488] px-5">
        <div className="relative w-[75.71px] h-5">
          <img
            className="absolute w-[69px] h-[18px] top-px left-px"
            alt="Realize logo"
            src="https://c.animaapp.com/m963xbrqdqnMBv/img/group.png"
          />
          <img
            className="absolute w-[3px] h-2 top-[9px] left-[72px]"
            alt="Vector"
            src="https://c.animaapp.com/m963xbrqdqnMBv/img/vector.svg"
          />
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-[226px] bg-white border-r border-[#d4d9df]">
          <nav className="py-4">
            <ul className="space-y-2">
              {navigationSteps.map((step) => (
                <li key={step.number} className="px-4">
                  <div
                    className={`flex items-center gap-3 p-2 rounded-md ${
                      step.active ? "bg-blue-50 text-blue" : "text-gray-7"
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-6 h-6 rounded-full ${
                        step.active
                          ? "bg-blue text-white"
                          : "bg-gray-4 text-gray-7"
                      }`}
                    >
                      {step.number}
                    </span>
                    <span className="text-sm font-medium">{step.label}</span>
                  </div>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1 flex flex-col">
          <ReviewAndSubmitSection />
          <FooterSection />
        </main>
      </div>
    </div>
  );
};
