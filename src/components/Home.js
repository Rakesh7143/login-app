import React from 'react';

const Home = () => {
    const handleLogout = () => {
        localStorage.removeItem('userData');
        window.location.href = '/auth/login';
    };

    return (
        <div className="home-container">
            <h2>Welcome Home!</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Home;
