
import React from 'react';
import "./style.css";

const Footer = () => {
    return (
        <div className='footerCont'>
            <div className="main">

                <div className="quotes">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, quae! Rerum voluptatum odit eos. Quod est culpa quisquam
                </div>
                <div className="navigation">
                    <tr>
                        <td>Recipes</td>
                        <td>Learn/How-to</td>
                        <td>Seasonol Sensations</td>
                        <td>Shop</td>
                    </tr>
                    <tr>
                        <td>Subscribe</td>
                        <td>Terms & Conditions</td>
                        <td>Privacy Policy</td>
                        <td>Help</td>
                    </tr>
                </div>
            </div>
            <div className="bottom">
                www.SpoonFulStories.com, All rights reserved
            </div>
        </div>
    );
}

export default Footer;