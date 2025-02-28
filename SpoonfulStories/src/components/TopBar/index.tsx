// TopBar component
import React from 'react';
import './style.css';

const TopBar: React.FC = () => {
    return (
        <div className='topbarCont'>
            <div className="leading">
                <img className='logo' src="../../public/assets/Images/logo.png" alt="Logo" />
            </div>
            <div className="tabs">
                <ul>
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="trailing"></div>
        </div>
    );
};

export default TopBar;