import { React, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRounds } from '../../actions/gameActions';

import Header from '../app/Header';

const initialInputValue = '1';

const RoundsSetup = (props) => {
    const [inputValue, setInputValue] = useState(initialInputValue)

    const changeHandler = (e) => {
        const value = e.target.value
        setInputValue(value)
    }

    const clickHandler = () => {
        const rounds = parseInt(inputValue)
        props.setRounds(rounds)
    }
    return(
        <div className='container'>
            <Header />
            <h1>How Many Rounds Would You Like to Play?</h1>
            <input 
                type='number'
                defaultValue={initialInputValue}
                min='1'
                onChange={changeHandler}
            />
            <div className='flex container'>
                <Link to='/gamestyle' className='link-button'>Back</Link>
                <Link to='/player_setup' className='link-button' onClick={clickHandler}>Enter</Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        gameFormValues: state.gameFormValues
    })
}

const mapDispatchToProps = (dispatch) => {
    return ({
        setRounds: (rounds) => dispatch(setRounds(rounds))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundsSetup);