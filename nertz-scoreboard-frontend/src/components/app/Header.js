import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to ='/about'>About</Link>
                <a href='https://bicyclecards.com/how-to-play/nerts/' target="_blank" rel='noreferrer'>Rules</a>
            </nav>
        </header>
    )
}

export default Header;