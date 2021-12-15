import { React, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setRounds } from '../../actions/gameActions';

import Header from '../app/Header';

import img from './../../assets/score-chart.png';

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

    const enterHandler = (e) => {
        if(e.charCode === 13 || e.keyCode === 13) {
            clickHandler();
        }
    }

    return(
        <div className='score-setup'>
            <Header />
            <main className='grid-container grid-container--score-setup'>
                <h1 className='title uppercase txt-light'>Choose the <span className='title-bottom display-block txt-dark'>number of rounds</span></h1>
                <img src={img} alt='score flip chart'/>

                <label className='score-input-label'> Rounds
                    <input 
                        type="text"
                        defaultValue={initialInputValue}
                        inputMode="numeric"
                        pattern="[0-9]*"
                        min='1'
                        onChange={changeHandler}
                        onKeyPress={enterHandler}
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
        setRounds: (rounds) => dispatch(setRounds(rounds))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(RoundsSetup);