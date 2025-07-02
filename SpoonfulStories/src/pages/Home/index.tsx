// Homepage

import React, { useLayoutEffect } from 'react';
import "./style.css";
import Modal from '../../components/Modal';
import Carosoul from '../../components/Carosoul';
import { carosoulItem } from '../../components/Carosoul/type';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import ReactPaginate from 'react-paginate';
import Pagination from '../../components/Pagination';

const Home: React.FC = () => {

    const shopsSubTitle = "Check Our Shop";
    const trendyRecipesSubTitle = "Trendy Recipes";
    const ourGallerySubTitle = "Our Gallery";
    const recipeBlogsSubTitle = "Recipe Blogs";
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
    useLayoutEffect(() => {
        function updateWidth() {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    })
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


    const RecipeCards = () => {
        return (
            <div className="cardsCont">
                {
                    [soups[0].image, soups[1].image, soups[2].image].map((image, index) => {
                        return (
                            <Card>
                                <div className="card">
                                    <img className="cardImage" src={image} alt="" />
                                    <div className="cardDescription">
                                        <div className="cardDescriptionTitle">Chiken Fajita</div>
                                        <div className="cardDescriptionSubTitle"><span>Ingredients: </span> chiken, tomato, onion, salt, pepper, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, quae! Rerum voluptatum odit eos. Quod est culpa quisquam impedit voluptate quos? Odio facilis, voluptate repudiandae aliquam pariatur ex deserunt amet.</div>
                                    </div>
                                </div>
                            </Card>
                        )
                    })

                }
            </div>
        )
    }

    const BlogCards = () => {
        return (
            <div className="blogCardsCont">
                {
                    [soups[0].image, soups[1].image, soups[2].image].map((image, index) => {
                        return (
                            <div className="blogTile">
                                <img className="blogTileImage" src={image} alt="" />
                                <div className="blogTileContentCont">
                                    <div className="blogTileDescriptionTitle">Chiken Fajita</div>
                                    <div className="blogTileDescription">chiken, tomato, onion, salt, pepper, Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                                </div>
                            </div>
                        )
                    })

                }
            </div>
        )
    }

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
            <div className="contentCont">
                <div className="soupCarosoulCont">
                    <div className="subTitle">{shopsSubTitle.split(" ").slice(0, -1).join(" ")}{" "}<span>{shopsSubTitle.split(" ").slice(-1).join(" ")}</span></div>
                    <Carosoul items={
                        soups.map((item) => {
                            return (
                                <div className="soupCarosoulItem" key={item.id}>
                                    <div className="carosoulItemBasicInfo">
                                        <img className="soupCarosoulItemImage" src={item.image} alt="" />
                                        <div className="carosoulItemTitle">{item.title}</div>
                                    </div>
                                    <div className="carosoulItemDescription">{item.description}</div>
                                </div>
                            )
                        })
                    } />
                </div>


                <div className="subTitle">{trendyRecipesSubTitle.split(" ").slice(0, -1).join(" ")}{" "}<span>{trendyRecipesSubTitle.split(" ").slice(-1).join(" ")}</span></div>

                <div className="trendyRecipesCont">
                    <Pagination>
                        <RecipeCards />
                    </Pagination>
                </div>
                <div className="subTitle">{recipeBlogsSubTitle.split(" ").slice(0, -1).join(" ")}{" "}<span>{recipeBlogsSubTitle.split(" ").slice(-1).join(" ")}</span></div>

                <div className={screenWidth < 1200 ? "recipeBlogsContTablet" : "recipeBlogsContWeb"}>
                    <div className="blogSection1">
                        <img src="../../public/assets/Images/4.jpg" className="blogSectinon1Image" />
                        <div className="blogDate">November 10, 2022</div>
                        <div className="blogTitle">Chiken Fajita</div>
                        <div className="blogDescription">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, quae! Rerum voluptatum odit eos. Quod est culpa quisquam impedit voluptate quos? Odio facilis
                        </div>
                    </div>
                    <div className="blogSection2">
                        <BlogCards />
                    </div>
                </div>


                <div className="subTitle">{ourGallerySubTitle.split(" ").slice(0, -1).join(" ")}{" "}<span>{ourGallerySubTitle.split(" ").slice(-1).join(" ")}</span></div>

                <div className="ourGalleryCont">
                    <RecipeCards />
                </div>


            </div>
        </div>
    );
};

export default Home;

