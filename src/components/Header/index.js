import React from "react";
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faBookmark, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
    <nav className="nav-bar">
        <div className="logo-card">
            <h1 className="logo">TANN TRIM</h1>
        </div>
        <div className="menu-card">
            <ul className="menu-list">
                <li className="menu-item">
                    <p className="items">Bags</p>
                </li>
                <li className="menu-item">
                    <p className="items">Travel</p>
                </li>
                <li className="menu-item">
                    <p className="items">Accesories</p>
                </li>
                <li className="menu-item">
                    <p className="items">Gifting</p>
                </li>
                <li className="menu-item">
                    <p className="items">Jewelery</p>
                </li>
            </ul>
            <div className="icon-section">
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faBookmark} />
                <FontAwesomeIcon icon={faShoppingBag} />
            </div>
        </div>
    </nav>
)
export default Header