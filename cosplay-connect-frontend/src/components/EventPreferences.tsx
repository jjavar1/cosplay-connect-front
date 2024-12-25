import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { CalendarDays, Plus, X } from "lucide-react";

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
    <>
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
          Choose Your Events
        </h1>
        <p className="text-indigo-100 text-lg">
          Select the conventions you plan to attend
        </p>
      </div>

      {/* Main Content Card */}
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl 
                    border border-white/20 space-y-12">
        {/* Selected Events Section */}
        <div className="space-y-6">
          <SectionHeader
            icon={CalendarDays}
            title="Your Selected Events"
            subtitle="Events you're planning to attend"
          />
          
          <div className="flex flex-wrap gap-2">
            {events.map((event, index) => (
              <span
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r 
                         from-indigo-500 to-purple-500 text-white rounded-xl
                         shadow-md"
              >
                {event}
                <button
                  type="button"
                  onClick={() => handleRemoveEvent(event)}
                  className="hover:bg-white/20 rounded-full p-1 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Upcoming Conventions Section */}
        <div className="space-y-6 pb-8 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-indigo-900">
            Popular Upcoming Conventions
          </h3>
          <div className="flex flex-wrap gap-2">
            {upcomingConventions.map((convention, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleAddEvent(convention)}
                className={`px-4 py-2 rounded-xl transition-all duration-200
                  ${events.includes(convention)
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md transform hover:scale-[1.05]"
                    : "bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                  }`}
              >
                {convention}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Event Input */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-indigo-900">
            Add Custom Event
          </h3>
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200
                       focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200
                       transition-all duration-200 bg-white/50"
              placeholder="Enter event name and press Enter"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
                  handleAddEvent(e.currentTarget.value.trim());
                  e.currentTarget.value = "";
                }
              }}
            />
            <Plus className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStep}
            className="px-8 py-3 rounded-xl font-semibold text-indigo-600 
                     border-2 border-indigo-500 hover:bg-indigo-50
                     transition-all duration-200 transform hover:scale-[1.02]"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="px-8 py-3 rounded-xl font-semibold text-white
                     bg-gradient-to-r from-indigo-500 to-purple-500
                     hover:from-indigo-600 hover:to-purple-600
                     transition-all duration-200 transform hover:scale-[1.02]
                     shadow-md hover:shadow-lg"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default EventPreferences;
