import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Axios for making HTTP requests
import './LoginRegister.css'; // Ensure this points to the right CSS file

const Register = () => {
  const [name, setName] = useState(''); // State for name input
  const [email, setEmail] = useState(''); // State for email input
  const [password, setPassword] = useState(''); // State for password input
  const [confirmPassword, setConfirmPassword] = useState(''); // State for confirm password input
  const [error, setError] = useState(null); // State to store any registration errors
  const [success, setSuccess] = useState(null); // State to store registration success

  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate that password and confirmPassword match
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      // Check if the email already exists in db.json
      const response = await axios.get(`http://localhost:3001/users?email=${email}`);
      if (response.data.length > 0) {
        setError('Email is already registered');
        return;
      }

      // Prepare new user data
      const newUser = {
        id: Date.now(), // Generate a unique ID (you can replace with a better method)
        name,
        email,
        password,
      };

      // Send a POST request to add the new user to db.json
      await axios.post('http://localhost:3001/users', newUser);
      setSuccess('Registration successful! You can now log in.');
      setError(null);

      // Redirect to the login page after successful registration
      setTimeout(() => {
        navigate('/login'); // Navigate to login page
      }, 2000); // Delay to show the success message

    } catch (error) {
      setError('Error occurred while registering');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Register</h2>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
          {error && <p className="error">{error}</p>} {/* Display error if any */}
          {success && <p className="success">{success}</p>} {/* Display success message */}
        </form>
        <p>
          Already have an account?{' '}
          <button onClick={() => navigate('/login')} className="toggle-button">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Register;
