import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateRound, updateCurrentHighScore, findLeader } from '../../actions/gameActions';

import GamePlayer from '../game/GamePlayer';
import ScoreForm from './ScoreForm';

const WinningScoreBoard = (props) => {

    const { games, nextRound } = props;
    const { gameId } = useParams();
    const game = games.find(game => game.gameId === parseInt(gameId));

    return(
        <div className='grid-container grid-container--scoreboard'>
            <h1 className='title uppercase txt-light'>Nerts <span className='title-bottom txt-dark display-block'>Score board</span></h1>
            
            <div className='game-info txt-light'>
                <h3>Winning Score: {game.winningScore}</h3> 
                <h3>Current Round: {game.currentRound} </h3>

                {game.currentLeader.length < 1? 
                <div></div> :
                <h3>Current Leader: {game.currentLeader.map(player => {
                    return <p key={player.playerId} style={{display: 'inline'}}>{player.playerName} </p>
                })}</h3>
                }
            </div>


            <div className='player-rows flex'>
                {game.players.map(player=> {
                    return (
                        <div className='player-columns flex'>
                            <GamePlayer player={player} key={player.playerId}/>
                            <ScoreForm player={player} key={player.playerId}/>
                        </div>
                    )
                })}
            </div>

            <button className='link-button next-round-button' onClick={nextRound}>Next Round</button>
        
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