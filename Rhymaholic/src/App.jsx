import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PhoneticTool from './PhoneticTool';
import Navbar from './Navbar';
import './App.css'; // Import your styles

const App = () => {
    return (
        <Router>
            <main>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/PhoneticTool" element={<PhoneticTool />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;