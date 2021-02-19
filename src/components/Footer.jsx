import React from 'react';
import './Footer.css';
import fatoIcon from '../images/fato-icon-white.svg';

const Footer = () => (
    <footer className="home-footer">
        <div className="home-footer-containers">
            <p className="home-footer-logo">
                <img className="home-footer-fato-icon" src={fatoIcon} alt="Fato" />
                Fato<span className="home-footer-span">.</span>
            </p>
            <p className="home-footer-fato">We commited to ensuring digital accessbility for individuals</p>
            <p className="home-footer-fato">3444 Par Drive, Burbank Street, California, CA</p>
        </div>

        <div className="home-footer-containers">
            <ul>
                <li className="home-footer-list-title">Support</li>
                <li>Help Videos</li>
                <li>Accessories</li>
                <li>View Booking</li>
                <li>Features</li>
                <li>Terms &amp; Policy</li>
            </ul>
        </div>

        <div className="home-footer-containers">
            <ul>
                <li className="home-footer-list-title">Support</li>
                <li>Help Videos</li>
                <li>Accessories</li>
                <li>View Booking</li>
                <li>Features</li>
                <li>Terms &amp; Policy</li>
            </ul>
        </div>

        <div className="home-footer-containers">
            <ul>
                <li className="home-footer-list-title">Support</li>
                <li>Help Videos</li>
                <li>Accessories</li>
                <li>View Booking</li>
                <li>Features</li>
                <li>Terms &amp; Policy</li>
            </ul>
        </div>

        <div className="home-footer-stay-updated">
            <p>Stay Updated</p>
            <form className="home-footer-form-input">
                <input className="home-footer-input-box" type="text" name="email" placeholder="Enter your email" />
                <input className="home-footer-input-submit" type="submit" value="" />
            </form>
        </div>
    </footer>
);

export default Footer;