import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createGame } from '../../actions/gameActions';

import Header from './Header';

import logo from './../../assets/home-logo.png';

const Home = (props) => {

    return (
        <div className='home'>
        
            <Header />
            <main className='grid-container grid-container--home'>
                <h1 className='txt-light title uppercase'>Welcome to the <span className='title-bottom display-block txt-dark fs-800'>Nerts Score Board </span></h1>
                <img className='logo' src={logo} alt='two playing cards'/>
                <div className='flex double-button'>
                    <Link to='/gamestyle' className='link-button'>New Game</Link>
                    <Link to='/games_list' className='link-button'>Resume Game</Link>
                </div>
            </main>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        games: state.games
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createGame: (newGame) => dispatch(createGame(newGame))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);