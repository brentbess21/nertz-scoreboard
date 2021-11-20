export const CREATE_GAME = 'CREATE_GAME';
export const SET_WINNING_SCORE = 'SET_WINNING_SCORE';
export const SET_ROUNDS = 'SET_ROUNDS';
export const ADD_PLAYER = 'ADD_PLAYER';

export const createGame = (newGame) => {
    return ({type: CREATE_GAME, payload: newGame})
}

export const setWinningScore = (score) => {
    return ({type: SET_WINNING_SCORE, payload: score})
}

export const setRounds = (rounds) => {
    return ({type: SET_ROUNDS, payload: rounds})
}

export const addPlayer = (player) => {
    return({type: ADD_PLAYER, payload: player})
}