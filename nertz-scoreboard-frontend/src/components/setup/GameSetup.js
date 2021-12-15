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
import Error from '../app/Error';

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
        return <Error />
    } else {
        return (
            <div className='game-setup'>
                <Header />
                <main className='grid-container'>
                    <h1 className='title uppercase txt-light'>Confirm <span className='title-bottom display-block txt-dark'>Game Details</span></h1>
        
                    { props.gameFormValues.winningScore !== null ? 
                    <h3 className='txt-light'>{props.gameFormValues.players.length} players, playing to a score of {props.gameFormValues.winningScore}</h3> :
                    <h3 className='txt-light'>{props.gameFormValues.players.length} players, playing for {props.gameFormValues.rounds} rounds</h3>}

                    <div className='save-game'>
                        <button className='link-button' id='save-game-button' onClick={saveGameHandler} disabled={props.disabledButtons.saveGameButton} >Save Game</button>
                        <p className='txt-dark'>{playError}</p>
                    </div>
                    
                    <div className='container flex'>
                        <Link to='/gamestyle' className='link-button' onClick={startOver}>Start Over</Link>
                        <button onClick={playHandler} className='disabled-button' id='play-button' disabled={props.disabledButtons.playButton}>Play</button>
                    </div>
                </main>
                
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
