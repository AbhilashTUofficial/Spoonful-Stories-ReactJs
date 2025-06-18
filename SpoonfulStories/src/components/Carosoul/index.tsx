import React from 'react';
import "./style.css";
import { carosoulItem, carosoulProps } from './type';
const Carosoul: React.FC<carosoulProps> = ({ items, title }) => {
    return (
        <div className='carosoulCont'>
            <div className="title">{title.split(" ").slice(0, -1).join(" ")}{" "}<span>{title.split(" ").slice(-1).join(" ")}</span></div>
            <div className="itemsCont">
                {items}
            </div>
        </div>
    );
}

export default Carosoul;