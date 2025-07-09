// src/components/TempleCards.js
import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import TempleIcon from '@mui/icons-material/TempleHindu';

const temples = [

    {
    name: "Shree Chintaman Ganesh",
    description: "Chintaman Ganesh is the biggest temple of Lord Ganesha in Ujjain.",
    gradient: "linear-gradient(to right, #43cea2, #185a9d)"
  },
   

  {
    name: 'Shree Harsiddhi Mata',
    description: 'One of the 51 major Shaktipeeths of India, situated near Mahakaleshwar Temple.',
    gradient: 'linear-gradient(to right, #ee0979, #ff6a00)',
  },
  {
    name: 'Shree Shani Maharaj',
    description: 'Very old temple known as Shani Temple in Ujjain situated on the banks of River Shipra.',
    gradient: 'linear-gradient(to right, #f7971e, #ffd200)',
  },
  {
    name: 'Shree Mangalnath',
    description: 'Dedicated to Lord Shiva, Mangalnath Temple is a greatly respected holy place in Ujjain.',
    gradient: 'linear-gradient(to right, #56ccf2, #2f80ed)',
  },
];

const TempleCards = () => {
  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ width: '100%' }}>
        <Grid container spacing={4} justifyContent="center">
          {temples.map((temple, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} >
              <Card 
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  textAlign: 'center',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <Box
                  sx={{
                    background: temple.gradient,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    margin: '20px auto 10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TempleIcon sx={{ fontSize: 40, color: '#fff' }} />
                </Box>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {temple.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {temple.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TempleCards;

