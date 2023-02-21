import * as React from 'react';
import { Box} from "@mui/material";
import Hero from '../components/Hero';
import Main from '../components/Main';
import Members1 from "../components/Members1";
import Navbar1 from '../components/Navbar1';
import PreHeader from "../components/PreHeader";
import Testimonials1 from "../components/Testimonials1";
import Footer from "./Footer";

const Home = () => {
  return (
    <Box>
      <PreHeader/>
      <Navbar1/>
      <Hero />
      <Main/>
      <Testimonials1/>
     
      <Members1/>
      <Footer/> 
      
      {/* <Foters1/> */}
    </Box>
  );
};

export default Home;