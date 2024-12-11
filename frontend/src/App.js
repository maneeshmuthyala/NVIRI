import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loginpage from './components/Loginpage'
import Home from './components/Home';
import './App.css';
import Bizlogin from './components/Bizlogin';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/bizlogin" element={<Bizlogin/>}/>
      </Routes>
    </Router>
  )
}

export default App;
