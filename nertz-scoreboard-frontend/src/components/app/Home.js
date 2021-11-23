import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createGame } from '../../actions/gameActions';

import Header from './Header';

const Home = (props) => {

    return (
        <div>
            <Header />
            <h1>Welcome to the Nerts Scoreboard!</h1>
            <div>
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