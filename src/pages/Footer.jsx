import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import footerimg from '../img/simma/Footer-logo.jpg'
import { NavLink, Link } from 'react-router-dom';
import {  Typography } from '@mui/material';
// import social1 from '../img/simma/email-logo-icon.png'
// import social2 from '../img/simma/linkedin-logo-icon.png'
// import social3 from '../img/simma/facebook-logo-icon.png'
import FlexGrid from '../components/FlexGrid';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor: '#12344D',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  textAlign: 'center',
  elevation: 0,
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Box sx={{
      width: "100%", flexGrow: 1,

      height: { xs: "100%", sm: "100%", md: "auto" },

      backgroundColor: '#12344D', mb: { xs: 2, sm:2, md: 1 }
    }}>


      <Grid container  >
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display:'block',
            alignItems:'center',
            alignContent:"center",
            justifyContent:"center",
            // mt: { xs: 2, sm: 2, md:2 },
            // mb: { xs: 2, sm: 2, md:2 },
            backgroundColor:"#27abe1"
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height:30,
              maxHeight: { xs:30, md:35 },
              maxWidth: { xs: "100%", sm: "100%", md: "100%" },
              mt: { xs:1, sm:1, md:1 },
              gap: 2,
              alignItems:'center',
              alignContent:"center",
              // bgcolor:"red"
            }}

          >
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "12px", md: "32px" },
                fontWeight: 400,
                lineHeight: 1,
                color: "#ffffff",
                ml: { xs:1, sm:"20%", md:"23%"},
              }}

             component="div"
              variant="h5"
            >Subscribe to our newsletter</Typography>


            <Box><input /></Box>

            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "12px", md: "18px" },
                cursor:"pointer"
              }}
              fontWeight={600}
              color="#ffffff"
              variant="h6"
              component="div"
              lineHeight={1.2}
              fontSize="18px"
            >Sign Up</Typography>

          </Box>
        </Box>

        <Grid xs={12} md={5} lg={3}>
          <Item sx={{ mt: { xs:2,md: 8 },ml: { xs:2,sm:2} }}>
            <Box sx={{ w: { xs:"100%"}}}  flex={1}>
              <Box
               
                component="img"
                sx={{
                  width: 243,
                  height: 50,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                  ml: { xs:"-30%", sm:"-30%"}
                }}
                alt="The house from the offer."
                src={footerimg}
              />
            </Box>

          </Item>
        </Grid>
        <Grid container xs={10} md={6} lg={8} rowSpacing={2} m={2}>
          <Grid xs={6} lg={3}>
            <Item>
              <Box
                display="block"
                width={200}
                height={120}
                textAlign="left"
              >
                <Box>
                  <NavLink style={{ textDecoration: 'none' }} to={"/about-us"}>
                    <Typography component={"div"} color="#ffffff"

                      lineHeight={1.2}
                      mt={2}
                    >
                      ABOUT US
                    </Typography>
                  </NavLink>
                </Box>
                <Box>
                  <NavLink style={{ textDecoration: 'none' }} to={"/contact-us"}>
                    <Typography component={"div"} color="#ffffff"

                      lineHeight={1.2}
                      mt={1}
                    >
                      CONTACT US
                    </Typography>

                  </NavLink>
                </Box>

                <Box color="#818498" mt={1}
                  sx={{ fontSize: { xs: "10px", sm: "10px", md: "14px" } ,  fontFamily:"NexaLight"}}
                  
                >

                  Call Toll Free:<br />
                  888-256-3828<br />
                  sales@simmasoftware.com

                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box

                display="block"
                width={200}

                textAlign="left"
                height={120}
              >
                <Box>
                  <NavLink style={{ textDecoration: 'none' }} to={"/home"}>
                    <Typography component={"div"} color="#ffffff"

                      lineHeight={1.2}
                      mt={1}
                    >
                      HOME
                    </Typography>
                  </NavLink>
                </Box>
                <Box>
                  <NavLink style={{ textDecoration: 'none' }} to={"/product"}>
                    <Typography component={"div"} color="#ffffff"

                      lineHeight={1.2}
                      mt={1}
                    >
                      PRODUCTS
                    </Typography>

                  </NavLink>
                </Box>
                <Box>
                  <NavLink style={{ textDecoration: 'none' }} to={"/experience"}>
                    <Typography component={"div"} color="#ffffff"

                      lineHeight={1.2}
                      mt={1}
                    >
                      EXPERIENCE
                    </Typography>
                  </NavLink>
                </Box>
                <Box>
                  <NavLink style={{ textDecoration: 'none' }} to={"/testimonials"}>
                    <Typography component={"div"} color="#ffffff"

                      lineHeight={1.2}
                      mt={1}
                    >
                      TESTIMONIALS
                    </Typography>

                  </NavLink>
                </Box>


              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box

                display="block"
                width={200}
                textAlign="left"
                height={120}

              >
                <Box>
                  <NavLink style={{ textDecoration: 'none' }} to={"/uds"}>
                    <Typography component={"div"} color="#ffffff"

                      lineHeight={1.2}
                      mt={1}
                    >
                      UDS
                    </Typography>
                  </NavLink>
                </Box>
                <Box>
                  <NavLink style={{ textDecoration: 'none' }} to={"/j1939"}>
                    <Typography component={"div"} color="#ffffff"

                      lineHeight={1.2}
                      mt={1}
                    >
                      J1939
                    </Typography>

                  </NavLink>
                </Box>
                <Box>
                  <NavLink style={{ textDecoration: 'none' }} to={"/canopen"}>
                    <Typography component={"div"} color="#ffffff"

                      lineHeight={1.2}
                      mt={1}
                    >
                      CANOPEN
                    </Typography>
                  </NavLink>
                </Box>
                <Box>
                  <NavLink style={{ textDecoration: 'none' }} to={"/adapters"}>
                    <Typography component={"div"} color="#ffffff"

                      lineHeight={1.2}
                      mt={1}
                    >
                      ADAPTERS
                    </Typography>

                  </NavLink>
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid xs={6} lg={3}>
            <Item>
              <Box

                display="block"
                width={100}
                textAlign="center"
                height={120}
              >
                <Typography component={"div"} color="#ffffff" m={1}

                  lineHeight={1.2}
                  mb={1}
                >Follow Us </Typography>

                <Box display={"block"} m={2}>
                  <FlexGrid gap={2}>
                    <Box width="50px" height="30px" > <Link to={"/facebook"}><FacebookIcon
                      style={{ fill: "#fff", fontSize: "30px" }} />
                    </Link></Box>
                    <Box width="50px" height="30px" ><Link to={"/linkedin"}><LinkedInIcon style={{ fill: "#0A66C2", fontSize: "30px" }} /></Link></Box>
                    <Box width="50px" height="30px" ><Link to={"/twitter"}><TwitterIcon style={{ fill: "#00acee", fontSize: "30px" }} /></Link></Box>
                  </FlexGrid>

                </Box>



              </Box>
            </Item>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={2}
        sx={{  mt: { xs:1, sm: 1, md: 1 } }} 
        >
          <Item >
            <Box sx={{ textAlign: "center", mb: { xs:1, sm: 1, md: 1 } }}  >
              <Typography component={"div"} variant='h6' fontSize="18px" color="#818498"

                lineHeight={1.2}
                sx={{ fontSize: { xs: "10px", sm: "10px", md: "18px" },  fontFamily:"NexaLight" }}
              >
                The J1939, UDS, CANopen Experts | Copyright 2023
              </Typography>
            </Box>

          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}