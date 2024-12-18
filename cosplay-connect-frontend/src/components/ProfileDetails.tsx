import React from "react";

interface ProfileDetailsProps {
  role: string;
  nextStep: () => void;
  prevStep: () => void;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ role, nextStep, prevStep }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        {role === "cosplayer" ? "Build Your Cosplayer Profile" : "Build Your Photographer Profile"}
      </h2>
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Enter your name"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Bio</span>
          <textarea
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Tell us about yourself"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Social Links</span>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Instagram, Facebook, etc."
          />
        </label>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={prevStep}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
