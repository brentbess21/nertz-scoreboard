import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { resetGameForm, resetPlayerForm } from '../../actions/gameActions';

const Header = (props) => {

    const clearForms = () => {
        props.resetPlayerForm();
        props.resetGameForm();
    }
    return(
        <header className='container primary-navigation ff-sans-cond'>
            <nav className='container flex'>
                <Link to='/' onClick={clearForms}>Home</Link>
                <Link to ='/about' onClick={clearForms}>About</Link>
                <a href='https://bicyclecards.com/how-to-play/nerts/' target="_blank" rel='noreferrer'>Rules</a>
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => {
    return({
        games: state.games,
        gameFormValues: state.gameFormValues,
        playerFormValues: state.playerFormValues
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        resetGameForm: () => dispatch(resetGameForm()),
        resetPlayerForm: () => dispatch(resetPlayerForm())
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);