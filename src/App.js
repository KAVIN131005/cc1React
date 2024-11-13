// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BusProvider } from './BusContext'; // Import BusProvider
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login'; // Import the enhanced Login component
import Register from './components/Register'; // Import the enhanced Register component
// import withAuthRedirect from './hocs/withAuthRedirect'; // Import the HOC for redirectioncd 

function App() {
    return (
        <BusProvider> {/* Wrap the App with BusProvider */}
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login/>} /> {/* Use HOC for Login */}
                    <Route path="/register" element={<Register/>} /> {/* Use HOC for Register */}
                </Routes>
            </Router>
        </BusProvider>
    );
}

export default App;
