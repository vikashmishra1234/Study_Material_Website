import React, { useEffect, useState } from 'react'
import { 
  Container, 
  Box,
  useTheme,
} from '@mui/material'
import {  useNavigate } from 'react-router-dom'
import FirstYear from './FirstYear'
import SecondYear from './SecondYear'
import ThirdYear from './ThirdYear'
import FourthYear from './FourthYear'
import { useQuery } from 'react-query'
import fetchQuantums from '../utills/getPdfs'
import ContactInfo from './Contact'
import Footer from './Footer'
import LandingPage from './LandingPage'
import Testimonials from '../testimonials/Testimonial'
import Papers from '../papers/Papers'


const defaultImage = 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75'

export default function EnhancedStudyGuideWelcome() {
 
  const { data } = useQuery('quantums', fetchQuantums,{staleTime: 1000 * 60 * 5,});
  const [firstYear, setFirstYear] = useState([]);
  const [secondYear, setSecondYear] = useState([]);
  const [thirdYear, setThirdYear] = useState([]);
  const [fourthYear, setFourthYear] = useState([]);

  const invokeApi = async()=>{
     await fetch('https://quantums-backend.onrender.com');
  }
  useEffect(() => {
    invokeApi();
      if (data) {
          setFirstYear(data.filter((item) => item.year === '1' && item?.type!='paper'));
          setSecondYear(data.filter((item) => item.year === '2' && item?.type!='paper'));
          setThirdYear(data.filter((item) => item.year === '3' && item?.type!='paper'));
          setFourthYear(data.filter((item) => item.year === '4' && item?.type!='paper'));
      }
  }, [data]);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default',  }}>
      <LandingPage/>
      <div id='books'></div>
      <Container   maxWidth="lg" sx={{ mb: 8 }}>
       {firstYear?.length>0&&<FirstYear defaultImage={defaultImage} data = {firstYear}/>}
       {secondYear?.length>0&&<SecondYear defaultImage={defaultImage} data = {secondYear}/>}
       {thirdYear?.length>0&&<ThirdYear defaultImage={defaultImage} data = {thirdYear}/>}
       {fourthYear?.length>0&&<FourthYear defaultImage={defaultImage} data = {fourthYear}/>}
      </Container>
      <Container maxWidth='lg' sx={{mb:8}}>
      <Papers/>
      </Container>
      <Testimonials/>
      <ContactInfo/>
     <Footer/>
    </Box>
  )
}
