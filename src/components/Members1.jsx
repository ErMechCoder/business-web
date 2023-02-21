
import { Box, Container, Typography} from "@mui/material";
import FlexGrid from "./FlexGrid";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Members1 = () => {
    return (
        <Box
            sx={{
                display: "block",
                justifyItems: "center",
                alignItems: 'center',
                backgroundColor: "#eef8f9"
            }}
        >
            <Box
                sx={{

                    // backgroundColor: "blue",
                    height: { xs: 250, sm: 250, md: 350 },
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
                            width: { xs: "auto", sm: "100%", md: "100%" },
                            height: { xs: 250, sm: 250, md: 350 },
                            py: { xs: 1, sm: 1, md: 1 },
                            // bgcolor: "pink"
                        }}
                    >
                        <Box sx={{
                            width: { xs: 300, sm: 445, md: 600 },
                            height: 160,
                            maxHeight: { xs: 200, sm: 120, md: 180 },
                            maxWidth: { xs: 450, sm: 450, md: 650 },
                            margin: "auto",
                            //backgroundColor: "red",
                            opacity: "0.8",
                            mt: { xs: 2, sm: 2, md: 8 },
                            mb: { xs: 2, sm: 2, md: 8 }
                        }}>
                            <Box
                                sx={{
                                    width: { xs: 300, sm: 445, md: 600 },
                                    height: 160,
                                    maxHeight: { xs: 200, sm: 120, md: 180 },
                                    maxWidth: { xs: 450, sm: 450, md: 650 },
                                    mt: { xs: 4, sm: 4, md: 8 },
                                    // bgcolor: 'yellow'
                                }}
                            >
                                <Typography variant={"h6"} align="left"
                                    component="div"
                                    sx={{
                                        px: { xs: 1, md: 1 },
                                        pt: { xs: 1, md: 1 },
                                        fontSize: { xs: "22px", sm: "22px", md: "28px" },
                                        lineHeight:1,
                                        color: "rgb(16, 112, 182)",
                                        textAlign: "center",
                                     fontWeight:600,

                                        // bgcolor: 'blue'
                                    }}
                                >
                                    Membership
                                </Typography>


                                <Box
                                    sx={{
                                        mt: 2,
                                        display: "flex",
                                        justifyContent: "space-between",

                                    }}
                                >
                                    <Box sx={{ display: 'block' }}>
                                        <FlexGrid mt={1}><ArrowForwardIosIcon style={{
                          fontSize:"0.6rem",
                          fontWeight:800,
                          color:"#000"
                        }}/>
                                            <Typography variant="body1" align="left" color="#ffffff"
                                                component="div"
                                                sx={{
                                                    px: { xs: 1, md: 1 },
                                                    fontSize: { xs: "10px", sm: "12px", md: "16px" },
                                        
                                                    lineHeight: 1.2,
                                                    color: "#000",
                                                    fontWeight:600,
                                                    mt:1
                                                }}
                                            >
                                                TI DSP 3rd Party Network

                                            </Typography>
                                        </FlexGrid>
                                        <FlexGrid mt={1}>
                                            <ArrowForwardIosIcon style={{
                          fontSize:"0.6rem",
                          fontWeight:800,
                          color:"#000"
                        }}/>
                                            <Typography variant="body1" align="left" color="#ffffff"
                                                component="div"
                                                sx={{
                                                    px: { xs: 1, md: 1 },
                                                    fontSize: { xs: "10px", sm: "12px", md: "16px" },
                                           
                                                    lineHeight: 1.2,
                                                    color: "#000",
                                                    fontWeight:600,
                                                    mt:1
                                                }}
                                            >
                                                STMicroelectronics Partner
                                            </Typography>
                                        </FlexGrid>
                                        <FlexGrid mt={1}><ArrowForwardIosIcon style={{
                          fontSize:"0.6rem",
                          fontWeight:800,
                          color:"#000"
                        }}/>

                                            <Typography variant="body1" align="left" color="#ffffff"
                                                component="div"
                                                sx={{
                                                    px: { xs: 1, md: 1 },
                                                    fontSize: { xs: "10px", sm: "12px", md: "16px" },
                                                
                                                    lineHeight: 1.2,
                                                    color: "#000",
                                                    fontWeight:600,
                                                    mt:1
                                                }}
                                            >
                                                Infineon Partner Program
                                            </Typography>
                                        </FlexGrid>

                                    </Box>
                                    <Box sx={{ display: 'block' }}>
                                        <FlexGrid mt={1}><ArrowForwardIosIcon style={{
                          fontSize:"0.6rem",
                          fontWeight:800,
                          color:"#000"
                        }}/>
                                            <Typography variant="body1" align="left" color="#ffffff"
                                                component="div"
                                                sx={{
                                                    px: { xs: 1, md: 1 },
                                                    fontSize: { xs: "10px", sm: "12px", md: "16px" },
                                                   
                                                    lineHeight: 1.2,
                                                    color: "#000",
                                                    fontWeight:600,
                                                    mt:1
                                                }}
                                            >
                                                NXP Partner Program
                                            </Typography></FlexGrid>
                                        <FlexGrid mt={1}><ArrowForwardIosIcon style={{
                          fontSize:"0.6rem",
                          fontWeight:800,
                          color:"#000"
                        }}/>
                                            <Typography variant="body1" align="left" color="#ffffff"
                                                component="div"
                                                sx={{
                                                    px: { xs: 1, md: 1 },
                                                    fontSize: { xs: "10px", sm: "12px", md: "16px" },
                                                
                                                    lineHeight: 1.2,
                                                    color: "#000",
                                                    fontWeight:600,
                                                    mt:1
                                                }}
                                            >
                                                Microchip Design Partner
                                            </Typography></FlexGrid>


                                    </Box>
                                </Box>

                            </Box>
                        </Box>
                    </Box>

                </Container>

            </Box>
        </Box>
    )
}

export default Members1;
