import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import Shop from './Page/Shop';
import Coming from './Page/Coming';
import Cart from './Page/Cart';
import About from './Page/About';
import Profile from './Page/Profile';
import Submission from './Page/Submission';
import Tickets from './Page/Tickets';

import React from "react";
function App() {
    return (
        <Router>
          <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/shop" element={<Coming />} />
            <Route exact path="/cart" element={<Coming />} /> 
            <Route exact path="/about" element={<About />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/tickets" element={<Tickets />} />
            <Route exact path="/submission" element={<Coming />} />
            <Route
              path="*"
              element = {<Navigate to="/home" />}
            />
          </Routes>
        </Router>
    );
}

export default App;