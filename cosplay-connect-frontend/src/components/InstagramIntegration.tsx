import React, { useState } from "react";

interface InstagramProps {
  onFetchSuccess: (data: any) => void;
}

const InstagramIntegration: React.FC<InstagramProps> = ({ onFetchSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const connectInstagram = () => {
    const clientId = "YOUR_INSTAGRAM_CLIENT_ID";
    const redirectUri = "YOUR_REDIRECT_URI";

    const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;
    window.location.href = authUrl;
  };

  return (
    <div>
      <button
        onClick={connectInstagram}
        className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        disabled={loading}
      >
        {loading ? "Connecting..." : "Connect Instagram"}
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default InstagramIntegration;
