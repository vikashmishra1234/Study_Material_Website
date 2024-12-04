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
  useMediaQuery,
} from '@mui/material'
import { motion } from 'framer-motion'

import { GraduationCap, Search, ShoppingCart, ChevronRight } from 'lucide-react'



import { useNavigate } from 'react-router-dom'
import getPdfs from '../utills/getPdfs'
import FirstYear from './FirstYear'
import SecondYear from './SecondYear'
import ThirdYear from './ThirdYear'
import FourthYear from './FourthYear'

const MotionBox = motion(Box)
const MotionTypography = motion(Typography)
const MotionCard = motion(Card)


export default function EnhancedStudyGuideWelcome() {
  const navigate = useNavigate();
  const [firstYear,setFirstYear] = useState(null);
  const [secondYear,setSecondYear] = useState(null);
  const [thirdYear,setThirdyear] = useState(null);
  const [fourth,setFouthYear] = useState(null);
  const theme = useTheme()

  useEffect(()=>{
      (async()=>{
        let data = await getPdfs(); // Assume this returns an array with one document
        // let newData = []
        // for(let i=0;i<5;i++){
        //   newData.push(data[0]);
        // }
        const first = data.filter((data)=>data.year=='1')
        const second = data.filter((data)=>data.year=='2')
        const third = data.filter((data)=>data.year=='3')
        const fourth = data.filter((data)=>data.year=='4')
        setFirstYear(first)
        setSecondYear(second);
        setThirdyear(third)
        setFouthYear(fourth)
      
      })()
  },[])

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', minHeight: '100vh' }}>
      <AppBar position="sticky"  color="primary" elevation={0}>
        <Toolbar>
          <GraduationCap size={32} color={theme.palette.primary.main} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 2, color: 'white' }}>
            Quantum Study Guides
          </Typography>
          <IconButton color="inherit" aria-label="search">
            <Search />
          </IconButton>
          <IconButton color="inherit" aria-label="cart">
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </AppBar>

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
        {/* {
          pdfUrl&&( <iframe
            src={pdfUrl}
            width="100%"
            height="600px"
            style={{ border: "none" }}
            title="PDF Viewer"
          ></iframe>)
        } */}
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
            Explore Guides
          </Button>
        </Box>
      </MotionBox>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
       {firstYear?.length>0&&<FirstYear data = {firstYear}/>}
       {secondYear?.length>0&&<SecondYear data = {secondYear}/>}
       {thirdYear?.length>0&&<ThirdYear data = {thirdYear}/>}
       {fourth?.length>0&&<FourthYear data = {fourth}/>}
      </Container>

      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Quantum Study Guides
          </Typography>
          <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
            Empowering students with comprehensive study materials since 2023
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            Quantum Study Guides {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}
