import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importuj swoje komponenty
import Homepage from './Homepage';
import Login from './Login';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;