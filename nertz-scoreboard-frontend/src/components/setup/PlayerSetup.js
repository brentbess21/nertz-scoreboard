import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createGame, resetPlayerForm, resetGameForm } from './../../actions/gameActions'

import Header from '../app/Header';
import PlayerForm from './PlayerForm';
import Player from './Player';

const PlayerSetup = (props) => {

    const consoleHandler = () => {
        console.log(props.gameFormValues)
    }

    const clickHandler = () => {
        const newGame = {
            gameId: Date.now(),
            winningScore: props.gameFormValues.winningScore,
            rounds: props.gameFormValues.rounds,
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
            <Link to='/games_list' className = 'link-button' onClick={clickHandler}>Create Game</Link>
        
            <button onClick={consoleHandler}>Tell Me About the Game</button>
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