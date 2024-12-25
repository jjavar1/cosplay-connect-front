import React, { useState, useEffect } from "react";
import { UserData } from "../shared/types";
import TextInput from "../shared/TextInput";
import { Camera, Instagram, Sparkles, Upload } from "lucide-react";
import { buttonStyles, containerStyles, textStyles } from "../shared/sharedcss";

interface ProfileDetailsProps {
  role: string;
  nextStep: () => void;
  prevStep: () => void;
  onSubmit: (details: Partial<UserData>) => void;
  onSocialLinkUpdate: (
    platform: string,
    profileUrl: string,
    username: string
  ) => void;
  userData: UserData;
}

const photographyStylesOptions = [
  "Cinematic",
  "Narrative",
  "Candid",
  "Posed",
  "Studio/Indoor",
  "Outdoor",
  "Editorial/High-Fashion",
  "Action Shots",
];

const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  role,
  nextStep,
  prevStep,
  onSubmit,
  onSocialLinkUpdate,
  userData,
}) => {
  const [name, setName] = useState(userData.name || "");
  const [bio, setBio] = useState(userData.bio || "");
  const [photographyStyles, setPhotographyStyles] = useState<string[]>(
    userData.tags || []
  );
  const [socialLinks, setSocialLinks] = useState(
    userData.socialLinks || { instagram: "" }
  );
  const [photos, setPhotos] = useState(userData.photos || []);
  const [showImportDialog, setShowImportDialog] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);  // Instead of using classList
  };
  
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);  // Instead of using classList
  };
  
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);  // Instead of using classList
  
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const uploadedPhotos = Array.from(e.dataTransfer.files)
        .filter((file) => file.type.startsWith("image/"))
        .map((file) => URL.createObjectURL(file));
      setPhotos((prev) => [...prev, ...uploadedPhotos]);
    }
  };

  useEffect(() => {
    onSubmit({ name, bio, tags: photographyStyles, socialLinks, photos });
  }, [name, bio, photographyStyles, socialLinks, photos, onSubmit]);

  const handleStyleToggle = (style: string) => {
    setPhotographyStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const uploadedPhotos = Array.from(event.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setPhotos((prev) => [...prev, ...uploadedPhotos]);
    }
  };

  return (
    <div className="relative min-h-screen pb-12">
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700">
          <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml,...')]" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Enhanced Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">
            Build Your {role === "cosplayer" ? "Cosplayer" : "Photographer"} Profile
          </h1>
          <p className="text-indigo-100 text-lg">Show the world your creative vision</p>
        </div>

        {/* Enhanced Form Card */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl 
                    border border-white/20 space-y-12">
          {/* Name Section */}
          <div className="space-y-6 pb-8 border-b border-gray-200">
            <label className="block">
              <span className="text-lg font-semibold text-indigo-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                What should we call you?
              </span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-gray-200
                         focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200
                         transition-all duration-200 bg-white/50"
                placeholder="Your name or alias"
              />
            </label>
          </div>

          {/* Bio Section */}
          <div className="space-y-6 pb-8 border-b border-gray-200">
            <label className="block">
              <span className="text-lg font-semibold text-indigo-900 flex items-center gap-2">
                <Camera className="w-5 h-5 text-indigo-500" />
                Tell us your story
              </span>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="mt-2 w-full px-4 py-3 rounded-xl border-2 border-gray-200
                         focus:border-indigo-500 focus:ring-4 focus:ring-indigo-200
                         transition-all duration-200 bg-white/50 min-h-[100px] resize-y"
                placeholder="What inspires you? What's your creative journey?"
              />
            </label>
          </div>

          {/* Social Links - Enhanced */}
          <div className="space-y-6 pb-8 border-b border-gray-200">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-indigo-900 flex items-center gap-2">
                <Instagram className="w-5 h-5 text-indigo-500" />
                Connect Your Socials
              </h3>
              <p className="text-gray-600">Share your social media presence with your audience</p>
              <button
                type="button"
                className="group flex items-center gap-3 px-6 py-3 bg-gradient-to-r 
                         from-indigo-500 to-purple-500 text-white rounded-xl
                         hover:from-indigo-600 hover:to-purple-600
                         transition-all duration-200 transform hover:scale-[1.02]
                         shadow-md hover:shadow-lg"
                onClick={() => {/* Instagram connection logic */}}
              >
                <Instagram className="w-5 h-5" />
                <span className="font-semibold">
                  {socialLinks.instagram ? "Instagram Connected" : "Connect Instagram"}
                </span>
                {socialLinks.instagram && (
                  <span className="w-2 h-2 rounded-full bg-green-400 ml-2 shadow-green-400/50" />
                )}
              </button>
            </div>
          </div>

          {/* Photography Styles - Enhanced */}
          <div className="space-y-6 pb-8 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-indigo-900">
              Your Photography Style
            </h3>
            <div className="flex flex-wrap gap-2">
              {photographyStylesOptions.map((style) => (
                <button
                  key={style}
                  type="button"
                  className={`px-5 py-2.5 rounded-xl transition-all duration-200
                    ${photographyStyles.includes(style)
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md transform hover:scale-[1.05]"
                      : "bg-white text-gray-700 border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                    }`}
                  onClick={() => handleStyleToggle(style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Upload - Enhanced */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-indigo-900">
              Showcase Your Work
            </h3>
            <div
              className={`relative group rounded-xl border-2 border-dashed p-8
                       ${dragActive
                         ? "border-indigo-500 bg-indigo-50"
                         : "border-gray-300 hover:border-indigo-400"}
                       transition-all duration-200`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="flex flex-col items-center justify-center text-center">
                <Upload className="w-16 h-16 mb-4 text-indigo-400 group-hover:text-indigo-500 
                                transition-colors duration-200" />
                <p className="text-lg font-medium text-gray-700 mb-2">
                  Drop your best shots here
                </p>
                <p className="text-sm text-gray-500">
                  PNG, JPG, GIF up to 10MB
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={handlePhotoUpload}
                />
              </div>
            </div>

            {/* Photo Grid - Enhanced */}
            {photos.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                {photos.map((photo, index) => (
                  <div key={index} className="relative group aspect-square rounded-xl overflow-hidden">
                    <img
                      src={photo}
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-200 
                               group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <button
                        onClick={() => setPhotos(prev => prev.filter((_, i) => i !== index))}
                        className="absolute bottom-2 right-2 p-2 bg-red-500 text-white rounded-full 
                                 hover:bg-red-600 transition-colors shadow-lg"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Navigation - Enhanced */}
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
              onClick={nextStep}
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
      </div>
    </div>
  );
};

export default ProfileDetails;
