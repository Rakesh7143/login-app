import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
    const isLoggedIn = localStorage.getItem('userData');

    return (
        <Router>
            <Routes>
                <Route path="/auth/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
                <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/auth/login" />} />
            </Routes>
        </Router>
    );
};

export default App;
