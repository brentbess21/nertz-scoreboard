import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import GamePlayer from './GamePlayer';


const ScoreBoard = (props) => {

    const { games } = props;
    const { gameId } = useParams();

    const game = games.find(game => game.gameId === parseInt(gameId));
    console.log(game)

    return(
        <div>
            <h1>Here is the ScoreBoard for you Game!</h1>
            {game.players.map(player=> {
                return <GamePlayer player={player} key={player.playerId}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        games: state.games
    })
}
export default connect(mapStateToProps)(ScoreBoard);