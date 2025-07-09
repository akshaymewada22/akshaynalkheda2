import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent
} from '@mui/material';
import { motion } from 'framer-motion';

const newsItems = [
  {
    title: "नवरात्रि पूजा प्रारंभ",
    image: "https://imagesvs.oneindia.com/hi/img/2024/10/matabaglamukhitemplenalkheda-1728049407.jpg",
    description: "नालखेड़ा माता मंदिर में नवरात्रि की पूजा विधिवत रूप से प्रारंभ हो चुकी है। भक्तों की भारी भीड़ उमड़ी।"
  },
  {
    title: "आरती समय में बदलाव",
    image: "https://baglamukhipooja.com/wp-content/uploads/2025/01/IMG-20230724-WA0020-1.jpg",
    description: "मंदिर समिति ने आरती के समय में बदलाव की घोषणा की है। अब शाम की आरती 7:30 बजे होगी।"
  },
  {
    title: "मंदिर की सजावट",
    image: "https://pitambara.org/wp-content/uploads/elementor/thumbs/Baglamukhi-mata-mandir-1-qnvmw34mcw1ojm8anm119wuqdgo8blrz7wa9oai6fo.jpg",
    description: "त्योहारों को देखते हुए माता मंदिर को फूलों व रोशनी से सजाया गया है, भक्तों में उत्साह।"
  }
];

function Newsdata() {
  return (
    <>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: '#6a1b9a' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Nalkheda Mata Mandir News
          </Typography>
        </Toolbar>
      </AppBar>

      {/* News Section */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          मंदिर की ताज़ा खबरें
        </Typography>

        <Grid container spacing={4}>
          {newsItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card sx={{ height: "100%", display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    height="200"
                  />
                  <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <footer style={{ marginTop: "40px", background: "#f0f0f0", padding: "20px", textAlign: "center" }}>
        <Typography variant="body2">
          © 2025 Nalkheda Mata Mandir. सभी अधिकार सुरक्षित।
        </Typography>
      </footer>
    </>
  );
}

export default Newsdata;


