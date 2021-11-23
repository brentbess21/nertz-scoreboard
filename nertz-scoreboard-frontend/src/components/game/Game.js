import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../app/Header';
import ScoreBoard from './ScoreBoard';
import Error from '../app/Error';

const Game = (props) => {

    const { games } = props;
    const { gameId } = useParams();

    const game = games.find(game => game.gameId === parseInt(gameId));

    if(game) {
        return(
            <div>
                <Header />
                <h1>GAME ID:{game.gameId}</h1>
                <ScoreBoard />            
            </div>
        )
    } else {
        return(
            <Error />
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        games: state.games
    })
}

export default connect(mapStateToProps)(Game);