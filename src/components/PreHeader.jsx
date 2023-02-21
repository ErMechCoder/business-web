
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:"#112835",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function PreHeader() {
  return (
    <Box sx={{ flexGrow: 1 }}  >
      <Grid container backgroundColor='#12344D'>
        <Grid item xs={12}>
          <Item>
     
      <Typography variant='h6'
   sx={{
    fontSize: { xs: "12px", sm: "14px", md: "18px" },
    color:"#fefefe", 
    fontWeight:{ xs:200, sm:200, md:200},
    textAlign:"center",
    fontFamily: "NexaLight",
    lineHeight: 1.2,
   }}

      >
         Call on: 888-256-3828  -  Email:sales@simmasoftware.com
      </Typography>
  
          </Item>
        </Grid>
        
      </Grid>
    </Box>
  );
}
























// import { Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import React from 'react'

// const PreHeader = () => {
//   return (
//     <Box 
//     sx={{
//       width:"100vw",
//       height:50,
//       maxHeight: { xs:30, md: 50 },
//       maxWidth: { xs:"100vw", md: "100vw" },
//       backgroundColor:"#112835",
//       display:"block",
//       textAlign:"center",
//       color:'#ffffff'
//     }}  
//     >
     
//       <Typography variant='h6'
//    sx={{
//     fontSize: { xs: "12px", sm: "14px", md: "22px" },
//     color:"#fefefe", 
//     fontWeight:{ xs:300, sm:300, md:400 },
//     textAlign:"center",
//    }}

//       >
//          Call on: 888-256-3828  -  Email:sales@simmasoftware.com
//       </Typography>
//     </Box>
//   )
// }

// export default PreHeader;
