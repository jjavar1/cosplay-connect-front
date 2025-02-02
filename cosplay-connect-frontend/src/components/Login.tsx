// TestLogin.tsx
import { useEffect } from 'react';

declare global {
  interface Window {
    handleCredentialResponse: (response: any) => void;
  }
}

export default function TestLogin() {
  useEffect(() => {
    // Load Google's OAuth script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Define the callback function
    window.handleCredentialResponse = (response) => {
      console.log("Encoded JWT ID token: ", response.credential);
      
      // Send to your backend
      fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ credential: response.credential }),
      })
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        // Store the JWT token
        localStorage.setItem('token', data.token);
      })
      .catch(error => console.error('Error:', error));
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-2xl font-bold">Test Google Login</h1>
      
      <div
        id="g_id_onload"
        data-client_id="YOUR_GOOGLE_CLIENT_ID"
        data-callback="handleCredentialResponse"
        data-auto_prompt="false"
      />
      <div
        className="g_id_signin"
        data-type="standard"
        data-size="large"
        data-theme="outline"
        data-text="sign_in_with"
        data-shape="rectangular"
        data-logo_alignment="left"
      />

      <div className="mt-4">
        <button 
          onClick={() => {
            const token = localStorage.getItem('token');
            if (!token) {
              console.log('No token found');
              return;
            }
            
            // Test protected endpoint
            fetch('http://localhost:5000/api/test/me', {
              headers: {
                'Authorization': `Bearer ${token}`
              }
            })
            .then(res => res.json())
            .then(data => console.log('Protected endpoint response:', data))
            .catch(error => console.error('Error:', error));
          }}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Test Protected Endpoint
        </button>
      </div>
    </div>
  );
}