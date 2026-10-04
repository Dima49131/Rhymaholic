import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import your styles


const tools = [
   // { path: '/highlighter', img: 'highlighter.png', title: 'Rhyme Highlighter', description: "Visualize the underlying rhyming structure behind words. Keep in mind this is still a demo." },
    { path: '/phonetictool', img: '/phonetic-tool.png', title: 'English To Phonetics', description: 'See in real time as words get converted into there phonetic spelling using the International Phonetic Alphabet (IPA).' },
    { path: '/rhymingtoolsimplified', img: '/Simplified.png', title: 'Rhyme Grid v2', description: "A modernized design of the Rhyme Grid tool. Useful for very quick rhymes in a pinch." },
    { path: '/rhymingtool', img: '/RhymingTool.png', title: 'Rhyme Grid', description: "An older rhyming tool that displays rhymes in a grid like structure. Useful when displaying many rhymes at once." },
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
