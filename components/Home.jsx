import React from "react";
import { Box, Typography, Stack } from "@mui/material";

const Home = () => (
  <Box>
    <Box
      sx={{
        backgroundImage: `url('/assets/templeBG.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "94.3vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* Dark overlay to improve text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.79)", // 50% dark overlay
          zIndex: 1,
        }}
      />

      <Box sx={{ maxWidth: 800, zIndex: 2, color: "white" }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: "bold",
            fontSize: { xs: "2.5rem", md: "5rem" },
            mb: 2,
          }}
        >
          Welcome to Nalkheda Mandir
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center">
          {/* Optional buttons here */}
        </Stack>
      </Box>
    </Box>
  </Box>
);

export default Home;
