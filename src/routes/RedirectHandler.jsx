import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RedirectHandler = () => {
  const { shortcode } = useParams();

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem('shortenedUrls') || '{}');
    const record = store[shortcode];
    if (record && new Date(record.expiresAt) > new Date()) {
      record.clicks.push({
        timestamp: new Date().toISOString(),
        referrer: document.referrer || 'direct',
        location: 'Unknown',
      });
      store[shortcode] = record;
      localStorage.setItem('shortenedUrls', JSON.stringify(store));
      window.location.replace(record.longUrl);
    } else {
      alert('Invalid or expired short URL');
    }
  }, [shortcode]);

  return <p>Redirecting…</p>;
};
export default RedirectHandler;
