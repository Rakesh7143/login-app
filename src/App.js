import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
    const isLoggedIn = localStorage.getItem('userData');

    return (
        <Router basename="/">
            <Routes>
                <Route path="/auth/login" element={isLoggedIn ? <Navigate to="/home" /> : <Login />} />
                <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/auth/login" />} />
                <Route path="/" element={<Navigate to={isLoggedIn ? "/home" : "/auth/login"} />} />
            </Routes>
        </Router>
    );
};

export default App;
