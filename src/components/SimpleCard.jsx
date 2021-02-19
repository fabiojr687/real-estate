import React from 'react';
import './SimpleCard.css';

const SimpleCard = props => (
    <div className="section-2-options-container">
        <div className="section-2-icons-container">
            <img className="section-2-icons" src={props.icon} alt={props.iconAlt} />
        </div>
        <h3 className="section-2-subtitle">{props.title}</h3>
        <p className="section-2-explanation">{props.children}</p>
    </div>
);

export default SimpleCard;