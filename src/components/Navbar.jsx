import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static" sx={{ backgroundColor: '#512da8' }}>
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
        🔗 SmartLink
      </Typography>
      <Box>
        <Button component={Link} to="/" sx={{ color: '#fff', fontWeight: 'bold' }}>Home</Button>
        <Button component={Link} to="/stats" sx={{ color: '#fff', fontWeight: 'bold' }}>Statistics</Button>
      </Box>
    </Toolbar>
  </AppBar>
);
export default Navbar;