
// src/components/HistorySection.js

import React from 'react';
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  Fade,
  Slide,
} from '@mui/material';

const History= () => {
  return (
    <Box sx={{ bgcolor: '#fff8f0', py: 6 }}>
      <Container>
        <Fade in timeout={1000}>
          <Paper elevation={3} sx={{ p: { xs: 3, md: 6 }, borderRadius: 3 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              gutterBottom
              color="primary"
              sx={{ textAlign: 'center' }}
            >
              History of Nalkheda Mata Mandir
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              textAlign="justify"
              sx={{ mb: 4 }}
            >
              Shree Baglamukhi Mata Mandir, located in Nalkheda (Madhya Pradesh), is one of the most
              important shrines dedicated to Goddess Baglamukhi — one of the ten Mahavidyas in
              Hinduism.
              <br /><br />
              It is believed that the temple was established over 500 years ago and is a major
              center for Tantrik sadhana and rituals. Devotees visit the temple to seek victory over
              enemies, protection from negative forces, and relief from legal problems.
              <br /><br />
              The temple is situated on the banks of the Lakhunder River and draws thousands of
              devotees during Navratri and special pujas.
            </Typography>

            {/* PHOTOS SECTION */}
            <Slide in direction="up" timeout={1000}>
              <Grid container spacing={2}>
                {[
                //   "https://upload.wikimedia.org/wikipedia/commons/4/41/Baglamukhi_Mata_Temple_Nalkheda.jpg",
                //   "https://www.drishtiias.com/images/uploads/1676797388_Baglamukhi%20Mata.jpg",
                //   "https://live.staticflickr.com/65535/53308380584_2e16a6d153_b.jpg",
                ].map((img, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Box
                      component="img"
                      src={img}
                      alt={`Temple ${i + 1}`}
                      sx={{
                        width: '100%',
                        borderRadius: 2,
                        boxShadow: 3,
                        transition: 'transform 0.4s ease',
                        '&:hover': {
                          transform: 'scale(1.05)',
                        },
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Slide>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default History;
