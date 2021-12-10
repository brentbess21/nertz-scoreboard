import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../app/Header';

const Games = (props) => {

    if(props.games.length < 1) {
        return(
            <div className='container'>
                <Header />
                <h1>There are no saved games!</h1>
                <p>Start A New Game To Get Started!</p>
                <Link to='/gamestyle' className='link-button'>New Game</Link>
            </div>
        )
    } else {
        return (
            <div className='container'>
                <Header />
                <h1>Pick a Game!</h1>
                {props.games.map(game => {
                    return <Link className='link-button' to={`/games_list/${game.gameId}`} key={game.gameId}>{game.gameId}: {game.players.length} players</Link>
                
                })}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return ({
        games: state.games,
    })
}

export default connect(mapStateToProps)(Games);