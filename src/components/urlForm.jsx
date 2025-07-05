


import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import { isValidUrl, isValidShortcode, generateShortcode, getExpiryDate } from '../utils.js';
import { logEvent } from '../middleware/logger.js';

const UrlForm = ({ urls, setUrls }) => {
  const [inputs, setInputs] = useState([{ url: '', code: '', validity: '' }]);

  const onChange = (idx, e) => {
    const copy = [...inputs];
    copy[idx][e.target.name] = e.target.value;
    setInputs(copy);
  };

  const addInput = () => inputs.length < 5 && setInputs([...inputs, { url: '', code: '', validity: '' }]);

  const onSubmit = () => {
    const storage = JSON.parse(localStorage.getItem('shortenedUrls') || '{}');
    const updated = [...urls];

    inputs.forEach(({ url, code, validity }) => {
      if (!isValidUrl(url)) return alert(`Invalid URL: ${url}`);
      const mins = parseInt(validity || '30', 10);
      if (isNaN(mins)) return alert('Validity must be an integer');
      const short = code ? (isValidShortcode(code) ? code : null) : generateShortcode();
      if (!short) return alert(`Invalid shortcode: ${code}`);
      if (storage[short]) return alert(`Shortcode ${short} already exists.`);

      storage[short] = {
        longUrl: url,
        shortCode: short,
        createdAt: new Date().toISOString(),
        expiresAt: getExpiryDate(mins),
        clicks: [],
      };
      logEvent('SHORTENED_URL_CREATED', storage[short]);
      updated.push(storage[short]);
    });

    setUrls(updated);
    localStorage.setItem('shortenedUrls', JSON.stringify(storage));
  };

  return (
    <Paper elevation={5} sx={{ p: 4, mb: 4 }}>
      <Typography variant="h3" align="center" gutterBottom color="primary">
        Create Short Links
      </Typography>

      {inputs.map((input, idx) => (
        <Grid container spacing={2} key={idx} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <TextField label="Long URL" name="url" fullWidth onChange={(e) => onChange(idx, e)} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Shortcode (optional)" name="code" fullWidth onChange={(e) => onChange(idx, e)} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField label="Validity (min)" name="validity" fullWidth onChange={(e) => onChange(idx, e)} />
          </Grid>
        </Grid>
      ))}

      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button variant="outlined" onClick={addInput}>Add Another</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={onSubmit}>Shorten URLs</Button>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default UrlForm;