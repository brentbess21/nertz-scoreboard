import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createGame } from '../../actions/gameActions';

import Header from './Header';

const Home = (props) => {
    const clickHandler = () => {
        props.createGame(Date.now())
        console.log(props)
    } 

    return (
        <div>
            <Header />
            <h1>Welcom to the Nerts Scoreboard!</h1>
            <div>
                <Link to='/gamestyle' className='link-button' onClick={clickHandler}>New Game</Link>
                <Link to='/' className='link-button'>Resume Game</Link>
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
        createGame: (id) => dispatch(createGame(id))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);