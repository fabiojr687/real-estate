import React from 'react';
import './Header.css';
import homePic from '../images/home.jpg';
import HeaderList from './HeaderList';
import SearchBar from './SearchBar';

const Header = () => (
    // section 1 start
    <section className="header-section">
         <HeaderList />
        <div className="header-image-border">
            <img className="header-image" src={homePic} alt="house"/>
            <div className="header-image-texts">
                <h1 className="header-imagem-texts-title">
                    Let’s find a home that perfect’s for you
                    </h1>
                <p className="header-imagem-texts-sub-title">
                    We are here to help you find right the place for you and your family
                    </p>
            </div>
        </div>
        <SearchBar />
    </section>//section 1 end 
);

export default Header;