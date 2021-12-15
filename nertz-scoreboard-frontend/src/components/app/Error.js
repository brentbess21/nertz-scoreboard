import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

import img from './../../assets/error.png';

const Error = (props)=> {
    return(
        <div className='error'>
            <Header />
            <main className='grid-container'>
                <h1 className='title txt-light'>Uh Oh! <span className='title-bottom display-block txt-dark'>There Was An Error</span></h1>
                <img className='error-point' src={img} alt='error exclamations point'/>
                <p className='txt-dark'>To Get Started, Please Start a New Game</p>
                <Link to='/gamestyle' className='link-button'>New Game</Link>
            </main>
        </div>
    )
}

export default Error;