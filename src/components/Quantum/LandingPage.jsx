import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';
import {Box,Typography,Button} from '@mui/material'
import { ChevronRight } from 'lucide-react';
const MotionBox = motion(Box)
const MotionTypography = motion(Typography);

const LandingPage = () => {
    // const theme = useTheme();
    const Navigate = useNavigate()
  return (
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
        component="a"
        href='#books'
        variant="a"
        size="large"
        endIcon={<ChevronRight />}
        sx={{
          borderRadius: '50px',
          px: 4,
          py: 1.5,
          fontSize: '1.2rem',
          backgroundColor: 'primary.main',
          
        }}
      >
        Explore Now
      </Button>
    </Box>
  </MotionBox>
  )
}

export default LandingPage