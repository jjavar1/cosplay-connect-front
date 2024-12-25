import React, { useState } from "react";
import RoleSelection from "../components/RoleSelection";
import ProfileDetails from "../components/ProfileDetails";
import EventPreferences from "../components/EventPreferences";
import FinalizeProfile from "../components/FinalizeProfile";
import { UserData } from "../shared/types";
import { containerStyles, textStyles } from "../shared/sharedcss";
import AnimeGirl from "../assets/anime-girl.png";

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
    <div className="min-h-screen relative">
{/* Background */}
<div className="fixed inset-0 z-0">
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
    {/* Optional pattern overlay */}
    <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,...')]" />
    {/* Dark overlay for better contrast */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/15" />
  </div>
</div>

      {/* Progress Bar */}
      <div className="sticky top-0 w-full z-50">
        <div className="bg-white/50 backdrop-blur-lg h-16 border-b border-gray-100 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 h-full flex items-center justify-between">
            {/* Left side: Step counter and title */}
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-start">
                <span className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {step}/{steps.length}
                </span>
              </div>
              <h2 className="text-lg font-medium text-gray-700">
                {steps[step - 1]}
              </h2>
            </div>

            {/* Right side: Progress bar */}
            <div className="w-40 h-2 rounded-full bg-gray-200/60 overflow-hidden">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 
                     transition-all duration-500 ease-in-out"
                style={{ width: `${(step / steps.length) * 100}%` }}
                role="progressbar"
                aria-valuenow={(step / steps.length) * 100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Enhanced Spacing */}
      <div className="relative z-10 min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto px-4 py-8">
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
  );
};

export default CreateProfile;
