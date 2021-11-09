import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header />
            <h1>Welcom to the Nertz Scoreboard!</h1>
            <Link to='/'>New Game</Link>
            <Link to='/'>Resume Game</Link>
        </div>
    )
}

export default Home;