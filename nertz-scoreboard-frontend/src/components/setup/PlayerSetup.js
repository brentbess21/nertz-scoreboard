import React from 'react';
import { connect } from 'react-redux';

import Header from '../app/Header';
import PlayerForm from './PlayerForm';
import Player from './Player';

const PlayerSetup = (props) => {

    const clickHandler = () => {
        console.log(props.gameFormValues)
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
        
            <button onClick={clickHandler}>Tell Me About the Game</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        gameFormValues: state.gameFormValues
    })
}

export default connect(mapStateToProps)(PlayerSetup);