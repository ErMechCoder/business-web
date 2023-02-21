


// import Home from './pages/Home';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Home1 from './pages/Home1';
import { Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'NexaBold',
      textTransform: 'none',
    
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ w: "100%", height: "100%", display: "block" }}>
 
        <BrowserRouter>
          <Routes>
         
            <Route exact path="/" element={<Home1/>} />

          </Routes>
        </BrowserRouter>


      </Box>
    </ThemeProvider>

  );
}

export default App;
