import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useLoaderData, useNavigate, useNavigation } from "@remix-run/react";
import { useState } from "react";
import RoleSelection from "~/components/RoleSelection";
import ProfileDetails from "~/components/ProfileDetails";
import EventPreferences from "~/components/EventPreferences";
import FinalizeProfile from "~/components/FinalizeProfile";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import type { UserData } from "~/shared/types";

const steps = ["Select Role", "Profile Details", "Event Preferences", "Finalize Profile"];

// Loader to handle initial data fetching
export const loader: LoaderFunction = async ({ request }) => {
  // You can fetch any initial data here
  return json({
    // Add any data you need to pass to the component
  });
};

// Action to handle form submissions
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const intent = formData.get("intent");

  switch (intent) {
    case "select-role": {
      const role = formData.get("role");
      // Handle role selection, maybe store in session
      return json({ role });
    }
    case "profile-details": {
      const name = formData.get("name");
      const bio = formData.get("bio");
      const tags = formData.getAll("tags");
      const socialLinks = JSON.parse(formData.get("socialLinks") as string);
      // Handle profile details submission
      return json({ name, bio, tags, socialLinks });
    }
    case "event-preferences": {
      const events = formData.getAll("events");
      // Handle event preferences submission
      return json({ events });
    }
    case "finalize": {
      // Handle final profile submission
      // You might want to save to a database here
      return redirect("/profile"); // Redirect after successful creation
    }
  }

  return json({});
};

export default function CreateProfile() {
  const [step, setStep] = useState(1);
  const actionData = useActionData<{ role?: string }>();
  const loaderData = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,...')]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/15" />
        </div>
      </div>

      {/* Progress Bar */}
      <div className="sticky top-0 w-full z-50">
        <div className="bg-white/50 backdrop-blur-lg h-16 border-b border-gray-100 shadow-sm">
          <div className="max-w-4xl mx-auto px-4 h-full flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col items-start">
                <span className="text-2xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {step}/{steps.length}
                </span>
              </div>
              <h2 className="text-lg font-medium text-gray-700">
                {steps[step - 1]}
              </h2>
            </div>

            <div className="w-40 h-2 rounded-full bg-gray-200/60 overflow-hidden">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 
                     transition-all duration-500 ease-in-out"
                style={{ width: `${(step / steps.length) * 100}%` }}
                role="progressbar"
                aria-valuenow={(step / steps.length) * 100}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-[calc(100vh-4rem)]">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {step === 1 && (
            <Form method="post">
              <input type="hidden" name="intent" value="select-role" />
              <RoleSelection 
                onSelectRole={(role) => {
                  // Submit the form programmatically after role selection
                  const formData = new FormData();
                  formData.append("role", role);
                  formData.append("intent", "select-role");
                  // You might want to use useFetcher here for a smoother experience
                  nextStep();
                }}
              />
            </Form>
          )}
          
          {step === 2 && (
            <Form method="post">
              <input type="hidden" name="intent" value="profile-details" />
              <ProfileDetails
                role={actionData?.role ?? ""}
                nextStep={nextStep}
                prevStep={prevStep}
                onSubmit={(details) => {
                  setUserData(prev => ({ ...prev, ...details }));
                  nextStep();
                }}
                onSocialLinkUpdate={(platform, profileUrl, username) => {
                  setUserData(prev => ({
                    ...prev,
                    socialLinks: {
                      ...prev.socialLinks,
                      [platform]: { profileUrl, username },
                    },
                  }));
                }}
                userData={userData}
              />
            </Form>
          )}

          {step === 3 && (
            <Form method="post">
              <input type="hidden" name="intent" value="event-preferences" />
              <EventPreferences
                role={actionData?.role ?? ""}
                nextStep={nextStep}
                prevStep={prevStep}
                onSubmit={(events) => {
                  setUserData(prev => ({ ...prev, events }));
                  nextStep();
                }}
                events={userData.events}
              />
            </Form>
          )}

          {step === 4 && (
            <Form method="post">
              <input type="hidden" name="intent" value="finalize" />
              <input 
                type="hidden" 
                name="userData" 
                value={JSON.stringify(userData)} 
              />
              <FinalizeProfile
                userData={userData}
                onEdit={setStep}
                onFinalize={() => {
                  // Form will be submitted normally
                }}
                prevStep={prevStep}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg"
              >
                {isSubmitting ? "Creating Profile..." : "Create Profile"}
              </button>
            </Form>
          )}
        </div>
      </div>
    </div>
  );
}