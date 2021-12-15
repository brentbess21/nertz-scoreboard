import React from 'react';


const Player = (props) => {

    const { player } = props
       
    return(
        <div>
            <h3>Player #{player.playerNumber}</h3>
            <div className='grid grid-container--player-card'>
                <div className='top-card-pip'>
                    <p>{player.playerNumber}</p>
                    <p>{player.playerSuit}</p>
                </div>
                
                <div className='player-card-info'>
                    <h1>{player.playerName}</h1>
                </div>
                
                <div className='bottom-card-pip'>
                    <p>{player.playerNumber}</p>
                    <p>{player.playerSuit}</p>
                </div>
            </div>
        </div>
    )
}

export default Player;