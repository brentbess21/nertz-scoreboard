import { CREATE_GAME, SET_WINNING_SCORE, SET_ROUNDS, ADD_PLAYER } from "../actions/gameActions"

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
        playerNumber: 0,
        playerName: '',
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
        
        case(ADD_PLAYER):
            return ({
                ...state,
                gameFormValues: { ...state.gameFormValues, players: [...state.gameFormValues.players, action.payload]}
            })
        default:
            return state
    }
}

export default gameReducer;