import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderListItems.css';

const HeaderListItems = props => (
    <li className={`${props.itemClass}`}>
        <Link
            to={`${props.to}`}>
            {props.children}
            <span className={`${props.additionalClass}`}>
                {props.additional}
            </span>
        </Link>
    </li>
);

export default HeaderListItems;