import React from "react";
import { Box, Typography } from "@mui/material";

const Location = () => (
  <Box id="location" sx={{ p: 3 }}>
    <Typography variant="h4" color="#FF4F0F">Location</Typography>
    <Box mt={2}>
      <iframe
        title="Mandir Location"
        width="100%"
        height="300"
        frameBorder="0"
        style={{ border: 0 }}
        // src="https://www.google.com/maps/search/nalkheda+mandir+madhya+pradesh/@23.8414008,76.2359548,17z?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.9113066848713!2d76.1573892!3d23.4166789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3964a4f5a6f5c1db%3A0x4e4a75fda0c84cf3!2sNalkheda%20Mandir!5e0!3m2!1sen!2sin!4v1652618428519"
        allowFullScreen
      ></iframe>
    </Box>
  </Box>
);

export default Location;
