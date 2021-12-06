import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createGame, resetPlayerForm, resetGameForm } from './../../actions/gameActions'

import Header from '../app/Header';
import PlayerForm from './PlayerForm';
import Player from './Player';

const PlayerSetup = (props) => {

    const clickHandler = () => {
        const newGame = {
            gameId: Date.now(),
            winningScore: props.gameFormValues.winningScore,
            rounds: props.gameFormValues.rounds,
            currentRound: props.gameFormValues.currentRound,
            currentHighScore: props.gameFormValues.currentHighScore,
            currentLeader: props.gameFormValues.currentLeader,
            players: props.gameFormValues.players
        }
        props.createGame(newGame)
        props.resetGameForm()
        props.resetPlayerForm()
    }

    return(
        <div>
            <Header />
            { props.gameFormValues.winningScore !== null ? 
            <h1>For a game with a winning score of {props.gameFormValues.winningScore}</h1> :
            <h1>For a game with {props.gameFormValues.rounds} rounds</h1>}
            <PlayerForm />
            {props.gameFormValues.players.map(player => {
                return <Player key={player.playerId} player={player}/>
            })}
            <Link to={`/games_list`} className = 'link-button' onClick={clickHandler}>Create Game</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        gameFormValues: state.gameFormValues
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createGame: (newGame) => dispatch(createGame(newGame)),
        resetGameForm: () => dispatch(resetGameForm()),
        resetPlayerForm: () => dispatch(resetPlayerForm())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSetup);