import React from "react";

interface FinalizeProfileProps {
  prevStep: () => void;
}

const FinalizeProfile: React.FC<FinalizeProfileProps> = ({ prevStep }) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Create Your Account</h2>
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <label className="block mb-4">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Enter your email"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Enter your password"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Confirm Password</span>
          <input
            type="password"
            className="mt-1 p-2 w-full border rounded-lg"
            placeholder="Confirm your password"
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
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FinalizeProfile;
