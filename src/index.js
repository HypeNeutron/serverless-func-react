import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleProductATB from './page/SingleProductATB';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/:productID' element={<SingleProductATB />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
