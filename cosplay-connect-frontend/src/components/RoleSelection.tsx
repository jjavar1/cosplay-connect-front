import React from "react";

interface RoleSelectionProps {
  onSelectRole: (role: string) => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Who are you?</h2>
      <div className="flex gap-8 justify-center">
        {/* Cosplayer Card */}
        <div
          onClick={() => onSelectRole("cosplayer")}
          className="w-64 h-80 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <span className="text-indigo-600 text-6xl mb-4">🎭</span>
          <h3 className="text-xl font-semibold text-gray-700">Cosplayer</h3>
          <p className="text-gray-600 text-center px-4 mt-2">
            Showcase your cosplay portfolio and connect with photographers.
          </p>
        </div>

        {/* Photographer Card */}
        <div
          onClick={() => onSelectRole("photographer")}
          className="w-64 h-80 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <span className="text-indigo-600 text-6xl mb-4">📸</span>
          <h3 className="text-xl font-semibold text-gray-700">Photographer</h3>
          <p className="text-gray-600 text-center px-4 mt-2">
            Connect with cosplayers and showcase your photography work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
