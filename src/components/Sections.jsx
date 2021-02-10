import React from 'react';
import { Link } from 'react-router-dom';
import './Sections.css';
import HeaderList from './HeaderList';
import homePic from '../images/home.jpg';

const Section = () => (
    // section 1 start
    <section className="sections">
        <HeaderList />
        <img src={homePic} alt="some text" width="1524" height="885px" />
    </section>//section 1 end 
);

export default Section;