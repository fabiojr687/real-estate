import React from 'react';
import './Sections.css';
import { Link } from 'react-router-dom'
import HeaderList from './HeaderList';
import homePic from '../images/home.jpg';

const Section = () => (
    // section 1 start
    <section className="sections">
        <HeaderList />
        <div className="image-border">
            <img src={homePic} alt="some text" width="1245" />
            <div className="image-texts">
                <h1 className="imagem-texts-title">
                    Let’s find a home that perfect’s for you
                    </h1>
                <p className="imagem-texts-sub-title">
                    We are here to help you find right the place for you and your family
                    </p>
            </div>
            <div className="search-bar">
                <div className="search-bar-container">
                    <div>
                        <p className="search-bar-top-text">What will you do ?</p>
                        <p className="search-bar-bottom-text">Rent</p>
                    </div>
                    <div>
                        <p className="search-bar-top-text">House type</p>
                        <p className="search-bar-bottom-text">Apartment</p>
                    </div>
                    <div>
                        <p className="search-bar-top-text">Location</p>
                        <p className="search-bar-bottom-text">Sawojajar, Malang Kota</p>
                    </div>
                    <div>
                        <p className="search-bar-top-text">Max price</p>
                        <p className="search-bar-bottom-text">$12,000</p>
                    </div>
                    <Link to="/">
                        <p className="search-bar-button-search">Search</p>
                    </Link>
                </div>
            </div>
        </div>
    </section>//section 1 end 
);

export default Section;