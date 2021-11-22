import React from 'react';
import { Link } from 'react-router-dom';

import Header from './../app/Header';

const GameStyle = () => {
    return(
        <div>
            <Header />
            <h1>How Would You Like to Play?</h1>
            <Link to='/score_setup' className='link-button'>Winning Score</Link>
            <Link to='/rounds_setup' className='link-button'>Number of Rounds</Link>
        </div>
    )
}

export default GameStyle;