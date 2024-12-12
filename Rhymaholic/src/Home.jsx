import React from 'react';
import './Home.css'; // Import your styles

const Home = () => {
    return (
        <div className="home-container" style={{ backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff' }}>
            <header className="home-header">
                <h1>Welcome to Rhymaholic</h1>
                <h2> There's nothing on this homepage just yet...</h2>
            </header>
        </div>
    );
}


export default Home;
