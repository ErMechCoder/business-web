// import styled from "@emotion/styled";
import { Box} from "@mui/material";
import BlueShape from '../img/simma/Blue-BG-Shape.jpg'
import {Card1} from './CardTestimonials';
import Carousel from "react-multi-carousel";

// const DotBox = styled(Box)({
//     // width: 500,
//     // height: 30,
//     // maxHeight: { xs: 30, sm: 30, md: 35 },
//     // maxWidth: { xs: 350, sm: 350, md: 550 },
//     display: "flex",
//     margin: 'auto',
//     gap: 5,
//     bgcolor: '#fff',
//     alignItems: "center",
//     justifyItems: "center",
//     justifyContent: "center",
    
// });
// const Dot = styled(Box)({
//     width: 10,
//     height: 10, 
//     display: "block",
//     borderRadius: '50%',
//       color:"#fff",
//       background:'#fff'
// });


const Testimonials1 = () => {
    return (
        <Box
            sx={{
                display: "block",
                justifyItems: "center",
                alignItems: 'center',
            }}
        >

            <Box
                sx={{
                    backgroundImage: `url(${BlueShape})`,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#ffffff",

                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: { xs:340, sm:340, md:370},
                    width: "100%",
                    display: "block",
                    justifyContent: "center",
                    justifyItems: "center",
                    alignItems: 'center'
                }}
            >

                <Box
                    sx={{
                        width: { xs: "100%", sm: "100%", md: "100%" },
                        padding: { xs: 1, sm: 1, md: 2 },
                        display: 'block',
                        // bgcolor: 'red',
                        mb:{ xs:2, sm:2, md:2 }
                    }}
                >

<Carousel 
      swipeable={true}
      draggable={true}
      showDots={true}
      ssr={true}
      infinite={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-margin-0-px"
      
      responsive = {
        {
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items:1,
            slidesToSlide: 1// optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items:1,
            slidesToSlide: 1 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items:1,
            slidesToSlide: 1 // optional, default to 1.
          }
        }
      }
      
      
      >
  <Box > {Card1}</Box>
  <Box > {Card1}</Box>
  <Box > {Card1}</Box>
  <Box > {Card1}</Box>
  <Box > {Card1}</Box>
  
</Carousel>
 </Box>
</Box>
 </Box>
    )
}

export default Testimonials1;
