import React from "react";
import { UserData } from "../shared/types";

interface FinalizeProfileProps {
  userData: UserData;
  prevStep: () => void;
  onEdit: (step: number) => void;
  onFinalize: () => void;
}

const FinalizeProfile: React.FC<FinalizeProfileProps> = ({
  userData,
  prevStep,
  onEdit,
  onFinalize,
}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Review Your Profile</h2>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Name</h3>
          <p>{userData.name}</p>
          <button
            className="text-indigo-600 hover:underline"
            onClick={() => onEdit(2)} // Navigate to Profile Details step
          >
            Edit
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Bio</h3>
          <p>{userData.bio}</p>
          <button
            className="text-indigo-600 hover:underline"
            onClick={() => onEdit(2)}
          >
            Edit
          </button>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold">Events</h3>
          <p>{userData.events.join(", ")}</p>
          <button
            className="text-indigo-600 hover:underline"
            onClick={() => onEdit(3)} // Navigate to Event Preferences step
          >
            Edit
          </button>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={prevStep} // Navigate to the previous step
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onFinalize} // Finalize the profile
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Finalize
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinalizeProfile;
