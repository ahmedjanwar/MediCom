// DiagnosisSubmission.jsx
import React from 'react';

export default function DiagnosisSubmission() {
  return (
    <div>
      <div className="text-lg font-semibold mb-4">Diagnosis Submission</div>
      <div className="flex">
        <input
          type="text"
          placeholder="Submit your diagnosis here."
          className="border border-gray-300 rounded-l-lg p-2 flex-grow"
        />
        <button className="bg-blue-500 text-white rounded-lg mr-3 ml-3 px-4">Submit</button>
      </div>
      <div className="bg-gray-200 h-24 rounded mt-4"> Review goes here...</div>
      
    </div>
  );
}