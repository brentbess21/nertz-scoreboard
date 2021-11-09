import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to ='/'>About</Link>
                <Link to='/'>Rules</Link>
            </nav>
        </header>
    )
}

export default Header;