import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../app/Header';

const Games = (props) => {

    const clickHandler = () => {
        console.log(props.games)
    }
    return (
        <div>
            <Header />
            <h1>Pick a Game!</h1>
            {props.games.map(game => {
                return <Link className='link-button' to={`/games_list/${game.gameId}`} key={game.gameId}>{game.gameId}</Link>
            
            })}
            <button onClick={clickHandler}>Click me for them props!!</button>
            <Outlet />
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        games: state.games,
    })
}

export default connect(mapStateToProps)(Games);