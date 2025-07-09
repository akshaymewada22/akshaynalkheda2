// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Location from "./components/Location";
import { Box } from "@mui/material";
import TempleCards from "./components/TempleCards";
import History from "./components/History";
import PoojaAartiSection from "./components/pooja";
import Newsdata from "./components/Newsdata";




const App = () => (
  <Box sx={{ pb: 6 }}>
    <Navbar />
    <Home />
   <TempleCards/>
   <History/>
   <PoojaAartiSection/>
   <Newsdata/>
    <About />
    <Gallery />
    <Contact />
    <Location />
    <Footer />
  </Box>
);

export default App;
