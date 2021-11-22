export const CREATE_GAME = 'CREATE_GAME';
export const SET_WINNING_SCORE = 'SET_WINNING_SCORE';
export const SET_ROUNDS = 'SET_ROUNDS';
export const ADD_PLAYER = 'ADD_PLAYER';
export const RESET_GAME_FORM = 'RESET_GAME_FORM';
export const RESET_PLAYER_FORM = 'RESET_PLAYER_FORM';

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

export const resetGameForm = () => {
    return({type: RESET_GAME_FORM})
}

export const resetPlayerForm = () => {
    return({type: RESET_PLAYER_FORM})
}