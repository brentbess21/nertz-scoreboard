import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createGame } from '../../actions/gameActions';

import Header from './Header';

const Home = (props) => {

    return (
        <div className='container'>
            <Header />
            <h1 className='ff-serif fs-700 uppercase'>Welcome to the Nerts Scoreboard</h1>
            <div className='container flex'>
                <Link to='/gamestyle' className='link-button'>New Game</Link>
                <Link to='/games_list' className='link-button'>Resume Game</Link>
            </div>
            
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