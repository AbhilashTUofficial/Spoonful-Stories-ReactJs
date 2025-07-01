import React from 'react';
import "./style.css";
import { carosoulProps } from './type';
const Carosoul: React.FC<carosoulProps> = ({ items }) => {
    return (
        <div className='carosoulCont'>
            <div className="itemsCont">
                {items}
            </div>
        </div>
    );
}

export default Carosoul;