import React from 'react';
import LabReport from './LabReport';
import CharacterProfile from './CharacterProfile';
import DiagnosisSubmission from './DiagnosisSubmission';
import UserAccount from './UserAccount';
import Chat from './Chat';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <div className="bg-white shadow rounded-lg p-4 mb-4">
          <div className="mb-4">
            <UserAccount />
          </div>
          <CharacterProfile />
          </div>
          <LabReport />
        </div>
        <div className="md:col-span-2">
          <Chat />
          <DiagnosisSubmission />
        </div>
      </div>
      
    </div>
  );
}



