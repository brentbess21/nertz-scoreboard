export const CREATE_GAME = 'CREATE_GAME';
export const SET_GAME_ID= 'SET_GAME_ID';
export const SET_WINNING_SCORE = 'SET_WINNING_SCORE';
export const SET_ROUNDS = 'SET_ROUNDS';
export const ADD_PLAYER = 'ADD_PLAYER';
export const RESET_GAME_FORM = 'RESET_GAME_FORM';
export const RESET_PLAYER_FORM = 'RESET_PLAYER_FORM';
export const UPDATE_PLAYER_SCORE = 'UPDATE_PLAYER_SCORE';
export const UPDATE_ROUND = 'UPDATE_ROUND';
export const UPDATE_CURRENT_HIGH_SCORE = 'UPDATE_CURRENT_HIGH_SCORE';
export const FIND_LEADER = 'FIND_LEADER';
export const ENABLE_NEXT_BUTTON = 'ENABLE_NEXT_BUTTON';
export const DISABLE_NEXT_BUTTON = 'DISABLE_NEXT_BUTTON';
export const ENABLE_PLAY_BUTTON = 'ENABLE_PLAY_BUTTON';
export const DISABLE_PLAY_BUTTON = 'DISABLE_PLAY_BUTTON';
export const ENABLE_SAVE_BUTTON = 'ENABLE_SAVE_BUTTON';
export const DISABLE_SAVE_BUTTON = 'DISABLE_SAVE_BUTTON';

export const createGame = (newGame) => {
    return ({type: CREATE_GAME, payload: newGame})
}

export const setGameId = (id) => {
    return({type: SET_GAME_ID, payload: id})
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

export const updatePlayerScore = (info) => {
    return({type: UPDATE_PLAYER_SCORE, payload: info})
}

export const updateRound = (info) => {
    return({type: UPDATE_ROUND, payload: info})
}

export const updateCurrentHighScore = (info) => {
    return({type: UPDATE_CURRENT_HIGH_SCORE, payload: info})
}

export const findLeader = (info) => {
    return({type: FIND_LEADER, payload: info})
}

export const enableNextButton = () => {
    return({type: ENABLE_NEXT_BUTTON})
}

export const disableNextButton = () => {
    return({type: DISABLE_NEXT_BUTTON})
}

export const enablePlayButton = () => {
    return({type: ENABLE_PLAY_BUTTON})
}

export const disablePlayButton = () => {
    return({type: DISABLE_PLAY_BUTTON})
}

export const enableSaveButton = () => {
    return({type: ENABLE_SAVE_BUTTON})
}

export const disableSaveButton = () => {
    return({type: DISABLE_SAVE_BUTTON})
}