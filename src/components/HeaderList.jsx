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
      <HeaderListItems to="/" name="About us" >About us</HeaderListItems>
      <HeaderListItems to="/" name="Service" >Service</HeaderListItems>
      <HeaderListItems to="/" name="Blog" >Blog</HeaderListItems>
      <HeaderListItems to="/" name="Testimonials" >Testimonials</HeaderListItems>
      <HeaderListItems to="/" name="Contact" >Contact</HeaderListItems>
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