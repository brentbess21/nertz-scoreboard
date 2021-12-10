import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateRound, updateCurrentHighScore, findLeader } from '../../actions/gameActions';

import GamePlayer from '../game/GamePlayer';

const RoundsScoreBoard = (props) => {

    const { games, nextRound } = props;
    const { gameId } = useParams();
    const game = games.find(game => game.gameId === parseInt(gameId));

    return(
        <div>
            <h1>Nerts Score board!</h1>

            <h3>Number of Rounds: {game.rounds}</h3> 

            <h3>Current Round: {game.currentRound} </h3>

            {game.currentLeader.length < 1? 
            <div></div> :
            <h3>Current Leader: {game.currentLeader.map(player => {
                return <p key={player.playerId} style={{display: 'inline'}}>{player.playerName} </p>
            })}</h3>
            }

            {game.players.map(player=> {
                return <GamePlayer player={player} key={player.playerId}/>
            })}

            <button onClick={nextRound}>Next Round</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        games: state.games
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        updateRound: (info) => dispatch(updateRound(info)),
        updateCurrentHighScore: (info) => dispatch(updateCurrentHighScore(info)),
        findLeader: (info) => dispatch(findLeader(info))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundsScoreBoard);