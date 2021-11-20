import React from 'react';
import { connect } from 'react-redux';

import Header from '../app/Header';
import PlayerForm from './PlayerForm';

const PlayerSetup = (props) => {

    const clickHandler = () => {
        console.log(props.gameFormValues)
    }
    return(
        <div>
            <Header />
            <h1>This is the Player Setup Componenet</h1>
            <PlayerForm />
            <button onClick={clickHandler}>Tell Me About the Game</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        gameFormValues: state.gameFormValues
    })
}

export default connect(mapStateToProps)(PlayerSetup);