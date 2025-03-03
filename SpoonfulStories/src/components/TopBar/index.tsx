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
                    <li>Recipes</li>
                    <li>Learn/How-to</li>
                    <li>Seasonol Sensations</li>
                    <li>Shop</li>
                </ul>
            </div>
            <div className="trailing">
                <div className="subscribBtn">Subscribe</div>
            </div>
        </div>
    );
};

export default TopBar;