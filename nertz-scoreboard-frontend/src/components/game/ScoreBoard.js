import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import GamePlayer from './GamePlayer';

import { updateCurrentHighScore, updateRound, findLeader } from '../../actions/gameActions';

const currentScores = []
const highScoreNames = []

const ScoreBoard = (props) => {

    const { games } = props;
    const { gameId } = useParams();

    const game = games.find(game => game.gameId === parseInt(gameId));
    
    const nextRound = () => {
        //update current Highscore
        for(let i = 0; i< game.players.length; i++) {
            const scores = game.players[i].currentScore
            currentScores.push(scores)
        }
        const highScore = Math.max(...currentScores)
        currentScores.length = 0;
        const highScoreInfo = {
            gameId: parseInt(gameId),
            currentHighScore: highScore
        }
        // invoke dispatch function 
        props.updateCurrentHighScore(highScoreInfo)
        // find current Leader
        highScoreNames.length = 0;
        for(let i = 0; i < game.players.length; i++) {
            if (game.players[i].currentScore === game.currentHighScore) {
                highScoreNames.push(game.players[i])
            }
        }
        const leaderInfo = {
            gameId: parseInt(gameId),
            currentLeader: highScoreNames
        }
        //invoke dispatch functions
        props.findLeader(leaderInfo)
        props.updateRound(leaderInfo)
    }

    // if(game.rounds !== null && game.currentRound <= game.rounds) {
    //     return (
    //         <div>
    //             <h1>Here is the ScoreBoard for your Game!</h1>

    //             <p>Number of Rounds: {game.rounds}</p> 

    //             <p>Current Round: {game.currentRound} </p>

    //             {game.currentLeader.length < 1? 
    //             <div></div> :
    //             <p>LEADER: {game.currentLeader[0].playerName}</p>
    //             }
    
    //             {game.players.map(player=> {
    //                 return <GamePlayer player={player} key={player.playerId}/>
    //             })}

    //             <button onClick={nextRound}>Next Round</button>
    //         </div>
    //     );
    // } else if (game.rounds !== null && game.currentRound > game.rounds) {
    //     return(
    //         <div>
    //             <h1>WE HAVE A WINNER!</h1>
    //             <p>{game.currentLeader[0].playerName} WON!</p>
    //         </div>
    //     );
    // } else if (game.winningScore !== null && game.currentHighScore < game.winningScore) {
    //     return(
    //         <div>
    //             <h1>Here is the ScoreBoard for your Game!</h1>

    //             <p>Winning Score: {game.winningScore}</p> 

    //             <p>Current Round: {game.currentRound} </p>

    //             {game.currentLeader.length < 1? 
    //             <div></div> :
    //             <p>LEADER: {game.currentLeader[0].playerName}</p>
    //             }

    //             {game.players.map(player=> {
    //                 return <GamePlayer player={player} key={player.playerId}/>
    //             })}

    //             <button onClick={nextRound}>Next Round</button>
    //         </div>
    //     );
    // } else if (game.winningScore !== null && game.currentHighScore >= game.winningScore) {
    //     return(
    //         <div>
    //             <h1>WE HAVE A WINNER!</h1>
    //             <p>{game.currentLeader[0].playerName} WON!</p>
    //         </div>
    //     );
    // }

    return(
        <div>
            <h1>Here is the ScoreBoard for your Game!</h1>

            <p>Winning Score: {game.winningScore}</p> 

            <p>Current Round: {game.currentRound} </p>

            {!game.currentLeader ? 
            <div></div> :
            <p>LEADER: {game.currentLeader[0].playerName}</p>
            }

            {game.players.map(player=> {
                return <GamePlayer player={player} key={player.playerId}/>
            })}

            <button onClick={nextRound}>Next Round</button>
        </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);