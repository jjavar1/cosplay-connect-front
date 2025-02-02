import React from "react";
import { Form, useNavigation, useSubmit } from "@remix-run/react";
import { UserData } from "~/shared/types";
import { CalendarDays, CheckCircle, PenLine, User } from "lucide-react";
import SectionHeader from "~/components/SectionHeader";

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
  const navigation = useNavigation();
  const submit = useSubmit();
  const isSubmitting = navigation.state === "submitting";

  const sections = [
    {
      title: "Basic Information",
      icon: User,
      content: userData.name,
      step: 2
    },
    {
      title: "About You",
      icon: PenLine,
      content: userData.bio,
      step: 2
    },
    {
      title: "Your Events",
      icon: CalendarDays,
      content: userData.events.join(", "),
      step: 3
    }
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    formData.append("intent", "finalize");
    formData.append("userData", JSON.stringify(userData));
    
    submit(formData, { method: "post" });
    onFinalize();
  };

  return (
    <>
      {/* Title Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
          Review Your Profile
        </h1>
        <p className="text-indigo-100 text-lg">
          Make sure everything looks perfect
        </p>
      </div>

      {/* Main Content Card */}
      <Form 
        method="post" 
        onSubmit={handleSubmit}
        className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl 
                  border border-white/20 space-y-12"
      >
        <input type="hidden" name="intent" value="finalize" />
        {/* Hidden fields for server-side processing */}
        <input type="hidden" name="name" value={userData.name} />
        <input type="hidden" name="bio" value={userData.bio} />
        <input type="hidden" name="events" value={JSON.stringify(userData.events)} />
        <input type="hidden" name="tags" value={JSON.stringify(userData.tags)} />
        <input type="hidden" name="socialLinks" value={JSON.stringify(userData.socialLinks)} />

        {sections.map((section, index) => (
          <div 
            key={index}
            className="relative pb-8 border-b border-gray-200 last:border-0 last:pb-0"
          >
            <SectionHeader
              icon={section.icon}
              title={section.title}
            />
            
            <div className="mt-4 group">
              <p className="text-gray-700 text-lg">
                {section.content || <span className="text-gray-400 italic">Not provided</span>}
              </p>
              
              <button
                type="button"
                onClick={() => onEdit(section.step)}
                className="absolute top-0 right-0 px-4 py-2 rounded-lg
                         text-indigo-600 hover:text-white
                         hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500
                         transition-all duration-200 text-sm font-medium
                         flex items-center gap-2
                         disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                <PenLine className="w-4 h-4" />
                Edit
              </button>
            </div>
          </div>
        ))}

        {/* Navigation */}
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStep}
            disabled={isSubmitting}
            className="px-8 py-3 rounded-xl font-semibold text-indigo-600 
                     border-2 border-indigo-500 hover:bg-indigo-50
                     transition-all duration-200 transform hover:scale-[1.02]
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3 rounded-xl font-semibold text-white
                     bg-gradient-to-r from-indigo-500 to-purple-500
                     hover:from-indigo-600 hover:to-purple-600
                     transition-all duration-200 transform hover:scale-[1.02]
                     shadow-md hover:shadow-lg
                     flex items-center gap-2
                     disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <CheckCircle className="w-5 h-5" />
            {isSubmitting ? "Creating Profile..." : "Finalize Profile"}
          </button>
        </div>
      </Form>
    </>
  );
};

export default FinalizeProfile;