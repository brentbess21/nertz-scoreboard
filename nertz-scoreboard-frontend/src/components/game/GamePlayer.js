import React from 'react';

const GamePlayer = (props) => {

    const { player } = props;
    return(
        <div>

            <h3>{player.playerName}</h3>
            <p>{player.score}</p>

        </div>
    )
}

export default GamePlayer;