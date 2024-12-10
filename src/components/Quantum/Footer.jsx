import React from 'react'
import { Typography,Container,Box } from '@mui/material'
const Footer = () => {
  return (
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
  )
}

export default Footer