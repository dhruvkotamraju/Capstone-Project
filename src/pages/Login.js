import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css';
import { useAuth } from '../components/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const { user, login, loginAsAdmin } = useAuth();

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        login(data.user);

        if (data.user?.isAdmin) {
          loginAsAdmin(data.user);
          return navigate("/addProduct");
        }
        navigate('/');
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Failed to log in');
    }
  };

  return (
    <main className={`content login-content`}>
      <div className="login-page">
        <div className="login-container">
          <h1>Mini shop Login</h1>
          <p>Enter your email and password.</p>
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            {message && <div className="success-message">{message}</div>}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
          </form>
          <div className="signup-container">
            <a href="/Signup">Create new account?</a>
            <a href="/forgot-password">Forgot Password ?</a>


          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
