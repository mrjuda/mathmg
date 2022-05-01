// App.js

import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import WebHeader from './components/wHeader';
import WebHome from './components/wHome';
import WebCalc from './components/wCalc';
import WebQuote from './components/wQuote';

function App() {
  return (
    <div className="container">
      <WebHeader />
      <Routes>
        <Route exact path="/mathmg" element={<WebHome />} />
        <Route path="/WebCalc" element={<WebCalc />} />
        <Route path="/WebQuote" element={<WebQuote />} />
      </Routes>
    </div>
  );
}

export default App;
