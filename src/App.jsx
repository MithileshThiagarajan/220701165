import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Statistics from './pages/Statistics.jsx';
import RedirectHandler from './routes/RedirectHandler.jsx';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/stats" element={<Statistics />} />
    <Route path="/:shortcode" element={<RedirectHandler />} />
  </Routes>
);
export default App;
