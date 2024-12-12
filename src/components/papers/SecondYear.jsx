import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { CardContent, CardMedia,Box,Typography,Button,Card } from "@mui/material";
import {  BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { useNavigate } from "react-router-dom";
import {useTheme} from "@mui/material"
const MotionCard = motion(Card)


const SecondYear = ({ data,defaultImage }) => {
  const navigate = useNavigate()

  const theme = useTheme()
  const sm = theme.breakpoints.down("sm")
  // const sm = useMediaQuery(theme.breakpoints.up("sm"))
return (
 <Box>
  <Typography sx={{[sm]:{
      fontSize:'25px',
      
  },margin:'30px 0px'}} variant='h3'>Second Year</Typography>
   <Swiper
  
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  breakpoints={{
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  }}
>
   
  {data&&data.map((guide) => (
   <SwiperSlide key={guide.$id}>
   <MotionCard
     sx={{
       height: 370,
       padding:"10px 0px",
       display: "flex",
       flexDirection: "column",
       transition: "all 0.3s ease-in-out",
       "&:hover": {
         transform: "translateY(-10px)",
         boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
       },
     }}
     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
   >
     <CardMedia
       component="img"
       sx={{ objectFit: "contain", height: "200px" }}
       image={guide.image?guide.image:defaultImage}
       alt={guide.title}
     />
     <CardContent
       sx={{
         flexGrow: 1,
         display: "flex",
         flexDirection: "column",
         gap:'20px'
       }}
     >
       <Box
         sx={{
           display: "flex",
           alignItems: "center",
           justifyContent: "space-between",
         }}
       >
         <Typography
           gutterBottom
           component="h4"
           sx={{ fontWeight: "bold",textTransform:'capitalize',fontSize:'19px', color: "text.primary" }}
         >
           {guide.title}
         </Typography>
         <Typography
           gutterBottom
           variant="h6"
           
           sx={{ fontSize:'16px', color: "text.primary" }}
         >
           {guide.code}
         </Typography>
       </Box>
       <Box
         sx={{
           display: "flex",
           alignItems: "center",
           justifyContent: "space-between",
           
         }}
       >
         <Button
           onClick={() => navigate(`/buy?qauntumId=${guide.$id}`)}
           sx={{
             alignSelf: "flex-start",
             
             borderRadius: "10px",
             background:'green',
             color:"white",
           
            
           }}
           
           variant="outlined"
           startIcon={<BookOpen />}
         >
           Buy it
         </Button>
         <Typography sx={{ fontSize: "20px" }} variant="span">
           &#8377;20
         </Typography>
       </Box>
     </CardContent>
   </MotionCard>
 </SwiperSlide>
  ))}
</Swiper>
 </Box>
);
};

export default SecondYear;
