import React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { createGame, resetPlayerForm, resetGameForm, setGameId, disableNextButton} from './../../actions/gameActions'

import Header from '../app/Header';
import PlayerForm from './PlayerForm';
import Player from './Player';


const PlayerSetup = (props) => {

    const navigate = useNavigate()

    const backHandler = () => {
        props.resetGameForm()
        props.resetPlayerForm()
    }

    const NextHandler = () => {
        props.setGameId(Date.now())
        navigate('/game_setup');
        props.disableNextButton()
    }

    return(
        <div>
            <Header />
            <h1>Who is going to play?</h1>
            <PlayerForm />
            {props.gameFormValues.players.map(player => {
                return <Player key={player.playerId} player={player}/>
            })}

            <div className='flex'>
                <Link to='/gamestyle' className='link-button' id='back-button' onClick={backHandler}>Back</Link>
                {/* <Link to='' className = 'link-button' id='next-button' onClick={nextHandler} >Next</Link> */}
                <button className='disabled-button' id='next-button' onClick={NextHandler} disabled={props.disabledButtons.nextButton}>Next</button>
            </div>

            
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        gameFormValues: state.gameFormValues,
        disabledButtons: state.disabledButtons
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        createGame: (newGame) => dispatch(createGame(newGame)),
        setGameId: (id) => dispatch(setGameId(id)),
        resetGameForm: () => dispatch(resetGameForm()),
        resetPlayerForm: () => dispatch(resetPlayerForm()),
        disableNextButton: ()=> dispatch(disableNextButton())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSetup);