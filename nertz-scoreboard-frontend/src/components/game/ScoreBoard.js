import React from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { updateCurrentHighScore, updateRound, findLeader } from '../../actions/gameActions';

import Header from '../app/Header';
import RoundsScoreBoard from './RoundsScoreBoard';
import WinningScoreBoard from './WinningScoreBoard';
import Winner from './Winner';

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

    if(!game) {
        return(
            <div>
                <Header />
                <h1>Uh Oh! That game wasn't found!</h1>
                <p>Please navigate back home to resume a game or start a new game!</p>
                <Link to='/' className='link-button'>Home</Link>
            </div>
        )
    } else if (game.rounds !== null && game.currentRound <= game.rounds) {
        return (
            <div className='container'>
                <Header />
                <RoundsScoreBoard nextRound={nextRound} />
            </div>
        )
    } else if (game.winningScore !== null && game.currentHighScore < game.winningScore) {
        return (
            <div className='container'>
                <Header />
                <WinningScoreBoard nextRound={nextRound} /> 
            </div>
                
        ) 
    } else if (game.rounds !== null && game.currentRound > game.rounds) {
        return (
            <div className='container'>
                <Header />
                <Winner />
            </div>
        ) 
    } else if (game.winningScore !== null && game.currentHighScore >= game.winningScore) {
        return (
            <div className='container'>
                <Header />
                <Winner />
            </div>
        ) 
    }
    
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