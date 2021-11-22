import React from 'react';
import { connect } from 'react-redux';

import Header from '../app/Header';

const ScoreBoard = (props) => {

    const clickHandler = () => {
        console.log(props.games)
    }
    return (
        <div>
            <Header />
            <h1>Your Nertz Score Board!</h1>
            <button onClick={clickHandler}>Click me for them props!!</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        games: state.games,
    })
}

export default connect(mapStateToProps)(ScoreBoard);