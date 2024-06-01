import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Inicio from './Inicio';
import './App.css';

function App() {
  const [Logueado, setLogueado] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={Logueado ? <Navigate to="/inicio" /> : <Login onLogin={setLogueado} />}
        />
        <Route
          path="/inicio"
          element={Logueado ? <Inicio /> : <Navigate to="/login" />}
        />
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
