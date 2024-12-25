import { CameraIcon, VenetianMaskIcon } from "lucide-react";
import React from "react";

interface RoleSelectionProps {
  onSelectRole: (role: string) => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelectRole }) => {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex items-center justify-center pb-20 -mt-16">
      <div className="text-center max-w-3xl mx-auto">
        {/* Enhanced Title Section */}
        <div className="mb-16 space-y-4">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
            Who are you?
          </h1>
          <p className="text-indigo-100 text-lg">
            Choose your role to get started
          </p>
        </div>
        
        {/* Role Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              role: "cosplayer",
              icon: VenetianMaskIcon,
              title: "Cosplayer",
              description: "Share your portfolio & connect with photographers",
              gradient: "from-pink-500 to-purple-500"
            },
            {
              role: "photographer",
              icon: CameraIcon,
              title: "Photographer",
              description: "Showcase your work & connect with cosplayers",
              gradient: "from-indigo-500 to-blue-500"
            }
          ].map(({ role, icon: Icon, title, description, gradient }) => (
            <button 
              key={role}
              onClick={() => onSelectRole(role)}
              className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8
                       hover:bg-white/100 shadow-xl hover:shadow-2xl
                       border border-white/20 transition-all duration-300
                       hover:scale-[1.02] hover:-translate-y-1"
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Icon with gradient background */}
                <div className={`p-4 rounded-xl bg-gradient-to-r ${gradient} 
                              transform transition-transform duration-300
                              group-hover:scale-110 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Title with subtle animation */}
                <h2 className="text-2xl font-semibold text-gray-900
                             group-hover:text-transparent group-hover:bg-clip-text
                             group-hover:bg-gradient-to-r group-hover:from-indigo-500
                             group-hover:to-purple-500 transition-all duration-300">
                  {title}
                </h2>
                
                {/* Description */}
                <p className="text-gray-600 max-w-[200px]">
                  {description}
                </p>
              </div>

              {/* Subtle gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 
                           to-purple-500 opacity-0 group-hover:opacity-10 transition-opacity 
                           duration-300" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;