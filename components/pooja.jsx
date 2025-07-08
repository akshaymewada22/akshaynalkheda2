// src/components/PoojaAartiSection.js
import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Slide,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

// Your uploaded image URL (you can also import from local / public folder)
// import backgroundImage from "../components/mandir.webp";// Make sure to copy the image here

const poojas = [
  {
    title: "Morning Aarti",
    time: "5:30 AM",
    description: "Daily morning aarti offered to Mata Baglamukhi with traditional mantra chanting and diya lighting.",
  },
  {
    title: "Baglamukhi Anushthan",
    time: "On Request",
    description: "Powerful Tantrik ritual performed by priests for protection from enemies and victory in legal battles.",
  },
  {
    title: "Evening Aarti",
    time: "6:30 PM",
    description: "Evening aarti with bhajans and shankha sounds to invoke blessings from the Goddess.",
  },
  {
    title: "Navratri Special Pooja",
    time: "9 Days (Twice a year)",
    description: "Grand rituals, yagna, and spiritual sadhana during Navratri for divine grace and inner strength.",
  },
];

const PoojaAartiSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        py: 8,
        backgroundColor:' orgen',
        // backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        color: '#fff',
        zIndex: 1,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(249, 240, 240, 0.83)',
          zIndex: -1,
        },
      }}
    >
      <Container>
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
           sx={{ color: 'black' }}
        >
          Pooja & Aarti at Nalkheda Mata Mandir
        </Typography>
        <Typography
          variant="body1"
          textAlign="center"
          mb={5}
          sx={{ color: 'black' }}
        >
          Experience the divine energy through daily rituals and spiritual ceremonies.
        </Typography>

        <Grid container spacing={4}>
          {poojas.map((item, index) => (
            <Slide in direction="up" timeout={800 + index * 300} key={index}>
              <Grid item xs={12} sm={6} md={3}>
                <Card
                  sx={{
                    borderRadius: 3,
                    height: '100%',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    color: 'black',
                    transition: '0.3s',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-5px)',
                    },
                  }}
                  elevation={4}
                >
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AutoAwesomeIcon color="warning" />
                      <Typography variant="h6" fontWeight="bold">
                        {item.title}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                      <AccessTimeIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {item.time}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Slide>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PoojaAartiSection;

