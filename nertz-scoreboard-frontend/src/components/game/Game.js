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

    const clickHandler = () => {
        console.log(games)
    }

    if(game) {
        return(
            <div>
                <Header />
                <h1>GAME ID:{game.gameId}</h1>
                <ScoreBoard /> 
                <button onClick={clickHandler}>Click Me!</button>           
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