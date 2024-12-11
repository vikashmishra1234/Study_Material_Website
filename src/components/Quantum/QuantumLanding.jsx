import React, { useEffect, useState } from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  Card,  
  Button, 
  Box,
  IconButton,
  useTheme,
} from '@mui/material'
import { motion } from 'framer-motion'
import { GraduationCap, Search, ShoppingCart, ChevronRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import FirstYear from './FirstYear'
import SecondYear from './SecondYear'
import ThirdYear from './ThirdYear'
import FourthYear from './FourthYear'
import { useQuery } from 'react-query'
import fetchQuantums from '../utills/getPdfs'
import ContactInfo from './Contact'
import Footer from './Footer'

const MotionBox = motion(Box)
const MotionTypography = motion(Typography);
const defaultImage = 'https://www.aktu-quantum.online/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTechnicalCommunication.39d50750.png&w=1080&q=75'

export default function EnhancedStudyGuideWelcome() {
  const Navigate = useNavigate()
  const theme = useTheme()
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
          setFirstYear(data.filter((item) => item.year === '1'));
          setSecondYear(data.filter((item) => item.year === '2'));
          setThirdYear(data.filter((item) => item.year === '3'));
          setFourthYear(data.filter((item) => item.year === '4'));
      }
  }, [data]);

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default',  }}>
      <MotionBox
        sx={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://source.unsplash.com/random/1920x1080?study)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          mb: 8,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box sx={{ maxWidth: '800px', p: 4 }}>
          <MotionTypography
            variant="h1"
            component="h1"
            sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2.5rem', md: '4rem' } }}
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Unlock Your Academic Potential
          </MotionTypography>
          <MotionTypography
            variant="h5"
            sx={{ mb: 4, fontSize: { xs: '1rem', md: '1.5rem' } }}
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover comprehensive study guides tailored for each year of your academic journey
          </MotionTypography>
          <Button
          onClick={()=>Navigate('/form')}
            variant="contained"
            size="large"
            endIcon={<ChevronRight />}
            sx={{
              borderRadius: '50px',
              px: 4,
              py: 1.5,
              fontSize: '1.2rem',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Add Books
          </Button>
        </Box>
      </MotionBox>

      <Container  maxWidth="lg" sx={{ mb: 8 }}>
       {firstYear?.length>0&&<FirstYear defaultImage={defaultImage} data = {firstYear}/>}
       {secondYear?.length>0&&<SecondYear defaultImage={defaultImage} data = {secondYear}/>}
       {thirdYear?.length>0&&<ThirdYear defaultImage={defaultImage} data = {thirdYear}/>}
       {fourthYear?.length>0&&<FourthYear defaultImage={defaultImage} data = {fourthYear}/>}
      </Container>
      <ContactInfo/>
     <Footer/>
    </Box>
  )
}
