import React from 'react';

const Game = (props) => {

    const { game } = props
    console.log(game)
    return(
        <div>
            <h1>GAME ID: {game.gameId}</h1>
        </div>
    )
}

export default Game;