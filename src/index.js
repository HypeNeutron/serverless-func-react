import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SingleProductATB from './page/SingleProductATB';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact>
        <App />
      </Route>
      <Route path='/:productID'>
        <SingleProductATB />
      </Route>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
