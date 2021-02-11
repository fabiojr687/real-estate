import React from 'react';
import './Header.css';
import homePic from '../images/home.jpg';
import HeaderList from './HeaderList';
import SearchBar from './SearchBar';

const Header = () => (
    // section 1 start
    <section className="section">
         <HeaderList />
        <div className="image-border">
            <img src={homePic} alt="house" width="1245" />
            <div className="image-texts">
                <h1 className="imagem-texts-title">
                    Let’s find a home that perfect’s for you
                    </h1>
                <p className="imagem-texts-sub-title">
                    We are here to help you find right the place for you and your family
                    </p>
            </div>
        </div>
        <SearchBar />
    </section>//section 1 end 
);

export default Header;