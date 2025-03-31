import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your styles

const tools = [
    { path: '/phonetictool', img: '/phonetic-tool.png', title: 'Phonetic Tool', description: 'Get to the bottom of how words work' },
    { path: '/rhymingtool', img: '/RhymingTool.png', title: 'Rhyming Tool', description: "peace and doves, released with love" },
];

const Home = () => {
    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Welcome to Rhymaholic</h1>
                <h2>Here are some quick links to tools</h2>
            </header>
            <div className="tools-grid">
                {tools.map((tool, index) => (
                    <Link to={tool.path} key={index} className="tool-link">
                        <div className="tool-box">
                            <img src={tool.img} alt={tool.title} className="tool-image" />
                            <div className="tool-info">
                                <h3>{tool.title}</h3>
                                <p>{tool.description}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
