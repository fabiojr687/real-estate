import React from 'react';
import './AnnouncementCard.css';
import homeIconBlue from '../images/home-ico-blue.svg';

const AnnouncementCard = props => {

    let cardBar = "section-4-cards-bar";
    let imageContainer = "section-4-image-container";
    if (props.size === "larger") {
        imageContainer = "section-4-image-container-larger";
        cardBar = "section-4-cards-bar-larger";
    };

    return (
        <div className="section-4-cards-container">
            <div className={imageContainer}>
                <img src={props.photo} alt="house" height="774" />
            </div>
            <div className={cardBar}>
                <div className="section-4-type-icon-container">
                    <img className="section-4-type-icon" src={homeIconBlue} alt="Type" />
                </div>
                <div className="section-4-bar-main">
                    <p className="section-4-price">$ {props.price}</p>
                    <p className="section-4-name"> {props.name}</p>
                    <p className="section-4-location">
                        <span>
                            <img className="section-4-location-icon" src={homeIconBlue} alt="Type" />
                        </span>
                        {props.location}
                    </p>
                </div>
                <div className="section-4-secondary">
                    <p>
                        <span>
                            <img className="section-4-secondary-icons" src={homeIconBlue} alt="Type" />
                        </span>
                        {props.baths} Baths
                </p>
                    <p>
                        <span>
                            <img className="section-4-secondary-icons" src={homeIconBlue} alt="Type" />
                        </span>
                        {props.beds} Beds
                </p>
                    <p>
                        <span>
                            <img className="section-4-secondary-icons" src={homeIconBlue} alt="Type" />
                        </span>
                        {props.sqft} sqft
                </p>
                </div>
            </div>
        </div>
    )
};

export default AnnouncementCard;