import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box sx={{
    position: "fixed", bottom: 0, width: "100%", backgroundColor: "#FF4F0F", color: "#fff",
    textAlign: "center", p: 1
  }}>
    <Typography variant="body2">© 2025 Arpana Infotech solutions.</Typography>
  </Box>
);

export default Footer;
