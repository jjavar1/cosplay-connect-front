import React, { useState } from "react";
import RoleSelection from "../components/RoleSelection";
import ProfileDetails from "../components/ProfileDetails";
import EventPreferences from "../components/EventPreferences";
import FinalizeProfile from "../components/FinalizeProfile";
import { UserData } from "../shared/types";

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
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Progress Bar */}
      <div className="absolute top-0 w-full bg-gray-200 h-2">
        <div
          className="bg-indigo-600 h-2 transition-all"
          style={{ width: `${(step / steps.length) * 100}%` }}
        ></div>
      </div>

      {/* Step Titles */}
      <div className="absolute top-8 text-center">
        <h2 className="text-lg font-bold text-gray-700">
          Step {step} of {steps.length}: {steps[step - 1]}
        </h2>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center w-full max-w-lg">
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
  );
};

export default CreateProfile;
