import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Confetti from 'react-confetti';
import "../scss/Wish.scss"


const Wish: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const lang = queryParams.get("lang");
    const sender = queryParams.get("sender");
    const receiver = queryParams.get("receiver");

    const frScript = `Cher <b>${receiver}</b>, <br /><br />

    En cette nouvelle année, je te souhaite tout le bonheur, la santé et la réussite que tu mérites. Que chaque jour soit une nouvelle aventure et que chaque moment soit rempli de joie et d'amour. Que 2024 t'apporte la réalisation de tes rêves et de magnifiques souvenirs à chérir. Bonne année!
    
    Avec toute mon amitié,
    `;

    const enScript = `Dear <b>${receiver}</b>, <br/><br />

    In this new year, I wish you all the happiness, health, and success that you deserve. May each day be a new adventure and every moment filled with joy and love. May 2024 bring you the fulfillment of your dreams and beautiful memories to cherish. Happy New Year!

    With all my friendship
    `;

    return (
        <div className='wish-container'>
            <div className='wish'>
                <NavBar />
                <Confetti />
                {lang === "en" ? (
                    <p dangerouslySetInnerHTML={{ __html: enScript }} className='letter'></p>
                ) : (
                    <p dangerouslySetInnerHTML={{ __html: frScript }} className='letter'></p>
                )}

                <p style={{ marginLeft: "75%", fontWeight: "bold" }}>{sender}</p>

            </div>
            <button className='send-to-someone'><Link to="/wish-form">Send Wish to someone</Link></button>
        </div>
    );
};

export default Wish;