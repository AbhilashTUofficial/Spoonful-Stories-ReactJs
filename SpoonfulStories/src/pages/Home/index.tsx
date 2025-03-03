// Homepage

import React from 'react';
import "./style.css";
import Modal from '../../components/Modal';

const Home: React.FC = () => {
    return (
        <div className='homeCont'>
            <div className="landingCont">
                <img src="../../public/assets/Images/7.jpg" alt="" />
                <Modal />


            </div>
            <div className="soupCarosoulCont"></div>
            <div className="trendyRecipesCont"></div>
            <div className="recipesBlogCont"></div>
            <div className="galleryCont"></div>
            <div className="subscriptionCont"></div>
        </div>
    );
};

export default Home;

