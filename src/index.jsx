import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleProductATB from './page/SingleProductATB';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" exact element={<App />} />
        <Route path="/:productID" element={<SingleProductATB />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
