import { React, useState } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../../actions/gameActions';



const PlayerForm = (props) => {

    const [playerName, setPlayerName] = useState('')

    const changeHandler = (e) => {
        setPlayerName(e.target.value)
    }

    const clickHandler = () => {
        const newPlayer = {
            playerId: Date.now(),
            playerNumber: props.gameFormValues.players.length +1,
            playerName: playerName,
            score: 0
        }

        props.addPlayer(newPlayer)
        setPlayerName('')
    }

    return(
        <div>
            <h1>Add a Player</h1>
            <input 
                name='name'
                placeholder='Name'
                type='text'
                value={playerName}
                onChange={changeHandler}
            />
            <button onClick={clickHandler}>Add Player</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        gameFormValues: state.gameFormValues,
        playerFormValues: state.playerFormValues
    });
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addPlayer: (newPlayer) => dispatch(addPlayer(newPlayer))
    }) 
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerForm);