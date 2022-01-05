import React from 'react';

import Header from './Header';

const About = () => {
    return(
        <div className='home'>
            <Header />
            <div className='grid-container flow'>
                <h1 className='txt-light title uppercase'>About the <span className='title-bottom display-block txt-dark fs-800'>Nerts Score Board </span></h1>
                <p>This website was built so you can keep track of the score of each player playing a game of Nerts</p>
            </div>
            
        </div>
    )
}

export default About;