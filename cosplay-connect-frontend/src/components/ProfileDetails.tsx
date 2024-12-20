import React, { useState, useEffect } from "react";
import { UserData } from "../shared/types";

interface ProfileDetailsProps {
  role: string;
  nextStep: () => void;
  prevStep: () => void;
  onSubmit: (details: Partial<UserData>) => void;
  onSocialLinkUpdate: (platform: string, profileUrl: string, username: string) => void;
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

  // Update parent state whenever local state changes
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
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        {role === "cosplayer"
          ? "Build Your Cosplayer Profile"
          : "Build Your Photographer Profile"}
      </h2>
      <form
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-8"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="block mb-4">
          <span className="text-gray-700">Name</span>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Social Links</span>
          <div className="flex gap-4 items-center">
            <button
              type="button"
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              onClick={() => {
                const instagramLink = prompt("Enter your Instagram URL:");
                if (instagramLink)
                  setSocialLinks({ instagram: { profileUrl: instagramLink, username: "" } });
              }}
            >
              Link Instagram
            </button>
            {socialLinks.instagram && (
              <span className="text-sm text-green-600">Instagram Linked!</span>
            )}
          </div>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Bio</span>
          <textarea
            className="mt-1 p-2 w-full border rounded-lg"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Tell us about yourself"
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Preferred Photography Styles</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {photographyStylesOptions.map((style) => (
              <button
                key={style}
                type="button"
                className={`px-3 py-1 rounded-full border transition ${
                  photographyStyles.includes(style)
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
                onClick={() => handleStyleToggle(style)}
              >
                {style}
              </button>
            ))}
          </div>
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Photo Portfolio</span>
          <input
            type="file"
            multiple
            accept="image/*"
            className="mt-1 p-2 w-full border rounded-lg"
            onChange={handlePhotoUpload}
          />
          <div className="grid grid-cols-3 gap-2 mt-4">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt="Uploaded preview"
                className="h-20 w-20 object-cover rounded-lg"
              />
            ))}
          </div>
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
