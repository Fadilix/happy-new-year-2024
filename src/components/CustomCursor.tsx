import React, { useEffect, useState } from 'react';
import "../scss/CustomCursor.scss";
import cursor from "../assets/cursor.png";

const CustomCursor: React.FC = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setX(e.pageX);
            setY(e.pageY);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="custom-cursor" style={{ transform: `translate(${x-15}px, ${y-15}px)`, background: cursor}}></div>
    );
};

export default CustomCursor;
