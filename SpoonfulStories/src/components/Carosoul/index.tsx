import React from 'react';
import "./style.css";
import { carosoulItem, carosoulProps } from './type';
const Carosoul: React.FC<carosoulProps> = ({ items, title }) => {
    return (
        <div className='carosoulCont'>
            <div className="title">{title}</div>
            <div className="itemsCont">
                {items.map((item) => (
                    <div className="item" key={item.id}>
                        <img src={item.image} alt={item.title} />
                        <div className="itemTitle">{item.title}</div>
                        <div className="itemDescription">{item.description}</div>
                        <div className="itemLink">{item.link}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carosoul;