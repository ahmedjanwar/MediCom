import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function AccordionItem ({ title, content }){
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="border-b border-gray-200">
        <button
          onClick={toggleAccordion}
          className="w-full text-left py-4 px-6 flex justify-between items-center focus:outline-none"
        >
          <span className="text-lg font-medium">{title}</span>
          <svg
            className={`transform transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l5 5a1 1 0 01-1.414 1.414L10 5.414l-4.293 4.293A1 1 0 014.293 8.293l5-5A1 1 0 0110 3z" clipRule="evenodd" />
          </svg>
        </button>
        {isOpen && (
          <div className="px-6 py-4">
            <p className="text-gray-700">{content}</p>
          </div>
        )}
      </div>
    );
  };
