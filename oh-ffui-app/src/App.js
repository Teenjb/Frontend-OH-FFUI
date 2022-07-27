import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
// import Home from './Page/Home';
// import Login from './Page/Login';
// import Register from './Page/Register';
// import Shop from './Page/Shop';
import Cart from './Page/Cart';
import About from './Page/About';
import Submission from './Page/Submission';

import React, { useState } from "react";
function App() {
    return (
        <Router>
          <Routes>
            {/* <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/shop" element={<Shop />} /> */}
            <Route exact path="/Cart" element={<Cart />} />
            <Route exact path="/About" element={<About />} />
            <Route exact path="/Submission" element={<Submission />} />
            <Route
              path="*"
              element = {<Navigate to="/home" />}
            />
          </Routes>
        </Router>

    );
}

export default App;
