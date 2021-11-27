import React from 'react';

import ScoreForm from './ScoreForm';

const GamePlayer = (props) => {

    const { player } = props;
    return(
        <div>
            <h3>{player.playerName}</h3>
            <p>Current Score: {player.currentScore}</p>
            <ScoreForm player={player}/>
        </div>
    )
}

export default GamePlayer;