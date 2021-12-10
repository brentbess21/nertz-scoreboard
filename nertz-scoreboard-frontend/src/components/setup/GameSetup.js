import { React, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { 
    createGame,
    resetGameForm, 
    resetPlayerForm, 
    enablePlayButton, 
    disablePlayButton, 
    enableSaveButton, 
    disableSaveButton 
} from '../../actions/gameActions';

import Header from '../app/Header';

const initialPlayError = 'Save game to start playing';

const GameSetup = (props) => {

    const [playError, setPlayError] = useState(initialPlayError);

    const navigate = useNavigate();

    const saveGameHandler = () => {
        // create new game
        const newGame = {
            gameId: props.gameFormValues.gameId,
            winningScore: props.gameFormValues.winningScore,
            rounds: props.gameFormValues.rounds,
            currentRound: props.gameFormValues.currentRound,
            currentHighScore: props.gameFormValues.currentHighScore,
            currentLeader: props.gameFormValues.currentLeader,
            players: props.gameFormValues.players
        }
        props.createGame(newGame);
        // get rid of error/warning
        setPlayError('');
        // enable the play button
        const playButton = document.getElementById('play-button');
        playButton.classList.remove('disabled-button')
        playButton.classList.add('link-button')
        props.enablePlayButton();
        
        // disable the save button
        props.disableSaveButton();
        const saveGameButton = document.getElementById('save-game-button');
        saveGameButton.classList.remove('link-button');
        saveGameButton.classList.add('disabled-button');
        console.log(props.disabledButtons.saveGameButton)
    }

    const startOver = () => {
        props.resetGameForm();
        props.resetPlayerForm();
    }

    const playHandler = () => {
        //link to the proper game scoreboard
        navigate(`/games_list/${props.gameFormValues.gameId}/play`);
        //reset the disabled play button
        props.disablePlayButton();
        //reset game and player forms
        props.resetGameForm();
        props.resetPlayerForm();
        //reset enabled save game button
        props.enableSaveButton();
    }

   
    if(props.gameFormValues.gameId === 0) {
        return(
            <div>
                <Header />
                <h1>Uh Oh! There Doesn't Seem To Be Any Game Information</h1>
                <p>Please Start a New Game</p>
                <Link to='/gamestyle' className='link-button'>New Game</Link>
            </div>
        )
    } else {
        return (
            <div>
                <Header />
                <h1>Are You Ready To Play?</h1>
    
                { props.gameFormValues.winningScore !== null ? 
                <h3>{props.gameFormValues.players.length} players, playing to a score of {props.gameFormValues.winningScore}</h3> :
                <h3>{props.gameFormValues.players.length} players, playing for {props.gameFormValues.rounds} rounds</h3>}

                <button className='link-button' id='save-game-button' onClick={saveGameHandler} disabled={props.disabledButtons.saveGameButton} >Save Game</button>
                <p>{playError}</p>
                
                <div className='container flex'>
                    <Link to='/gamestyle' className='link-button' onClick={startOver}>Start Over</Link>
                    <button onClick={playHandler} className='disabled-button' id='play-button' disabled={props.disabledButtons.playButton}>Play</button>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        games: state.games,
        gameFormValues: state.gameFormValues,
        playerFormValues: state.playerFormValues,
        disabledButtons: state.disabledButtons
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createGame: (newGame) => dispatch(createGame(newGame)),
        resetGameForm: () => dispatch(resetGameForm()),
        resetPlayerForm: () => dispatch(resetPlayerForm()),
        enablePlayButton: () => dispatch(enablePlayButton()),
        disablePlayButton: () => dispatch(disablePlayButton()),
        enableSaveButton: () => dispatch(enableSaveButton()),
        disableSaveButton: () => dispatch(disableSaveButton())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(GameSetup);
