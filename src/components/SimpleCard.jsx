import React from 'react';
import './SimpleCard.css';

const SimpleCard = props => (
    <div className={props.classes}>
        <img className="section-2-icons" src={props.icon} alt="Buy icon" />
        <h3 className="section-2-subtitle">{props.title}</h3>
        <p className="section-2-explanation">{props.children}</p>
    </div>
);

export default SimpleCard;