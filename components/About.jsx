import React from "react";
import { Box, Card, CardContent, Typography, Grid } from "@mui/material";
import content from "../data/content.json";

const About = () => (
  <Box id="about" sx={{ p: 3 }}>
    <Typography variant="h4" color="#FF4F0F" gutterBottom>About</Typography>
    <Grid container spacing={2}>
      {content.about.map((item) => (
        <Grid item xs={12} md={4} key={item.title}>
          <Card id={item.title.toLowerCase().replace(/\s/g, "")}>
            <CardContent >
              <Typography variant="h6">{item.title}</Typography>
              <Box>
                <Typography variant="body2" >{item.description}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>


//   <Box id="about" sx={{ p: 3 }}>
//     <Typography variant="h4" color="#FF4F0F" gutterBottom>About</Typography>
//     <Grid container spacing={2}>
//       {content.about.map((item) => (
//         <Grid item xs={12} md={4} key={item.title}>
//           <Card id={item.title.toLowerCase().replace(/\s/g, "")}>
//             <CardContent >
//               <Typography variant="h6">{item.title}</Typography>
//               <Box>
//                 <Typography variant="body2" >{item.description}</Typography>
//               </Box>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   </Box>

);

export default About;
