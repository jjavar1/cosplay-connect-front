import React, { useState, useEffect } from "react";
import { UserData } from "../shared/types";
import TextInput from "../shared/TextInput";
import { Instagram, Upload } from "lucide-react";
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

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const dropzone = e.currentTarget as HTMLElement;
    dropzone.classList.add("border-indigo-500", "bg-indigo-50");
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const dropzone = e.currentTarget as HTMLElement;
    dropzone.classList.remove("border-indigo-500", "bg-indigo-50");
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const dropzone = e.currentTarget as HTMLElement;
    dropzone.classList.remove("border-indigo-500", "bg-indigo-50");

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
    <div className={containerStyles.mainContent}>
      <h1 className="text-[2.5rem] font-bold text-gray-800 text-center mb-10">
        Build Your {role === "cosplayer" ? "Cosplayer" : "Photographer"} Profile
      </h1>
  
      <div className={`${containerStyles.card} space-y-10`}>
        <TextInput label="Name" value={name} onChange={setName} />
  
        <TextInput
          label="Bio"
          value={bio}
          onChange={setBio}
          placeholder="Tell us about yourself"
        />
  
        <div className="pt-2">
          <div className="flex items-center gap-4">
            <h3 className={`${textStyles.sectionTitle} !mb-0`}>Social Links</h3>
            <button
              type="button"
              className="group flex items-center gap-2 px-4 py-2 bg-white
                       rounded-lg border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-50 
                       transition-colors"
              onClick={() => {
                console.log("Button clicked");
                const instagramLink = prompt("Enter your Instagram URL:");
                console.log("Instagram link:", instagramLink);
                if (instagramLink) {
                  setSocialLinks((prev) => ({
                    ...prev,
                    instagram: { profileUrl: instagramLink, username: "" },
                  }));
                  console.log("Setting show import dialog to true");
                  setShowImportDialog(true);
                }
              }}
            >
              <Instagram className="w-5 h-5 text-indigo-600 group-hover:text-indigo-700" />
              <span className="font-semibold group-hover:text-indigo-700">
                {socialLinks.instagram ? "Instagram Connected" : "Connect Instagram"}
              </span>
              {socialLinks.instagram && (
                <span className="w-2 h-2 rounded-full bg-green-500 ml-2" />
              )}
            </button>
          </div>
          <div className="h-px bg-gray-100 my-8" />
        </div>
  
        <div>
          <h3 className={textStyles.sectionTitle}>Preferred Photography Styles</h3>
          <div className="flex flex-wrap gap-2 mt-4">
            {photographyStylesOptions.map((style) => (
              <button
                key={style}
                type="button"
                className={`px-4 py-2 rounded-full border transition-colors
                  ${
                    photographyStyles.includes(style)
                      ? "bg-indigo-500 text-white border-indigo-500"
                      : "bg-white text-gray-600 border-gray-300 hover:border-indigo-300"
                  }`}
                onClick={() => handleStyleToggle(style)}
              >
                {style}
              </button>
            ))}
          </div>
          <div className="h-px bg-gray-100 my-8" />
        </div>
  
        <div>
          <h3 className={textStyles.sectionTitle}>Photo Portfolio</h3>
          <div
            className="relative flex flex-col items-center justify-center w-full h-48
                      border-2 border-dashed border-gray-300 rounded-xl
                      bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer
                      group mt-4"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <Upload className="w-12 h-12 mb-3 text-gray-400 group-hover:text-indigo-500" />
              <p className="mb-2 text-sm text-gray-500 font-medium">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
            </div>
            <input
              id="photo-upload"
              type="file"
              multiple
              accept="image/*"
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              onChange={handlePhotoUpload}
            />
          </div>
  
          {photos.length > 0 && (
            <div className="grid grid-cols-4 gap-4 mt-6">
              {photos.map((photo, index) => (
                <div key={index} className="relative group">
                  <img
                    src={photo}
                    alt="Portfolio preview"
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center 
                            bg-black/40 opacity-0 group-hover:opacity-100 
                            transition-all duration-200 rounded-lg"
                  >
                    <button
                      onClick={() =>
                        setPhotos((prev) => prev.filter((_, i) => i !== index))
                      }
                      className="p-1.5 bg-red-500 text-white rounded-full 
                               hover:bg-red-600 transition-colors"
                      aria-label="Remove photo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
  
        <div className="flex justify-between pt-6">
          <button
            type="button"
            onClick={prevStep}
            className="px-6 py-2.5 rounded-xl font-semibold text-indigo-600 
                     border-2 border-indigo-500 hover:bg-indigo-50 
                     transition-colors duration-200"
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="px-6 py-2.5 rounded-xl font-semibold bg-indigo-500 text-white 
                     hover:bg-indigo-600 transition-colors duration-200 shadow-sm"
          >
            Next
          </button>
        </div>
      </div>
  
      {/* Import Dialog Modal */}
      {showImportDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-3">Import Instagram Media?</h3>
            <p className="text-gray-600 mb-6">
              Would you like to import your photos from Instagram to your portfolio?
              This will add them to your photo gallery.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowImportDialog(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
              >
                Skip
              </button>
              <button
                onClick={() => {
                  // Handle import logic here
                  setShowImportDialog(false);
                }}
                className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 font-medium"
              >
                Import Media
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDetails;
