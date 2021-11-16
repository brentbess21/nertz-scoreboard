import { CREATE_GAME, SET_WINNING_SCORE, SET_ROUNDS } from "../actions/gameActions"

export const initialState = {
    games: [
        {
            gameId: null,
            winningScore: null,
            rounds: null,
            players: [
                {
                    playerId: null,
                    playerName: null,
                    playerScore: null
                }
            ]
        }
    ]
}

const gameReducer = (state, action) => {
    switch(action.type) {
        case(CREATE_GAME):
            return ({
                ...state,
                games: [...state.games, 
                    {
                        gameId: action.payload,
                         winningScore: null, 
                         rounds: null, 
                         players: [{
                            playerId: null,
                            playerName: null,
                            playerScore: null
                         }]
                    }
                ]
            })
        case(SET_WINNING_SCORE):
            return state
        case(SET_ROUNDS):
            return state
        default:
            return state
    }
}

export default gameReducer;