import React, { useState } from 'react';

export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false);

  function handleDownloadClick() {
    setIsDownloading(true);
    // Simulate a delay (optional)
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000); // 2 seconds (adjust as needed)

    // Use the actual download link
    window.location.href =
      'https://drive.google.com/uc?export=download&id=16LndCVBEPE2fdesz_QUwV7ADlCdATij2';
  }

  return (
    <div>
      {isDownloading ? (
        <p>Downloading resume...</p>
      ) : (
        <a href="#" onClick={handleDownloadClick}>
          Download Resume
        </a>
      )}
    </div>
  );
}
