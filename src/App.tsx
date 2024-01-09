import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RequireAuth from './RequireAuth'; // Upewnij się, że ścieżka do RequireAuth jest poprawna

// Importuj swoje komponenty
import Homepage from './Homepage';
import Login from './Login';
import Profile from './Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <RequireAuth>
            <Homepage />
          </RequireAuth>
        } />
        <Route path="/profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        } />
        {/* Dodaj tu inne ścieżki w podobny sposób, jeśli są inne strony, które wymagają autoryzacji */}
      </Routes>
    </Router>
  );
}

export default App;
