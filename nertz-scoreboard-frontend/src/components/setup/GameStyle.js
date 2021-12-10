import React from 'react';
import { Link } from 'react-router-dom';

import Header from './../app/Header';

const GameStyle = () => {
    return(
        <div className='container'>
            <Header />
            <h1 className='ff-serif fs-700 uppercase'>How Would You Like to Play?</h1>
            <div className='container flex'>
                <Link to='/score_setup' className='link-button'>Select Score</Link>
                <Link to='/rounds_setup' className='link-button'>Select Rounds</Link>
            </div>
           
        </div>
    )
}

export default GameStyle;