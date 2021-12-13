import React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { resetPlayerForm, resetGameForm, setGameId, disableNextButton} from './../../actions/gameActions'

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
        <div className='player-setup'>
            <Header />
            <main className='grid-container'>
                <h1 className='title txt-light'>Who is going to play?</h1>
                <PlayerForm />
                    {props.gameFormValues.players.map(player => {
                        return <Player key={player.playerId} player={player}/>
                    })}
                <div className='flex double-button'>
                    <Link to='/gamestyle' className='link-button' id='back-button' onClick={backHandler}>Back</Link>
                    <button className='disabled-button' id='next-button' onClick={NextHandler} disabled={props.disabledButtons.nextButton}>Next</button>
                </div>    
            </main>
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
        setGameId: (id) => dispatch(setGameId(id)),
        resetGameForm: () => dispatch(resetGameForm()),
        resetPlayerForm: () => dispatch(resetPlayerForm()),
        disableNextButton: ()=> dispatch(disableNextButton())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSetup);