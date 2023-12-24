import React, { useEffect } from 'react'
import "../scss/NavBar.scss"
import { Link } from 'react-router-dom'
import frenchFlag from "../assets/french.webp";
import englishFlag from "../assets/english.avif";
import { useState } from 'react';
import useLanguage from '../hooks/UseLanguage';


const NavBar: React.FC = () => {

    const [showLang, setShowLang] = useState(false);
    const { language, setLanguage } = useLanguage();
    // const [language, setLanguage] = useState("en");

    const handleShowLanguage = () => {
        setShowLang(!showLang);
    }

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    // console.log(language);
    return (
        <div className='nav-bar'>
            <button className='logo'><Link to="/">New year wisher</Link></button>

            <div className='right-side'>

                <button className='go-wish'><Link to="/wish-form">Wish to someone</Link></button>
                <button
                    className='selected-lang'
                    onClick={handleShowLanguage}
                >
                    <img src={language === "en" ? englishFlag : frenchFlag} alt="flag_image" />
                    <p> {language === "en" ? "EN" : "FR"}</p>
                </button>

                {showLang && (
                    <div className='select-language'>
                        <div className="english" onClick={() => {
                            setShowLang(!showLang);
                            setLanguage("en")
                        }}>
                            <img src={englishFlag} alt="" />
                            <p>English</p>
                        </div>

                        <div className="french" onClick={() => {
                            setLanguage("fr");
                            setShowLang(!showLang);
                        }}
                        >
                            <img src={frenchFlag} alt="" />
                            <p>Français</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default NavBar;