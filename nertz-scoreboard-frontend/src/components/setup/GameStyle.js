import React from 'react';
import { Link } from 'react-router-dom';

import Header from './../app/Header';

import img from './../../assets/question-marks.png';

const GameStyle = () => {
    return(
        <div className='gamestyle'>
            <Header />
            <main className='grid-container grid-container--gamestyle'>
                <h1 className='title txt-light'>How Would You <span className='title-bottom display-block txt-dark fs-800'>Like to Play?</span></h1>
                <img src={img} alt='question marks' />
                <div className='flex double-button'>
                    <Link to='/score_setup' className='link-button'>Select Score</Link>
                    <Link to='/rounds_setup' className='link-button'>Select Rounds</Link>
                </div>
            </main>
           
        </div>
    )
}

export default GameStyle;