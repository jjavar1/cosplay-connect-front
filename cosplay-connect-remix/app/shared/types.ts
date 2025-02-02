export interface UserData {
  name: string;
  bio: string;
  tags: string[];
  events: string[];
  photos: string[];
  socialLinks: {
    instagram?: {
      profileUrl: string; // Public URL of the Instagram profile
      username: string;  // Instagram username
    };
  };
}