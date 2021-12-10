import React from 'react';
import { connect } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import Header from '../app/Header';
import Error from '../app/Error';

const Game = (props) => {

    const { games } = props;
    const { gameId } = useParams();

    const game = games.find(game => game.gameId === parseInt(gameId));

    if(game) {
        return(
            <div>
                <Header />
                <h1>GAME ID:{game.gameId}</h1>
                <h3>Players</h3>
                {game.players.map(player=> {
                    return <p key={player.playerId}>{player.playerName}</p>
                })}
                <div className='container flex'>
                    <Link to='/games_list' className='link-button'>Back</Link>
                    <Link to={`/games_list/${game.gameId}/play`} className='link-button'>Play</Link>
                </div>        
            </div>
        )
    } else {
        return(
            <Error />
        )
    }
}

const mapStateToProps = (state) => {
    return ({
        games: state.games
    })
}

export default connect(mapStateToProps)(Game);