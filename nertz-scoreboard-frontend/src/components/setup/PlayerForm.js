import { React, useState } from 'react';
import { connect } from 'react-redux';
import { addPlayer, enableNextButton } from '../../actions/gameActions';


const initialNextError = 'You must have at least 2 players!'

const PlayerForm = (props) => {

    const [playerName, setPlayerName] = useState('');
    const[nextError, setNextError] = useState(initialNextError);

    const changeHandler = (e) => {
        setPlayerName(e.target.value)
    }

    const clickHandler = () => {

        if(props.gameFormValues.players.length >= 1){
            props.enableNextButton();
            setNextError('');
            const nextButton = document.getElementById('next-button')
            nextButton.classList.remove('disabled-button')
            nextButton.classList.add('link-button')
        }
        const newPlayer = {
            playerId: Date.now(),
            playerNumber: props.gameFormValues.players.length +1,
            playerName: playerName,
            currentScore: 0,
            roundScore: []
        }        
        props.addPlayer(newPlayer)
        setPlayerName('')

        
    }

    return(
        <div>
            <h1>Add Players</h1>
            <input 
                name='name'
                placeholder='Name'
                type='text'
                value={playerName}
                onChange={changeHandler}
            />
            <button onClick={clickHandler}>Add Player</button>
            <p>{nextError}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        gameFormValues: state.gameFormValues,
        playerFormValues: state.playerFormValues,
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addPlayer: (newPlayer) => dispatch(addPlayer(newPlayer)),
        enableNextButton: () => dispatch(enableNextButton())
    }) 
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);