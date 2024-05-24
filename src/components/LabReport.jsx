import React from "react";
import AccordionItem from "../API/accordionItems"


export default function LabReport() {
    const accordionItems = [
        {
          title: 'op 1',
          content: 'This section contains the introduction of the lab report.'
        },
        {
          title: 'op 2',
          content: 'This section contains the methodology of the lab report.'
        },
        {
          title: 'op 3',
          content: 'This section contains the results of the lab report.'
        },
        {
          title: 'op 4',
          content: 'This section contains the discussion of the lab report.'
        },
        {
          title: 'op 5',
          content: 'This section contains the conclusion of the lab report.'
        }
      ];
    
      return (
        <div className="bg-white shadow rounded-lg p-4 ">
            <div className="text-lg font-semibold ">Lab Reports</div>
            <div className="max-w-md mx-auto mt-3 border border-gray-200 rounded-md">
            {accordionItems.map((item, index) => (
                <AccordionItem key={index} title={item.title} content={item.content} />
            ))}
            </div>
        </div>
      );
    };