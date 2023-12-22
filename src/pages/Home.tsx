import React from 'react';
import "../scss/Home.scss";
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
    return (
        <div className='home'>
            <NavBar />
            <div className="wishes">
                <h1>Happy New Year 2024</h1>
                <p>As the calendar turns a new page, may the chapters of your life be written with love, happiness, and success. Here's to embracing fresh opportunities, cherishing precious moments, and creating beautiful memories. May the coming year bring you prosperity, good health, and the fulfillment of your dreams. Happy New Year! 🎉✨</p>
            </div>
            <button className='wish-someone'><Link to="/wish-form">Wish Happy New Year to someone</Link></button>
        </div>
    )
}

export default Home