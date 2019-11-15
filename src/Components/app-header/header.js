import React from 'react';
import './header.css';

const Header=()=>{
    return(
        <div className="header d-flex">
            <h3>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a href="#">
                    Star DB
                </a>
            </h3>
            <ul className="d-flex">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#">People</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#">Planets</a></li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href="#">Starships</a></li>
            </ul>
        </div>
    )
};

export default Header;