import React from 'react';
import './Body.css';
import homePic from '../images/home.jpg';
import { Link } from 'react-router-dom';
import homeIcon from '../images/home-ico.svg';
import SimpleCard from '../components/SimpleCard';
import AnnouncementCard from '../components/AnnouncementCard';

const Body = () => (

    <div className="body-container">
        {/* section 1 start */}
        <section className="section-1">
            <div className="section-1-texts">
                <h2 className="section-1-title">The perfect way to get best property</h2>
                <p className="section-1-explanation">Since our start in 2014, we are profesional and many experience in real state.
                We will always brings you the best value out of our best property. Fato brings
                together property buyers, tenants and investors with the best sellers, tenants,
                real estate agents and property developers in the country.
                So, what are you waiting for? Let’s talk business!
            </p>
                <Link className="section-1-texts-link" to="/">Learn more</Link>
            </div>

            <div className="section-1-image-container">
                <img className="section-1-image" src={homePic} alt="house" />
                <Link className="section-1-image-play" to="/">
                    <span className="section-1-play-button"
                        role="button">|&gt;</span>
                    <p>Watch our history!</p>
                </Link>
            </div>
        </section>        {/* section 1 end */}
        <section className="section-2"> {/* section 2 start */}
            <div className="section-2-title-container">
                <h2 className="section-2-title">Here is a little about what we do</h2>
            </div>
            <SimpleCard classes="section-2-options-container" icon={homeIcon} iconAlt="Buy a home"
                title="Buy a home">Find your place with immersive photo experience and the most
            listings, including things you won’t find anywhere else</SimpleCard>
            <SimpleCard classes="section-2-options-container" icon={homeIcon} iconAlt="Sell a home"
                title="Sell a home">Wheather you sell with new Zilow offers or take another
                approach, we’ll help you navigate the path to a successful sale</SimpleCard>
            <SimpleCard classes="section-2-options-container" icon={homeIcon} iconAlt="Rent a home"
                title="Rent a home">We’re creating a seamless online bussiness experience from
                shopping on the largest rental network, to applying, to paying rent</SimpleCard>
        </section>{/* section 2 end */}
        <section className="section-3">{/* section 3 start */}
            <div className="section-3-image-ico-container">
                <div className="section-3-image-container">
                    <img src={homePic} alt="house" height="774" />
                </div>

                <div className="section-3-icon-1-container">
                    <img className="section-3-icon" src={homeIcon} alt="Negotiation" />
                </div>
                <div className="section-3-icon-2-container">
                    <img className="section-3-icon" src={homeIcon} alt="Negotiation" />
                </div>
            </div>
            <div className="section-3-texts-container">
                <h2>Best way to get your dream home</h2>
                <p>We can help you easily find your dream home, apartment to buy,
                sell and rent that you'll love
                </p>
                <div className="section-3-options">
                    <div className="section-3-number-container">
                        <p className="section-3-number">01</p>
                    </div>
                    <div className="section-3-explanation">
                        <h3>Find a home you want</h3>
                        <p>You need to know about a house. You can make a list of 10 of your favorite
                        houses to make sure you still have a choice if a competitor gets picked up
                        by another buyer.
                        </p>
                    </div>
                </div>

                <div className="section-3-options">
                    <div className="section-3-number-container">
                        <p className="section-3-number">02</p>
                    </div>
                    <div className="section-3-explanation">
                        <h3>Sell your home</h3>
                        <p>Selling your house and moving is a big transition to make, but it doesn’t
                        need to be a stressful experience. Learn how to sell a house the right way
                        with these seven steps!
                        </p>
                    </div>
                </div>

                <div className="section-3-options">
                    <div className="section-3-number-container">
                        <p className="section-3-number">03</p>
                    </div>
                    <div className="section-3-explanation">
                        <h3>Rent a base home for you</h3>
                        <p>If you own a house that you can't sell and are thinking of renting it
                        out, finding good tenants who will take care of your home is
                        challenging, but essential.
                        </p>
                    </div>
                </div>
            </div>

        </section>{/* section 3 end */}

        <section className="section-4">{/* section 4 start */}
            <div className="section-4-title-container">
                <h2 className="section-4-title">Let's explore the property of your dreams</h2>
                <p className="section-4-explanation">Various models of houses, apartments, land
                that we offer for your dream home
                </p>
            </div>

            <div className="section-4-cads">
                <div className="section-4-small-cards">
                    <AnnouncementCard photo={homePic} price="375,000" name="Hilltruck House"
                        location="1187 Lake Forest City, TN" baths="2" beds="4" sqft="2980" />

                    <AnnouncementCard photo={homePic} price="569,000" name="Symphony Dyer"
                        location="2120 Marshville Road, IA" baths="8" beds="12" sqft="6250" />
                </div>
                <div className="section-4-small-cards">
                    <AnnouncementCard photo={homePic} price="569,000" name="Symphony Dyer"
                        location="2120 Marshville Road, IA" baths="8" beds="12" sqft="6250" />

                    <AnnouncementCard photo={homePic} price="569,000" name="Symphony Dyer"
                        location="2120 Marshville Road, IA" baths="8" beds="12" sqft="6250" />
                </div>

                <div className="section-4-larger-card">
                    <AnnouncementCard photo={homePic} price="890,000" name="Richyaris Apartment" size="larger"
                        location="3341 Chardonnay State, WA" baths="10" beds="24" sqft="10680" />
                </div>
            </div>

            <div className="section-4-more-container">
                <Link className="section-4-more-button">View more</Link>
            </div>

        </section>{/* section 4 end */}
    </div>
);

export default Body;