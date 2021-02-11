import React from 'react';
import './HeaderList.css';
import HeaderListItems from './HeaderListItems';

const HeaderList = () => (
  <div className="toolbar-nav-items font-nunito-sans">
    <ul>
      <HeaderListItems itemClass="fato" to="/"
        additionalClass="fato-point" additional="." >Fato</HeaderListItems>
      <HeaderListItems />
      <HeaderListItems to="/"  >Home</HeaderListItems>
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