import React, { useEffect, useState } from 'react';
import './Login.css'

const Login = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        try{
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            console.log(data);
        } catch(err){
            console.error('Failed to fetch data:', err);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            const userData = {
                username,
                password,
                email,
                expiresInMins: 30
            }
            try {
                const response = await fetch('https://dummyjson.com/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                });
                const data = await response.json();
                console.log(data);
                if (response.ok) {
                    localStorage.setItem('userData', JSON.stringify(data));
                    window.location.href = '/home';
                } else {
                    alert('Login failed: ' + (data.message || 'Unknown error'));
                }
            } catch (error) {
                console.error('Login failed:', error);

            }
        }
    };
    

    const validateForm = () => {
        if (username !== 'emilys') {
            alert('Invalid username');
            return false;
        }
        if (!validateEmail(email)) {
            alert('Invalid email format');
            return false;
        }
        if (password.length < 8) {
            alert('Password must be at least 8 characters');
            return false;
        }
        return true;
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    return (
        <>
        <div className='container d-flex justify-content-center align-items-center'>
            <div className='customImg'>
                <img src='/images/1.png'/>
            </div>
            <div className='d-flex justify-content-center align-items-center border mt-5 mb-5 ms-5 rounded  customWidth'>
                <div className="login-container">
                    <h2 className='mt-3 text-center'>Welcome to Unstop</h2>
                    <button type="button" class="btn border btn-light btn-social w-100 mt-4">
                        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo"/>
                            Login with Google
                    </button>

                    <button type="button" class="btn btn-light border w-100 btn-social mb-2 mt-4">
                        <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt="Facebook Logo"/>
                        Login with Facebook
                    </button>
                    <div class="divider">OR</div>
                    <form onSubmit={handleSubmit} className='form-group w-100'>
                        <div>
                            <label>Username:</label>
                            <input
                            className='form-control'
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                className='form-control'
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                className='form-control'
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <div class="d-flex justify-content-between align-items-center mb-3 mt-3">
                            <div class="form-check">
                                <input className="form-check-input" type="checkbox" id="rememberMe" />
                                <label className="form-check-label" for="rememberMe">Remember me</label>
                            </div>
                            <a href="#" class="text-decoration-none">Forgot Password?</a>
                        </div>
                        </div>
                        <button type="submit" className='btn btn-primary w-100 mt-3'>Login</button>
                        <p className='text-center p-3'>Don't have an account?<a href="/register" className=''>Register</a></p>
                    </form>
                </div>
            </div>

        </div>
        </>
    );
};

export default Login;
