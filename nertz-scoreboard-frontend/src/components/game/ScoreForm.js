import { React, useState } from 'react';
import { useParams } from 'react-router';
import { connect } from 'react-redux';


import { updatePlayerScore } from '../../actions/gameActions';

const initialInputValue = 0;

const ScoreForm = (props) => {

    const { player } = props;
    const { gameId } = useParams();

    const [inputValue, setInputValue] = useState(initialInputValue);

    const changeHandler = (e) => {
        const value = e.target.value;
        setInputValue(value)
    }

    const clickHandler = () => {
        const info = {
            gameId: parseInt(gameId),
            playerId: player.playerId,
            score: player.currentScore += parseInt(inputValue)
        }
        props.updatePlayerScore(info)
        setInputValue(initialInputValue)
    }

    const enterHandler = (e) => {
        if (e.charCode === 13 || e.keyCode === 13) {
            clickHandler()
        }
    }
    return (
        <div className='score-form'>
            <label className='score-input-label'> What Was Your Score This Round?
                <input 
                    type='number'
                    placeholder='Round Score'
                    value={inputValue}
                    onChange={changeHandler}
                    className='score-input'
                    onKeyPress={enterHandler}
                />
            </label>
            <button className='link-button' onClick={clickHandler}>Save</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        games: state.games
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        updatePlayerScore: (info) => dispatch(updatePlayerScore(info))
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreForm);