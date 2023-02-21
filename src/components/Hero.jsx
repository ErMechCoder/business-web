// import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroImage from '../img/simma/HeroImage.png'
// import { HeroCard2 } from "./HeroCard";
import OwlCarousel from 'react-owl-carousel';

const options = {

  loop: true,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 1,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,

    }
  },
};

// const DotBox = styled(Box)({
//   width: { xs: 300, md: 500 },
//   height: 20,
//   maxHeight: { xs: 20, md: 30 },
//   maxWidth: { xs: 320, md: 500 },
//   display: "flex",
//   ml: { xs: 20, md: 50 },
//   gap: 5,
//   alignItems: "center",
//   justifyItems: "center",
//   justifyContent: "center",
// });
// const Dot = styled(Box)({
//   width: 10,
//   height: 10,
//   display: "block",
//   borderRadius: '50%',
//   background: "#ffffff",

// });


const Hero = () => {
  return (
    <Box
      sx={{
        display: "block",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#ffffff",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: 600,
          width: "100%",
          display: "block",
          justifyContent: "center",

        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "50%", md: "40%" },
            padding: { xs: 1, sm: 2, md: 2 },

          }}
        >
          <Box sx={{
            width: 500,
            height: 200,
            maxHeight: { xs: 200, md: 250 },
            maxWidth: { xs: 350, md: 550 },
            mt: "40%",
            backgroundColor: "#112835", opacity: "0.8",
            borderRadius: 4,
            mb: 4
          }}>

            <OwlCarousel className={'owl-theme'} {...options}
            >
              <Box className='item'>
                  <Typography component="div" variant={"h6"} align="left"
                    sx={{
                      width: 'auto',
                      height: { xs: "20px", sm: "20px", md: "30px" },
                      px: { xs: 2, md: 2 },
                      pt: { xs: 2, md: 2 },
                      fontSize: { xs: "12px", sm: "12px", md: "16px" },
                      fontFamily: "NexaBold",
                      color: "#fff",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      zIndex: 780

                    }}
                  >
                    The J1939 Experts
                  </Typography>

                  <Typography variant="body1" align="left" color="#ffffff"
                    sx={{
                      mt: { xs: 1, sm: 1, md: 1 },
                      mb: { xs: 1, sm: 1, md: 2 },
                      px: { xs: 2, md: 2 },
                      zIndex: 780,
                      fontSize: { xs: "12px", sm: "12px", md: "14px" },
                      fontFamily: "NexaLight",
                      color: "rgb(255, 255, 255)",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      letterSpacing: 2
                    }}
                  >

                    Simma Software specializes in safety critical real-time embedded software development, including J1939, UDS, various bootloaders, XCP, LIN, J1708, and J1939 interface options for the automotive industry. We have a proven track record, solid reputation, and strive for our software development to be on time and defect-free.
                  </Typography>
                </Box>
            
                <Box className='item'>
                  <Typography component="div" variant={"h6"} align="left"
                    sx={{
                      width: 'auto',
                      height: { xs: "20px", sm: "20px", md: "30px" },
                      px: { xs: 2, md: 2 },
                      pt: { xs: 2, md: 2 },
                      fontSize: { xs: "12px", sm: "12px", md: "16px" },
                      fontFamily: "NexaBold",
                      color: "#fff",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      zIndex: 780

                    }}
                  >
                    The J1939 Experts
                  </Typography>

                  <Typography variant="body1" align="left" color="#ffffff"
                    sx={{
                      mt: { xs: 1, sm: 1, md: 1 },
                      mb: { xs: 1, sm: 1, md: 2 },
                      px: { xs: 2, md: 2 },
                      zIndex: 780,
                      fontSize: { xs: "12px", sm: "12px", md: "14px" },
                      fontFamily: "NexaLight",
                      color: "rgb(255, 255, 255)",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      letterSpacing: 2
                    }}
                  >

                    Simma Software specializes in safety critical real-time embedded software development, including J1939, UDS, various bootloaders, XCP, LIN, J1708, and J1939 interface options for the automotive industry. We have a proven track record, solid reputation, and strive for our software development to be on time and defect-free.
                  </Typography>
                </Box>
                <Box className='item'>
                  <Typography component="div" variant={"h6"} align="left"
                    sx={{
                      width: 'auto',
                      height: { xs: "20px", sm: "20px", md: "30px" },
                      px: { xs: 2, md: 2 },
                      pt: { xs: 2, md: 2 },
                      fontSize: { xs: "12px", sm: "12px", md: "16px" },
                      fontFamily: "NexaBold",
                      color: "#fff",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      zIndex: 780

                    }}
                  >
                    The J1939 Experts
                  </Typography>

                  <Typography variant="body1" align="left" color="#ffffff"
                    sx={{
                      mt: { xs: 1, sm: 1, md: 1 },
                      mb: { xs: 1, sm: 1, md: 2 },
                      px: { xs: 2, md: 2 },
                      zIndex: 780,
                      fontSize: { xs: "12px", sm: "12px", md: "14px" },
                      fontFamily: "NexaLight",
                      color: "rgb(255, 255, 255)",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      letterSpacing: 2
                    }}
                  >

                    Simma Software specializes in safety critical real-time embedded software development, including J1939, UDS, various bootloaders, XCP, LIN, J1708, and J1939 interface options for the automotive industry. We have a proven track record, solid reputation, and strive for our software development to be on time and defect-free.
                  </Typography>
                </Box>
                <Box className='item'>
                  <Typography component="div" variant={"h6"} align="left"
                    sx={{
                      width: 'auto',
                      height: { xs: "20px", sm: "20px", md: "30px" },
                      px: { xs: 2, md: 2 },
                      pt: { xs: 2, md: 2 },
                      fontSize: { xs: "12px", sm: "12px", md: "16px" },
                      fontFamily: "NexaBold",
                      color: "#fff",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      zIndex: 780

                    }}
                  >
                    The J1939 Experts
                  </Typography>

                  <Typography variant="body1" align="left" color="#ffffff"
                    sx={{
                      mt: { xs: 1, sm: 1, md: 1 },
                      mb: { xs: 1, sm: 1, md: 2 },
                      px: { xs: 2, md: 2 },
                      zIndex: 780,
                      fontSize: { xs: "12px", sm: "12px", md: "14px" },
                      fontFamily: "NexaLight",
                      color: "rgb(255, 255, 255)",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      letterSpacing: 2
                    }}
                  >

                    Simma Software specializes in safety critical real-time embedded software development, including J1939, UDS, various bootloaders, XCP, LIN, J1708, and J1939 interface options for the automotive industry. We have a proven track record, solid reputation, and strive for our software development to be on time and defect-free.
                  </Typography>
                </Box>
                <Box className='item'>
                  <Typography component="div" variant={"h6"} align="left"
                    sx={{
                      width: 'auto',
                      height: { xs: "20px", sm: "20px", md: "30px" },
                      px: { xs: 2, md: 2 },
                      pt: { xs: 2, md: 2 },
                      fontSize: { xs: "12px", sm: "12px", md: "16px" },
                      fontFamily: "NexaBold",
                      color: "#fff",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      zIndex: 780

                    }}
                  >
                    The J1939 Experts
                  </Typography>

                  <Typography variant="body1" align="left" color="#ffffff"
                    sx={{
                      mt: { xs: 1, sm: 1, md: 1 },
                      mb: { xs: 1, sm: 1, md: 2 },
                      px: { xs: 2, md: 2 },
                      zIndex: 780,
                      fontSize: { xs: "12px", sm: "12px", md: "14px" },
                      fontFamily: "NexaLight",
                      color: "rgb(255, 255, 255)",
                      textTransform: "uppercase",
                      lineHeight: 1.2,
                      letterSpacing: 2
                    }}
                  >

                    Simma Software specializes in safety critical real-time embedded software development, including J1939, UDS, various bootloaders, XCP, LIN, J1708, and J1939 interface options for the automotive industry. We have a proven track record, solid reputation, and strive for our software development to be on time and defect-free.
                  </Typography>
                </Box>
              



            </OwlCarousel>

          </Box>

        </Box>

      </Box>
    </Box>
  )
}

export default Hero;
