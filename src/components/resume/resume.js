import React, { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    // Use the actual download link on page load
    window.location.href =
    'https://drive.google.com/uc?export=download&id=1fTghZF6hsGwMVrRIHEkFJsU-A3BFXr5Q';


    // Redirect back to the home page after a delay (adjust the delay as needed)
    setTimeout(() => {
      window.location.href = '/'; // Replace with the URL of your home page
    }, 2000); // 2 seconds (adjust as needed)
  }, []);

  return (
    <div>
      <p>Downloading resume...</p>
    </div>
  );
}
