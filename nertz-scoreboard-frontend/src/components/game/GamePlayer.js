import React from 'react';

const GamePlayer = (props) => {

    const { player } = props;
    return(
        <div>
            <div className='grid grid-container--player-card'>
                <div className='top-card-pip'>
                    <p>{player.playerNumber}</p>
                    <p>{player.playerSuit}</p>
                </div>
                
                <div className='player-card-info'>
                    <h1>{player.playerName}</h1>
                    <h3>Score: {player.currentScore}</h3>
                </div>
                
                <div className='bottom-card-pip'>
                    <p>{player.playerNumber}</p>
                    <p>{player.playerSuit}</p>
                </div>
            </div>
        </div>

    )
}

export default GamePlayer;