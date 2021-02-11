import React from 'react';
import { Link } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => (
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
);

export default SearchBar