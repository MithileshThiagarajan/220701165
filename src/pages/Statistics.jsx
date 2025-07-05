import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import UrlStats from '../components/urlStats.jsx';

const Statistics = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: 0,
      }}
    >
      <Navbar />
      <Container maxWidth="md" sx={{ backgroundColor: 'rgba(255,255,255,0.93)', borderRadius: 3, boxShadow: 3, p: 4, mt: 5, overflowWrap: 'break-word' }}>
        <Typography variant="h3" align="center" gutterBottom color="primary">
          Shortened URL Statistics
        </Typography>
        <UrlStats />
      </Container>
    </Box>
  );
};
export default Statistics;


