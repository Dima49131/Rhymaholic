import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage/Home';
import PhoneticTool from './pages/PhoneticTool/PhoneticTool';
import RhymingTool from './pages/RhymingTool/RhymingTool';
import RhymingToolSimple from './pages/RhymingToolSimple/RhymingToolSimple';
import Highlighter from './pages/Highlighter/Highlighter';

import Navbar from './components/Navbar';
import './App.css'; 

const App = () => {
    return (
        <Router>
            <main>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/phonetictool" element={<PhoneticTool />} />
                    <Route path="/rhymingtool" element={<RhymingTool />} />
                    <Route path="/rhymingtoolsimplified" element={<RhymingToolSimple />} />
                    <Route path="/Highlighter" element={<Highlighter />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App;