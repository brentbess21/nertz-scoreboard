import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import GamePlayer from './GamePlayer';

import { updateRound } from '../../actions/gameActions';


const ScoreBoard = (props) => {

    const { games } = props;
    const { gameId } = useParams();

    const game = games.find(game => game.gameId === parseInt(gameId));
    
    const nextRound = () => {
        const info = {
            gameId: parseInt(gameId)
        }
        console.log('FROM SCOREBOARD: ', gameId)
        props.updateRound(info)
    }
    
    return(
        <div>
            <h1>Here is the ScoreBoard for your Game!</h1>

            { game.rounds !== null ? 
             <p>Number of Rounds: {game.rounds}</p> :
             <p>Winning Score: {game.winningScore}</p>
            }

            <p>Current Round: {game.currentRound} </p>

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
        updateRound: (info) => dispatch(updateRound(info))
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);