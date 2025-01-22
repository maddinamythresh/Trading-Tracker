import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CryptoDisplay from './Components/Crypto/Context/CryptoDisplay';
import Header from './GlobalCompoments/Header';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      
        <Routes>
          {/* Define the route for /crypto */}
          
          <Route path="/" element={<CryptoDisplay />} />
        </Routes>
      
    </Router>
  );
}

export default App;
