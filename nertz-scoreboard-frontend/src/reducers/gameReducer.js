import { CREATE_GAME, SET_WINNING_SCORE, SET_ROUNDS } from "../actions/gameActions"

export const initialState = {
    games: [], // array of objects
    gameFormValues: {
        gameId: 0,
        winningScore: null,
        rounds: null,
        players: [] //array of player objects
    },
    playerFormValues: {
        playerId: 0,
        playerNumber: null,
        playerName: null,
    }
}

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case(CREATE_GAME):
            return({
                ...state,
                games: [...state.games, action.payload] //action.payload should be a newGame object

            })
        case(SET_WINNING_SCORE):
            return ({
                ...state,
                gameFormValues: {...state.gameFormValues, winningScore: action.payload}
            })
        case(SET_ROUNDS):
            return state
        default:
            return state
    }
}

export default gameReducer;