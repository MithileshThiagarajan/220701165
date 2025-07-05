import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import Navbar from '../components/Navbar.jsx';
import UrlForm from '../components/UrlForm.jsx';
import UrlList from '../components/UrlList.jsx';

const Home = () => {
  const [urls, setUrls] = useState([]);
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(https://images.unsplash.com/photo-1523961131990-5ea7c61b2107)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        px: 2,
        py: 4,
      }}
    >
      <Navbar />
      <Container maxWidth="sm" sx={{ backgroundColor: 'rgba(255,255,255,0.95)', borderRadius: 3, boxShadow: 5, p: { xs: 2, sm: 4 }, mt: 4, width: '100%' }}>
        <UrlForm urls={urls} setUrls={setUrls} />
        <Box mt={3}>
          <UrlList urls={urls} />
        </Box>
      </Container>
    </Box>
  );
};
export default Home;