import { Box, Typography } from '@mui/material'

const HeroCard1 = () => {
  return (
    <Box>
    <Typography component="div" variant={"h6"} align="left"
      sx={{
        width:'auto',
        height:{ xs:"20px", sm:"20px",md: "30px"},
        px: { xs: 2, md: 2 },
        pt: { xs: 2, md: 2 },
        fontSize: { xs: "12px", sm: "12px", md: "16px" },
       fontFamily:"NexaBold",
        color: "#fff",
        textTransform: "uppercase",
        lineHeight: 1.2,
        zIndex:780
       
      }}
    >
      The J1939 Experts
    </Typography>

    <Typography variant="body1" align="left" color="#ffffff"
      sx={{
        mt:{xs:1, sm:1, md:1},
        mb:{xs:1, sm:1, md:2},
        px: { xs: 2, md: 2 },
        zIndex:780,
        fontSize: { xs: "12px", sm: "12px", md: "14px" },
        fontFamily:"NexaLight",
        color: "rgb(255, 255, 255)",
        textTransform: "uppercase",
        lineHeight:1.2,
        letterSpacing:2
      }}
    >

      Simma Software specializes in safety critical real-time embedded software development, including J1939, UDS, various bootloaders, XCP, LIN, J1708, and J1939 interface options for the automotive industry. We have a proven track record, solid reputation, and strive for our software development to be on time and defect-free.
    </Typography>
  </Box>
  )
}

const HeroCard2 = () => {
    return (
      <Box>
      <Typography component="div" variant={"h6"} align="left"
        sx={{
          width:'auto',
          height:{ xs:"20px", sm:"20px",md: "30px"},
          px: { xs: 2, md: 2 },
          pt: { xs: 2, md: 2 },
          fontSize: { xs: "12px", sm: "12px", md: "16px" },
         fontFamily:"NexaBold",
          color: "#fff",
          textTransform: "uppercase",
          lineHeight: 1.2,
          zIndex:780
         
        }}
      >
        The J1939 Experts
      </Typography>
  
      <Typography variant="body1" align="left" color="#ffffff"
        sx={{
          mt:{xs:1, sm:1, md:1},
          mb:{xs:1, sm:1, md:2},
          px: { xs: 2, md: 2 },
          zIndex:780,
          fontSize: { xs: "12px", sm: "12px", md: "14px" },
          fontFamily:"NexaLight",
          color: "rgb(255, 255, 255)",
          textTransform: "uppercase",
          lineHeight:1.2,
          letterSpacing:2
        }}
      >
  
        Simma Software specializes in safety critical real-time embedded software development, including J1939, UDS, various bootloaders, XCP, LIN, J1708, and J1939 interface options for the automotive industry. We have a proven track record, solid reputation, and strive for our software development to be on time and defect-free.
      </Typography>
    </Box>
    )
  }

  export {
    HeroCard1,
    HeroCard2,
  }
