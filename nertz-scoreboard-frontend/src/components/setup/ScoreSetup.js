import { React, useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { setWinningScore } from '../../actions/gameActions';

import Header from "../app/Header";

const initialInputValue = '100';

const ScoreSetup = (props) => {

    const [inputValue, setInputValue] = useState(initialInputValue)

    const changeHandler = (e) => {
        const value = e.target.value
        setInputValue(value)
    }

    const clickHandler = () => {
        const score = parseInt(inputValue)
        props.setWinningScore(score)
    }
    
    return(
        <div className='container'>
            <Header />
            <h1>What Should the Winning Score Be?</h1>
           
            <input 
                type='number'
                defaultValue={initialInputValue}
                step='10'
                min='10'
                onChange={changeHandler}
            />
            <div className='flex'>
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
        setWinningScore: (score) => dispatch(setWinningScore(score))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreSetup);