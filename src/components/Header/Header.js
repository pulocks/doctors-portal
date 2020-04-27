import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/home">Home</a>
                <a href="/">About</a>
                <a href="/doctors">Doctor's Page</a>
                <a href="/contacts">Contact Us</a>
            </nav>
        </div>
    );
};

export default Header;