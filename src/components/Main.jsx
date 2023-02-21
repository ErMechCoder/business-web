
import { Box, Container, Typography } from "@mui/material";
import BgLiner from '../img/simma/BG-Liner.jpg'
import FlexBetween from "./FlexBetween";
import FlexGrid from "./FlexGrid";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Main = () => {
  return (
    <Box
      sx={{
        display: "block",
        justifyItems: "center",
        alignItems: 'center',
        mb: { xs: 4, sm: 4, md: 2 }
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${BgLiner})`,
          backgroundRepeat: "no-repeat",
          backgroundColor: "#ffffff",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: { xs: "auto", sm: "auto", md: "100%" },
         width: "100%",
          display: "block",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: 'center'
        }}
      >
        <Container>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "100%" },
              height: { xs: 230, sm: 350, md: 400 },
              padding: { xs: 2, sm: 2, md: 2 },
              zIndex: 97,
              // bgcolor:"pink"
            }}
          >
            <Box sx={{
              width: { xs: 300, sm: 445, md: 600 },
              height: 350,
              maxHeight: { xs: 150, sm: 250, md: 250 },
              maxWidth: { xs: 310, sm: 450, md: 650 },
              margin: "auto",
              // backgroundColor: "red",
              opacity: "0.8",
              mt: { xs: 1, sm: 1, md:10 },
              mb: 2
            }}>
              <Box
                sx={{
                  width: { xs: 300, sm: 445, md: 600 },
                  height: 250,
                  maxHeight: { xs: 150, sm: 250, md: 250 },
                  maxWidth: { xs: 310, sm: 450, md: 650 },
                  //  bgcolor: 'yellow'
                }}
              >
                <Typography variant={"h6"} align="center"
                  component="div"
                  sx={{
                    px: { xs: 1, md: 1 },
                    pt: { xs: 1, md: 1 },
                    fontSize: { xs: "22px", sm: "22px", md: "26px" },

                    color: "rgb(16, 112, 182)",
                    lineHeight: "1.2",
                    textAlign: "center",

                    // bgcolor: 'blue'
                  }}
                >
                  Experience Summary
                </Typography>


                <FlexBetween
                  sx={{
                    mt: {  md: 2 },
                    // bgcolor: "#000",

                  }}
                >
                  <Box sx={{ display: 'block', zIndex: 97 }}>
                    <FlexGrid
                      sx={{  mt: { xs:1, md: 2 }}}
                    ><ArrowForwardIosIcon style={{
                      fontSize: "0.6rem",
                      fontWeight: 800,
                      color: "#000"
                    }} />
                      <Typography variant="body1" align="left" color="#ffffff"
                        component="div"
                        sx={{
                          px: { xs: 1, md: 1 },
                          fontSize: { xs: "12px", sm: "12px", md: "16px" },
                          fontWeight: 400,
                          color: "#000",
                          lineHeight: "1.2",

                        }}
                      >
                        1000 Global Customers

                      </Typography>
                    </FlexGrid>
                    <FlexGrid   sx={{  mt: {  md: 2 }}}>
                      <ArrowForwardIosIcon
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 800,
                          color: "#000"
                        }}
                      />
                      <Typography variant="body1" align="left" color="#ffffff"
                        component="div"
                        sx={{
                          px: { xs: 1, md: 1 },
                          fontSize: { xs: "12px", sm: "12px", md: "16px" },

                          color: "#000",
                          lineHeight: "1.2",
                          fontWeight: 400,
                        }}
                      >
                        300 CAN Device Drivers
                      </Typography>
                    </FlexGrid>
                    <FlexGrid   sx={{  mt: {  md: 2 }}}><ArrowForwardIosIcon
                      style={{
                        fontSize: "0.6rem",
                        fontWeight: 400,
                        color: "#000"
                      }} />

                      <Typography variant="body1" align="left" color="#ffffff"
                        component="div"
                        sx={{
                          px: { xs: 1, md: 1 },
                          fontSize: { xs: "12px", sm: "12px", md: "16px" },

                          color: "#000",
                          lineHeight: "1.2",
                          fontWeight: 400,
                        }}
                      >
                        60 Microcontrollers & DSPs
                      </Typography>
                    </FlexGrid>
                    <FlexGrid   sx={{  mt: {  md: 2 }}}><ArrowForwardIosIcon style={{
                      fontSize: "0.6rem",
                      fontWeight: 400,
                      color: "#000"
                    }} />

                      <Typography variant="body1" align="left" color="#ffffff"
                        component="div"
                        sx={{
                          px: { xs: 1, md: 1 },
                          fontSize: { xs: "12px", sm: "12px", md: "16px" },

                          color: "#000",
                          lineHeight: "1.2",
                          fontWeight: 400,
                        }}
                      >
                        60 Microcontrollers & DSPs
                      </Typography>
                    </FlexGrid>
                  </Box>
                  <Box sx={{ display: 'block' }}>
                    <FlexGrid   sx={{  mt: {xs:1, md: 2 }}}><ArrowForwardIosIcon style={{
                      fontSize: "0.6rem",
                      fontWeight: 400,
                      color: "#000"
                    }} />
                      <Typography variant="body1" align="left" color="#ffffff"
                        component="div"
                        sx={{
                          px: { xs: 1, md: 1 },
                          fontSize: { xs: "12px", sm: "12px", md: "16px" },

                          color: "#000",
                          lineHeight: "1.2",
                          fontWeight: 400,
                        }}
                      >
                        500 Protocol Stacks
                      </Typography></FlexGrid>
                    <FlexGrid   sx={{  mt: {  md: 2 }}}><ArrowForwardIosIcon style={{
                      fontSize: "0.6rem",
                      fontWeight: 400,
                      color: "#000"
                    }} />
                      <Typography variant="body1" align="left" color="#ffffff"
                        component="div"
                        sx={{
                          px: { xs: 1, md: 1 },
                          fontSize: { xs: "12px", sm: "12px", md: "16px" },

                          color: "#000",
                          lineHeight: "1.2",
                          fontWeight: 400,

                        }}
                      >
                        75 Flash Bootloaders
                      </Typography></FlexGrid>
                    <FlexGrid   sx={{  mt: {  md: 2 }}}>
                      <ArrowForwardIosIcon fontSize={"10px"}
                        style={{
                          fontSize: "0.6rem",
                          fontWeight: 400,
                          color: "#000"
                        }}
                      />
                      <Typography variant="body1" align="left" color="#ffffff"
                        component="div"
                        sx={{
                          px: { xs: 1, md: 1 },
                          fontSize: { xs: "12px", sm: "12px", md: "16px" },

                          color: "#000",
                          lineHeight: "1.2",
                          fontWeight: 400,
                        }}
                      >
                        75 Flash Bootloaders
                      </Typography></FlexGrid>
                    <FlexGrid   sx={{  mt: {  md: 2 }}}> <Typography variant="body1" align="right" color="#ffffff"
                      component="div"
                      sx={{
                        px: { xs: 1, md: 1 },
                        fontSize: { xs: "12px", sm: "12px", md: "16px" },

                        color: "rgb(56, 162, 220)",
                        lineHeight: "1.2",
                        fontWeight: 400,
                        textDecoration: "underline",
                        ml: 2
                      }}
                    >
                      more details
                    </Typography></FlexGrid>
                  </Box>
                </FlexBetween>

              </Box>
            </Box>
          </Box>
          <hr style={{ width: '49%', height: '2px', margin: 'auto' }} />
          <Box
            sx={{
              width: { xs: "auto", sm: "100%", md: "100%" },
              height: 300,
              maxHeight: { xs: 220, sm: 220, md: 300 },
              padding: { xs: 2, sm: 2, md: 2 },
              zIndex: 101
              //bgcolor:"pink"
            }}
          >
            <Box sx={{
              width: { xs: 300, sm: 445, md: 600 },
              height: 200,
              maxHeight: { xs: 180, sm: 180, md: 210 },
              maxWidth: { xs: 310, sm: 450, md: 650 },
              margin: "auto",
              // backgroundColor: "red",
              opacity: "0.8",
              mt: { xs: 1, sm: 1, md: 2 },
              mb: 2
            }}>
              <Box
                sx={{
                  width: { xs: 300, sm: 445, md: 600 },
                  height: 200,
                  maxHeight: { xs: 180, sm: 180, md: 210 },
                  maxWidth: { xs: 310, sm: 450, md: 650 },
                  // bgcolor: 'yellow'
                }}
              >
                <Typography variant={"h6"} align="left"
                  component="div"
                  sx={{
                    px: { xs: 1, md: 1 },
                    pt: { xs: 1, md: 1 },
                    fontSize: { xs: "22px", sm: "22px", md: "26px" },

                    color: "rgb(16, 112, 182)",
                    lineHeight: "1.2",
                    textAlign: "center",
                    fontWeight: 600,

                  }}
                >
                  Achievements
                </Typography>


                <FlexBetween
                  sx={{
                    mt: 2,
                    // bgcolor: "#000",

                  }}
                >
                  <Typography variant="body1" align="left" color="#ffffff"
                    sx={{
                      px: { xs: 1, md: 2 },
                      fontSize: { xs: "14px", sm: "14px", md: "20px" },
                      fontFamily: "NexaLight",
                      color: "#000",
                      fontWeight: 400,
                      lineHeight: "1.2",
                    }}
                  >
                    We’ve led or assisted with more than 1000 embedded systems, 500 CAN bus designs, including <span className="text-blue">NMEA 2000</span>, designs. Also, we design <span className="text-blue">wireless J1939 to WiFi, J1939 to RS-232, J1939 to USB, CAN Bus to Bluetooth</span> and ELD adapters
                  </Typography>
                </FlexBetween>

              </Box>
            </Box>
          </Box>
          <hr style={{ width: '49%', height: '2px', margin: 'auto' }} />
          <Box
            sx={{
              width: { xs: "auto", sm: "100%", md: "100%" },
              height: 300,
              maxHeight: { xs: 220, sm: 220, md: 300 },
              padding: { xs: 2, sm: 2, md: 2 },
              zIndex: 101
              // bgcolor:"pink"
            }}
          >
            <Box sx={{
              width: { xs: 300, sm: 445, md: 600 },
              height: 200,
              maxHeight: { xs: 180, sm: 180, md: 210 },
              maxWidth: { xs: 310, sm: 450, md: 650 },
              margin: "auto",
              //backgroundColor: "red", 
              opacity: "0.8",
              mt: { xs: 1, sm: 1, md: 2 },
              mb: 2
            }}>
              <Box
                sx={{
                  width: { xs: 300, sm: 445, md: 600 },
                  height: 200,
                  maxHeight: { xs: 180, sm: 180, md: 210 },
                  maxWidth: { xs: 310, sm: 450, md: 650 },
                  // bgcolor: 'yellow'
                }}
              >
                <Typography variant={"h6"} align="left"
                  component="div"
                  sx={{
                    px: { xs: 1, md: 1 },
                    pt: { xs: 1, md: 1 },
                    fontSize: { xs: "22px", sm: "22px", md: "26px" },

                    color: "rgb(16, 112, 182)",
                    lineHeight: "1.2",
                    textAlign: "center",
                    fontFamily: 600,
                  }}
                >
                  The J1939 Experts
                </Typography>


                <FlexBetween
                  sx={{
                    mt: 2,
                    //    bgcolor: "#000",

                  }}
                >
                  <Typography variant="body1" align="left" color="#ffffff"
                    sx={{
                      px: { xs: 1, md: 2 },
                      fontSize: { xs: "14px", sm: "14px", md: "20px" },
                      fontFamily: "NexaLight",
                      color: "#000",
                      fontWeight: 400,
                      lineHeight: "1.2",
                    }}
                  >
                    Simma Software specializes in safety critical real-time embedded software development, including J1939, UDS, various <span className="text-blue">bootloaders, XCP, LIN, J1708, and J1939 interface </span> options for the automotive industry. We have a proven track record, solid reputation, and strive for our software development to be on time and defect-free.
                  </Typography>
                </FlexBetween>

              </Box>
            </Box>
          </Box>

        </Container>

      </Box>
    </Box>
  )
}

export default Main;
