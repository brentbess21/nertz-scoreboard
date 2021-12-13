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
        <header className='primary-header flex'>
            <nav className='flex primary-nav'>
                <Link to='/' className='txt-dark' onClick={clearForms}>Home</Link>
                <Link to ='/about' className='txt-dark' onClick={clearForms}>About</Link>
                <a className='txt-dark' href='https://bicyclecards.com/how-to-play/nerts/' target="_blank" rel='noreferrer'>Rules</a>
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