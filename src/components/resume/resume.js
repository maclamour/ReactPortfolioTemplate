import React, { useEffect } from 'react';

export default function Resume() {
  useEffect(() => {
    // Use the actual download link on page load
    window.location.href =
      'https://drive.google.com/uc?export=download&id=16LndCVBEPE2fdesz_QUwV7ADlCdATij2';
  }, []);

  return (
    <div>
      <p>Downloading resume...</p>
    </div>
  );
}

