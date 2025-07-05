
import React from 'react';
import { Typography, List, ListItem, Link, Paper } from '@mui/material';

const UrlList = ({ urls }) => (
  <Paper elevation={4} sx={{ p: 3 }}>
    <Typography variant="h5" gutterBottom color="secondary">Shortened URLs</Typography>
    <List>
      {urls.map((u) => (
        <ListItem key={u.shortCode} sx={{ mb: 1 }}>
          <Link href={`/${u.shortCode}`} target="_blank" rel="noopener noreferrer">
            {window.location.origin}/{u.shortCode}
          </Link>
          &nbsp; (expires at {new Date(u.expiresAt).toLocaleString()})
        </ListItem>
      ))}
    </List>
  </Paper>
);
export default UrlList;
