import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import Shop from './Page/Shop';
import Cart from './Page/Cart';
import About from './Page/About';
import Profile from './Page/Profile';
import Submission from './Page/Submission';

import React, { useState } from "react";
function App() {
    return (
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/shop" element={<Shop />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/submission" element={<Submission />} />
            <Route
              path="*"
              element = {<Navigate to="/home" />}
            />
          </Routes>
        </Router>

    );
}

export default App;
