// Homepage

import React from 'react';
import "./style.css";
import Modal from '../../components/Modal';
import Carosoul from '../../components/Carosoul';
import { carosoulItem } from '../../components/Carosoul/type';

const Home: React.FC = () => {

    const soups: carosoulItem[] = [
        {
            id: 1,
            image: "../../public/assets/Images/1.jpg",
            title: "Spicy soup",
            description: "lorem ipsum dolor sit amet consectetur sed do eiusmod tempor  adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
            link: "Read more"
        },
        {
            id: 2,
            image: "../../public/assets/Images/2.jpg",
            title: "Spicy soup",
            description: "lorem ipsum dolor sit amet consectetur sed do eiusmod tempor  adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
            link: "Read more"
        },
        {
            id: 3,
            image: "../../public/assets/Images/3.jpg",
            title: "Spicy soup",
            description: "lorem ipsum dolor sit amet consectetur sed do eiusmod tempor  adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
            link: "Read more"
        },
        {
            id: 4,
            image: "../../public/assets/Images/4.jpg",
            title: "Spicy soup",
            description: "lorem ipsum dolor sit amet consectetur sed do eiusmod tempor  adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
            link: "Read more"
        },
        {
            id: 5,
            image: "../../public/assets/Images/5.jpg",
            title: "Spicy soup",
            description: "lorem ipsum dolor sit amet consectetur sed do eiusmod tempor  adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
            link: "Read more"
        },
        {
            id: 6,
            image: "../../public/assets/Images/6.jpg",
            title: "Spicy soup",
            description: "lorem ipsum dolor sit amet consectetur sed do eiusmod tempor  adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .",
            link: "Read more"
        },
    ];
    return (
        <div className='homeCont'>
            <div className="landingCont">
                <img src="../../public/assets/Images/7.jpg" alt="" />
                <Modal>
                    <div className="heroCont">
                        <div className="hero">


                            <div className="heroTitle">
                                9 <span>Delicious Dishes</span> for Food Lovers.
                            </div>
                            <div className="heroSubTitle">
                                lorem ipsum dolor sit amet consectetur sed do eiusmod tempor  adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua .
                            </div>
                            <div className="heroAction">
                                Explore receipes
                            </div>
                        </div>

                    </div>
                </Modal>


            </div>
            <div className="soupCarosoulCont">
                <Carosoul items={soups} title="Check our Soup" />
            </div>
            <div className="trendyRecipesCont"></div>
            <div className="recipesBlogCont"></div>
            <div className="galleryCont"></div>
            <div className="subscriptionCont"></div>
        </div>
    );
};

export default Home;

