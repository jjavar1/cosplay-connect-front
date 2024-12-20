import React, { useState, useEffect } from "react";

interface EventPreferencesProps {
  role: string;
  nextStep: () => void;
  prevStep: () => void;
  onSubmit: (events: string[]) => void;
  events: string[];
}

const upcomingConventions = [
  "Anime Expo",
  "Comic-Con",
  "Dragon Con",
  "PAX West",
  "WonderCon",
];

const EventPreferences: React.FC<EventPreferencesProps> = ({
  role,
  nextStep,
  prevStep,
  onSubmit,
  events: initialEvents,
}) => {
  const [events, setEvents] = useState<string[]>(initialEvents || []);

  useEffect(() => {
    setEvents(initialEvents); // Update local state when parent changes
  }, [initialEvents]);

  const handleAddEvent = (event: string) => {
    if (!events.includes(event)) {
      const updatedEvents = [...events, event];
      setEvents(updatedEvents); // Update local state
    }
  };

  const handleRemoveEvent = (event: string) => {
    const updatedEvents = events.filter((e) => e !== event);
    setEvents(updatedEvents); // Update local state
  };

  const handleSubmit = () => {
    onSubmit(events); // Update parent state
    nextStep(); // Move to next step
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        {role === "cosplayer"
          ? "Cosplayer Event Preferences"
          : "Photographer Event Preferences"}
      </h2>
      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Your Events</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {events.map((event, index) => (
            <span
              key={index}
              className="flex items-center px-3 py-1 bg-indigo-600 text-white rounded-full"
            >
              {event}
              <button
                type="button"
                onClick={() => handleRemoveEvent(event)}
                className="ml-2 text-red-300 hover:text-red-600"
              >
                &times;
              </button>
            </span>
          ))}
        </div>
        <h4 className="text-lg font-semibold text-gray-700 mb-2">
          Add From Upcoming Conventions:
        </h4>
        <div className="flex flex-wrap gap-2 mb-4">
          {upcomingConventions.map((convention, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleAddEvent(convention)}
              className={`px-3 py-1 rounded-full border ${
                events.includes(convention)
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {convention}
            </button>
          ))}
        </div>
        <input
          type="text"
          className="mt-4 p-2 border rounded-lg w-full"
          placeholder="Add a custom event"
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
              handleAddEvent(e.currentTarget.value.trim());
              e.currentTarget.value = "";
            }
          }}
        />
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
            onClick={handleSubmit}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventPreferences;
