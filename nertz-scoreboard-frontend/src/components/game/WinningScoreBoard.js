import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateRound, updateCurrentHighScore, findLeader } from '../../actions/gameActions';

import GamePlayer from '../game/GamePlayer';

const WinningScoreBoard = (props) => {

    const { games, nextRound } = props;
    const { gameId } = useParams();
    const game = games.find(game => game.gameId === parseInt(gameId));

    return(
        <div>
        
            <h1>Here is the ScoreBoard for your Game!</h1>

            <p>Winning Score: {game.winningScore}</p> 

            <p>Current Round: {game.currentRound} </p>

            {game.currentLeader.length < 1? 
            <div></div> :
            <p>LEADER: {game.currentLeader[0].playerName}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(WinningScoreBoard);