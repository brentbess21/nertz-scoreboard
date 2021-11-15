import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header />
            <h1>Welcom to the Nerts Scoreboard!</h1>
            <div>
                <Link to='/' className='link-button'>New Game</Link>
                <Link to='/' className='link-button'>Resume Game</Link>
            </div>
            
        </div>
    )
}

export default Home;