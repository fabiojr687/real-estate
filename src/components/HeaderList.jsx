import React from 'react';
import './HeaderList.css';
import HeaderListItems from './HeaderListItems';
import fatoIcon from '../images/fato-icon.svg';

const HeaderList = () => (
  <div className="toolbar-nav-items font-nunito-sans">
    <ul>
      <HeaderListItems itemClass="fato" to="/"
        additionalClass="fato-point" additional="." >
        <span>
          <img className="toolbar-fato-icon" src={fatoIcon} alt="Fato logo" />
        </span>
        Fato
      </HeaderListItems>
      <HeaderListItems />
      <HeaderListItems to="/" >Home</HeaderListItems>
      <HeaderListItems to="/" >About us</HeaderListItems>
      <HeaderListItems to="/" >Service</HeaderListItems>
      <HeaderListItems to="/" >Blog</HeaderListItems>
      <HeaderListItems to="/" >Testimonials</HeaderListItems>
      <HeaderListItems to="/" >Contact</HeaderListItems>
      <HeaderListItems />
      <HeaderListItems />
      <HeaderListItems />
      <HeaderListItems />
      <HeaderListItems />
      <HeaderListItems itemClass="get-started"
        to="/" ><div>Get Started</div></HeaderListItems>
    </ul>
  </div>
);

export default HeaderList;