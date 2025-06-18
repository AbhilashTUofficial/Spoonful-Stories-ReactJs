import React from 'react';
import "./style.css";
const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="cardContainer">
            {children}
        </div>
    );
}

export default Card;