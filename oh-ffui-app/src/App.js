import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';

import React, { useState } from "react";
function App() {
    return (
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              path="*"
              element = {<Navigate to="/home" />}
            />
          </Routes>
        </Router>

    );
}

export default App;
