import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './index.css';
import Home from './Page/Home';
import Login from './Page/Login';
//import Register from './Page/Register';

import React, { useState } from "react";
function App() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>

    );
}

export default App;
