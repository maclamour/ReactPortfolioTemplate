import React from 'react';
import Style from './Resume.module.scss'; // You can define the styling for Resume.module.scss
import Terminal from './Terminal';
import { Box } from '@mui/material';

export default function Resume() {
  function resumeText() {
    return (
      <>
        <p><span className={Style.green}>$</span> cat resume</p>
        <p>Downloading resume...</p>
        <a
          href="https://drive.google.com/uc?export=download&id=16LndCVBEPE2fdesz_QUwV7ADlCdATij2"
          className={Style.resumeLink}
          download
        >
          Download Resume
        </a>
      </>
    );
  }

  return (
    <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
      <Terminal text={resumeText()} />
    </Box>
  );
}
