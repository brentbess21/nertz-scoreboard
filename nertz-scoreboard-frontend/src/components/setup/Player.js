import React from 'react';



const Player = (props) => {
    
    const { player } = props

    console.log(player)
    return(
        <div>
            <h3>Player #{player.playerNumber}</h3>
            <h1>{player.playerName}</h1>
        </div>
    )
}



export default Player;