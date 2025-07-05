

import React, { useEffect, useState } from 'react';
import { Paper, Typography, List, ListItem, Divider } from '@mui/material';

const UrlStats = () => {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('shortenedUrls') || '{}');
    setUrls(Object.values(data));
  }, []);

  return (
    <div>
      {urls.map((url) => (
        <Paper key={url.shortCode} elevation={4} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6" color="secondary">
            {url.shortCode} → <a href={`/${url.shortCode}`}>{url.longUrl}</a>
          </Typography>
          <Typography variant="body2">Created: {new Date(url.createdAt).toLocaleString()}</Typography>
          <Typography variant="body2">Expires: {new Date(url.expiresAt).toLocaleString()}</Typography>
          <Typography variant="subtitle2" sx={{ mt: 1 }}>Total Clicks: {url.clicks.length}</Typography>
          <List>
            {url.clicks.map((click, i) => (
              <ListItem key={i} sx={{ display: 'block', fontSize: 14 }}>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="body2">
                  {new Date(click.timestamp).toLocaleString()} from <strong>{click.referrer}</strong> @ {click.location}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Paper>
      ))}
    </div>
  );
};
export default UrlStats;
