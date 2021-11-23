import React from 'react';
import { connect } from 'react-redux';

import Header from '../app/Header';
import Game from './Game';

const Games = (props) => {
    const clickHandler = () => {
        console.log(props.games)
    }
    return (
        <div>
            <Header />
            <h1>Pick a Game!</h1>
            {props.games.map(game => {
                return <Game key={game.gameId} game={game}/>
            })}
            <button onClick={clickHandler}>Click me for them props!!</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        games: state.games,
    })
}

export default connect(mapStateToProps)(Games);