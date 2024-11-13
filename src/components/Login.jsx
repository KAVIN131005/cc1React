import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Axios for making HTTP requests
import './LoginRegister.css'; // Ensure you have the right CSS path

const Login = () => {
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [error, setError] = useState(null); // State to store any login errors
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false); // Toggle between login and forgot password

  const [message, setMessage] = useState(''); // Message for forgot password feedback

  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle login form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Fetch the user from db.json based on email
      const response = await axios.get(`http://localhost:3001/users?email=${email}`);
      const user = response.data[0]; // Assuming user is found

      if (user && user.password === password) {
        // If email and password match, log in the user
        localStorage.setItem('user', JSON.stringify(user)); // Save user data in local storage
        navigate('/'); // Redirect to the home page
      } else {
        setError('Invalid email or password'); // Set error if credentials are incorrect
      }
    } catch (error) {
      setError('Error occurred while logging in'); // Handle any errors during login
    }
  };

  // Function to handle forgot password submission
  const handleForgotPassword = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3001/users?email=${email}`);
      if (response.data.length > 0) {
        // Simulate sending reset link (or actual password reset logic here)
        setMessage('A password reset link has been sent to your email.');
      } else {
        setMessage('Email not found.');
      }
    } catch (error) {
      setMessage('Error occurred while sending password reset link.');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {forgotPasswordMode ? (
          // Forgot Password Form
          <>
            <h2>Forgot Password</h2>
            <form className="auth-form" onSubmit={handleForgotPassword}>
              <div className="form-group">
                <label htmlFor="email">Enter your email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Send Reset Link</button>
            </form>
            {message && <p>{message}</p>}
            <p>
              <button onClick={() => setForgotPasswordMode(false)} className="toggle-button">
                Back to Login
              </button>
            </p>
          </>
        ) : (
          // Login Form
          <>
            <h2>Login</h2>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Login</button>
              {error && <p className="error">{error}</p>} {/* Display error if any */}
            </form>
            <p>
              <button onClick={() => setForgotPasswordMode(true)} className="forgot-password-button">
                Forgot Password?
              </button>
            </p>
            <p>
              Don't have an account? <button onClick={() => navigate('/Register')} className="toggle-button">Register</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;