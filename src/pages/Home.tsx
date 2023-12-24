import React from 'react';
import "../scss/Home.scss";
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import GitHub from '../components/GitHub';
import useLanguage from '../hooks/UseLanguage';


const Home: React.FC = () => {
    const { language } = useLanguage();

    const englishScript = {
        h1: "Happy New Year 2024",
        p: "As the calendar turns a new page, may the chapters of your life be written with love, happiness, and success. Here's to embracing fresh opportunities, cherishing precious moments, and creating beautiful memories. May the coming year bring you prosperity, good health, and the fulfillment of your dreams. Happy New Year! 🎉✨",
        button: "Wish Happy New Year to someone"
    }

    const frenchScript = {
        h1: "Bonne année 2024",
        p: "Alors que le calendrier tourne une nouvelle page, que les chapitres de votre vie soient écrits avec amour, bonheur et succès. Que l'année à venir vous apporte prospérité, bonne santé et la réalisation de vos rêves. Voici pour embrasser de nouvelles opportunités, chérir des moments précieux et créer de beaux souvenirs. Bonne année ! 🎉✨",
        button: "Souhaitez une bonne année à quelqu'un",
    };

    return (
        <div className='home'>
            <NavBar />
            <div className="wishes">
                <h1>
                    {language === "en" ? englishScript.h1 : frenchScript.h1}
                </h1>
                <p>
                    {language === "en" ? englishScript.p : frenchScript.p}
                </p>
            </div>
            <button className='wish-someone'>
                <Link to="/wish-form">
                {language === "en" ? englishScript.button : frenchScript.button}
                </Link>
            </button>
            <GitHub />
        </div>
    )
}

export default Home