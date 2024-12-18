import React, { useState } from "react";
import RoleSelection from "../components/RoleSelection";
import ProfileDetails from "../components/ProfileDetails";
import EventPreferences from "../components/EventPreferences";
import FinalizeProfile from "../components/FinalizeProfile";

const CreateProfile: React.FC = () => {
  const [step, setStep] = useState(1); // Current step
  const [role, setRole] = useState<string>(""); // Selected role: Cosplayer/Photographer

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const onSelectRole = (selectedRole: string) => {
    setRole(selectedRole);
    nextStep();
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
      {step === 1 && <RoleSelection onSelectRole={onSelectRole} />}
      {step === 2 && <ProfileDetails role={role} nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <EventPreferences nextStep={nextStep} prevStep={prevStep} />}
      {step === 4 && <FinalizeProfile prevStep={prevStep} />}
    </div>
  );
};

export default CreateProfile;
