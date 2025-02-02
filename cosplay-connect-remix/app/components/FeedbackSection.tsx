import React, { useState } from "react";

const FeedbackSection: React.FC = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Feedback submitted: ${feedback}`);
    setFeedback("");
  };

  return (
    <section className="py-12 bg-white text-center px-4">
      <h3 className="text-2xl font-bold mb-4 text-gray-800">We Want Your Feedback!</h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <textarea
          className="border rounded-md p-3 w-full max-w-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          placeholder="Tell us your thoughts..."
          rows={4}
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Submit Feedback
        </button>
      </form>
    </section>
  );
};

export default FeedbackSection;
