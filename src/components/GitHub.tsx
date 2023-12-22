import React from 'react'
import "../scss/GitHub.scss"
import github from "../assets/github.png";

const GitHub: React.FC = () => {
    return (
        <div className='github-button'>
            <button>
                <a href="https://github.com/Fadilix">
                   <img src={github} alt="" />
                </a>
            </button>
        </div>
    )
}

export default GitHub