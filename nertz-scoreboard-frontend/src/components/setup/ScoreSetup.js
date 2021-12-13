import { React, useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { setWinningScore } from '../../actions/gameActions';

import Header from "../app/Header";

import img from './../../assets/score-chart.png'

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
        <div className='score-setup'>
            <Header />
            <main className='grid-container grid-container--score-setup'>
                <h1 className='title uppercase txt-light'>Choose a <span className='title-bottom display-block txt-dark'>Winning Score</span></h1>
                <img src={img} alt='score flip chart' />
                <label className='score-input-label txt-light uppercase'> Score
                    <input 
                        type='number'
                        defaultValue={initialInputValue}
                        step='10'
                        min='10'
                        onChange={changeHandler}
                        className='score-input'
                    />
                </label>
                <div className='flex double-button'>
                    <Link to='/gamestyle' className='link-button'>Back</Link>
                    <Link to='/player_setup' className='link-button' onClick={clickHandler}>Enter</Link>
                </div>
            </main>
            
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