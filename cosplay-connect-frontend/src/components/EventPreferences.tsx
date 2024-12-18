import React from "react";

interface EventPreferencesProps {
  nextStep: () => void;
  prevStep: () => void;
}

const EventPreferences: React.FC<EventPreferencesProps> = ({ nextStep, prevStep }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Tell us more about your plans!</h2>
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <label className="block mb-4">
          <span className="text-gray-700">Conventions</span>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Add conventions or events you're attending"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Interests</span>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Anime, photography styles, etc."
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

export default EventPreferences;
