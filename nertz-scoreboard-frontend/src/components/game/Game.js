import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../app/Header';

const Game = (props) => {

    const { games } = props
    const { gameId } = useParams();

    const game = games.find(game => game.gameId === parseInt(gameId))
    console.log(game)
    return(
        <div>
            <Header />
            <h1>GAME ID:{game.gameId}</h1>
            <div>Players: {game.players.map(player => {
                return <p key={player.playerId}>{player.playerName}</p>
            })}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        games: state.games
    })
}

export default connect(mapStateToProps)(Game);