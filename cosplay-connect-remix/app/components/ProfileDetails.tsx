import React, { useState } from "react";
import { useNavigation } from "@remix-run/react";
import { Camera, Instagram, Sparkles, Upload } from "lucide-react";
import type { UserData } from "~/shared/types";

interface ProfileDetailsProps {
  role: string;
  nextStep: () => void;
  prevStep: () => void;
  onSubmit: (details: Partial<UserData>) => void;
  userData: UserData;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  role,
  nextStep,
  prevStep,
  onSubmit,
  userData,
}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const [name, setName] = useState(userData.name || "");
  const [bio, setBio] = useState(userData.bio || "");
  const [photographyStyles, setPhotographyStyles] = useState<string[]>(
    userData.tags || []
  );
  const [photos, setPhotos] = useState<string[]>(userData.photos || []);
  const [dragActive, setDragActive] = useState(false);

  const handleNext = () => {
    onSubmit({ name, bio, tags: photographyStyles, photos });
    nextStep();
  };

  return (
    <div className="relative min-h-screen pb-12">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
            Build Your {role === "cosplayer" ? "Cosplayer" : "Photographer"} Profile
          </h1>
          <p className="text-indigo-100 text-lg">Show the world your creative vision</p>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl 
                      border border-white/20 space-y-12">
          <div className="space-y-6 pb-8 border-b border-gray-200">
            <label className="block">
              <span className="text-lg font-semibold text-indigo-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                What should we call you?
              </span>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-gray-200
                           focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200
                           transition-all duration-200 bg-white/50"
                placeholder="Your name or alias"
              />
            </label>
          </div>

          <div className="space-y-6 pb-8 border-b border-gray-200">
            <label className="block">
              <span className="text-lg font-semibold text-indigo-900 flex items-center gap-2">
                <Camera className="w-5 h-5 text-indigo-500" />
                Tell us your story
              </span>
              <textarea
                name="bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-gray-200
                           focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200
                           transition-all duration-200 bg-white/50 min-h-[100px] resize-y"
                placeholder="What inspires you? What's your creative journey?"
              />
            </label>
          </div>

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
              onClick={handleNext}
              className="px-8 py-3 rounded-xl font-semibold text-white
                         bg-gradient-to-r from-indigo-500 to-purple-500
                         hover:from-indigo-600 hover:to-purple-600
                         transition-all duration-200 transform hover:scale-[1.02]
                         shadow-md hover:shadow-lg
                         disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
