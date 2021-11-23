import { CREATE_GAME, SET_WINNING_SCORE, SET_ROUNDS, ADD_PLAYER, RESET_GAME_FORM, RESET_PLAYER_FORM } from "../actions/gameActions"

export const initialState = {
    games: [], // array of objects
    gameFormValues: {
        gameId: 0,
        activeGame: false,
        winningScore: null,
        rounds: null,
        players: [] //array of player objects
    },
    playerFormValues: {
        playerId: 0,
        playerNumber: 0,
        playerName: '',
        score: 0
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
            return ({
                ...state,
                gameFormValues: {...state.gameFormValues, rounds: action.payload}
            })
        
        case(ADD_PLAYER):
            return ({
                ...state,
                gameFormValues: { ...state.gameFormValues, players: [...state.gameFormValues.players, action.payload]}
            })

        case(RESET_GAME_FORM):
            return({
                ...state,
                gameFormValues: {
                    gameId: 0,
                    winningScore: null,
                    rounds: null,
                    players: []
                }
            })
        case(RESET_PLAYER_FORM):
            return({
                ...state,
                playerFormValues: {
                    playerId: 0,
                    playerNumber: 0,
                    playerName: '',
                    score: 0
                }
            })
        
        default:
            return state
    }
}

export default gameReducer;