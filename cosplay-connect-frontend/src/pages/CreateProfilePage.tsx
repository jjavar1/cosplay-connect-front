import React, { useState } from "react";
import RoleSelection from "../components/RoleSelection";
import ProfileDetails from "../components/ProfileDetails";
import EventPreferences from "../components/EventPreferences";
import FinalizeProfile from "../components/FinalizeProfile";
import { UserData } from "../shared/types";
import { containerStyles, textStyles } from "../shared/sharedcss";

const steps = ["Select Role", "Profile Details", "Event Preferences", "Finalize Profile"];

const CreateProfile: React.FC = () => {
  const [step, setStep] = useState(1);
  const [role, setRole] = useState<string>("");
  const [userData, setUserData] = useState<UserData>({
    name: "",
    bio: "",
    tags: [],
    events: [],
    photos: [],
    socialLinks: {},
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const onSelectRole = (selectedRole: string) => {
    setRole(selectedRole);
    nextStep();
  };

  const handleProfileDetailsSubmit = (details: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...details }));
  };

  const handleEventPreferencesSubmit = (events: string[]) => {
    setUserData((prev) => ({ ...prev, events }));
  };

  const handleFinalizeProfile = () => {
    console.log("Profile finalized", userData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-white/50 backdrop-blur-sm h-16 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 h-full flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-2xl font-semibold text-indigo-500">
                {step}/{steps.length}
              </span>
              <h2 className="text-lg font-medium text-gray-700">
                {steps[step - 1]}
              </h2>
            </div>
            <div className="w-32 h-2 rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-indigo-500 transition-all duration-300"
                style={{ width: `${(step / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-24 pb-12">
        <div className={containerStyles.mainContent}>
          <div className={containerStyles.card}>
            {step === 1 && <RoleSelection onSelectRole={onSelectRole} />}
            {step === 2 && (
              <ProfileDetails
                role={role}
                nextStep={nextStep}
                prevStep={prevStep}
                onSubmit={handleProfileDetailsSubmit}
                onSocialLinkUpdate={(platform, profileUrl, username) => {
                  setUserData((prev) => ({
                    ...prev,
                    socialLinks: {
                      ...prev.socialLinks,
                      [platform]: { profileUrl, username },
                    },
                  }));
                }}
                userData={userData}
              />
            )}
            {step === 3 && (
              <EventPreferences
                role={role}
                nextStep={nextStep}
                prevStep={prevStep}
                onSubmit={handleEventPreferencesSubmit}
                events={userData.events}
              />
            )}
            {step === 4 && (
              <FinalizeProfile
                userData={userData}
                onEdit={setStep}
                onFinalize={handleFinalizeProfile}
                prevStep={prevStep}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
