import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';



const Winner = (props) => {

    const { games } = props;
    const { gameId } = useParams();
    const game = games.find(game => game.gameId === parseInt(gameId));

    return(
        <div className='grid-container'>
            <h1>WE HAVE A WINNER!</h1>
            <h3>{game.currentLeader[0].playerName} Won!</h3>
            <Link to='/gamestyle' className='link-button'>Play Again?</Link>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        games: state.games
    })
}


export default connect(mapStateToProps)(Winner);

