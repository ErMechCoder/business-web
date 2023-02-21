
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import UserAvatar from '../img/simma/User-Avatar-in-Suit.jpg'
import Feedback from '../img/simma/Feedback-Text.jpg'
import styled from "@emotion/styled";

const CardBox = styled(Box)({
    display: "flex",
    width: 600,
    height: 350,
    maxHeight: { xs: 250, sm: 250, md: 280 },
    maxWidth: { xs: 350, sm: 350, md: 568 },
    backgroundColor: "#eef8f9",
    margin: 'auto',
    mt: 3,
    mb:2
    
});



 const Card1  =  <Card Card
 sx={{
    display: "flex",
    width: 600,
    height: 350,
    maxHeight: { xs: 250, sm: 250, md: 280 },
    maxWidth: { xs: 350, sm: 350, md: 568 },
    backgroundColor: "#eef8f9",
    margin: 'auto',
    mt: 3,
    mb:2
 }}
 
 
 >
 <CardMedia

     component="img"
     sx={{ width: 100, height: 100, mt: 10, ml: 3 }}
     image={UserAvatar}
     alt="Live from space album cover"
 />
 <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3, ml: 2 }}>
     <CardContent sx={{ flex: '1 0 auto' }}>
         <Typography component="div"
             sx={{

                 lineHeight: 1.2,

                 fontSize: { xs: "14px", sm: "14px", md: "32px" },
                 variant: "h5",
                 color: " rgb(16, 112, 182)",
                 fontFamily: 600,
             }}
         >
             Testimonials
         </Typography>
         <Typography variant="subtitle1" color="#000" component="div"
             fontFamily="NexaLight"
             fontWeight={400}
             lineHeight={1.2}
             sx={{ fontSize: { xs: "16px", sm: "16px", md: "20px" }, }}
             mt={2}
         >
             <span style={{
                 display: "inlineBlock", zIndex: 900, left: 2
             }}>

                 <img width={"30px"} height={"30px"} src={Feedback} alt="feedback"></img>

             </span>
             "JR Simma is one of the best software engineers I have ever worked with."<br />
             <span className='text-blue'>read more...</span>

         </Typography>
     </CardContent>

 </Box>

</Card>

  const Card2  =  <CardBox
>
  <CardMedia

      component="img"
      sx={{ width: 100, height: 100, mt: 10, ml: 3 }}
      image={UserAvatar}
      alt="Live from space album cover"
  />
  <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3, ml: 2 }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div"
              sx={{

                  lineHeight: 1.2,

                  fontSize: { xs: "14px", sm: "14px", md: "32px" },
                  variant: "h5",
                  color: " rgb(16, 112, 182)",
                  fontFamily: 600,
              }}
          >
              Testimonials
          </Typography>
          <Typography variant="subtitle1" color="#000" component="div"
              fontFamily="NexaLight"
              fontWeight={400}
              lineHeight={1.2}
              sx={{ fontSize: { xs: "16px", sm: "16px", md: "20px" }, }}
              mt={2}
          >
              <span style={{
                  display: "inlineBlock", zIndex: 900, left: 2
              }}>

                  <img width={"30px"} height={"30px"} src={Feedback} alt="feedback"></img>

              </span>
              "JR Simma is one of the best software engineers ."<br />
              <span className='text-blue'>read more...</span>

          </Typography>
      </CardContent>

  </Box>

</CardBox>


  export {  Card1, Card2 }