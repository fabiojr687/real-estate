import React from 'react';
import './Body.css';
import homePic from '../images/home.jpg';
import { Link } from 'react-router-dom';
import homeIcon from '../images/home-ico.svg';
import SimpleCard from '../components/SimpleCard';

const Body = () => (

    <div>
        {/* section 1 start */}
        <section className="sections-1">
            <div className="sections-1-texts">
                <h2 className="section-1-title">The perfect way to get best property</h2>
                <p className="section-1-subtitle">Since our start in 2014, we are profesional and many experience in real state.
                We will always brings you the best value out of our best property. Fato brings
                together property buyers, tenants and investors with the best sellers, tenants,
                real estate agents and property developers in the country.
                So, what are you waiting for? Let’s talk business!
            </p>
                <Link className="section-1-texts-link" to="/">Learn more</Link>
            </div>

            <div className="section-1-image-container">
                <img src={homePic} alt="house" width="1002" />
                <Link className="section-1-image-play" to="/">
                    <span className="section-1-play-button"
                        role="button">|&gt;</span>
                    <p>Watch our history!</p>
                </Link>
            </div>
        </section>        {/* section 1 end */}
        <section className="section-2">
            <h2 className="section-2-title">Here is a little about what we do</h2>
            <SimpleCard classes="section-2-options-container" icon={homeIcon}
                title="Buy a home">Find your place with immersive photo experience and the most
            listings, including things you won’t find anywhere else</SimpleCard>
            <SimpleCard classes="section-2-options-container" icon={homeIcon}
                title="Sell a home">Wheather you sell with new Zilow offers or take another
                approach, we’ll help you navigate the path to a successful sale</SimpleCard>
            <SimpleCard classes="section-2-options-container" icon={homeIcon}
                title="Rent a home">We’re creating a seamless online bussiness experience from
                shopping on the largest rental network, to applying, to paying rent</SimpleCard>
        </section>
    </div>
);

export default Body;