import { CREATE_GAME, SET_GAME_ID, SET_WINNING_SCORE, SET_ROUNDS, ADD_PLAYER, RESET_GAME_FORM, RESET_PLAYER_FORM, UPDATE_PLAYER_SCORE, UPDATE_ROUND, UPDATE_CURRENT_HIGH_SCORE, FIND_LEADER, ENABLE_NEXT_BUTTON, DISABLE_NEXT_BUTTON, ENABLE_PLAY_BUTTON, DISABLE_PLAY_BUTTON, ENABLE_SAVE_BUTTON, DISABLE_SAVE_BUTTON } from "../actions/gameActions"

export const initialState = {
    games: [], // array of objects
    gameFormValues: {
        gameId: 0,
        winningScore: null,
        rounds: null,
        currentRound: 1,
        currentHighScore: 0,
        currentLeader: [],
        players: [] //array of player objects
    },
    playerFormValues: {
        playerId: 0,
        playerNumber: 0,
        playerName: '',
        currentScore: 0,
        roundScore: [] // array of scores for each round
    },
    disabledButtons: {
        nextButton: true,
        addPlayer: false,
        playButton: true,
        saveGameButton: false,
    }
}

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case(CREATE_GAME):
            return({
                ...state,
                games: [...state.games, action.payload] //action.payload should be a newGame object

            })

        case(SET_GAME_ID):
            return({
                ...state,
                gameFormValues: {...state.gameFormValues, gameId: action.payload}
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
                    currentRound: 1,
                    currentHighScore: 0,
                    currentLeader: [],
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
                    currentScore: 0,
                    roundScore: [] 
                }
            })

        case(UPDATE_PLAYER_SCORE):
            const gameIndex = state.games.findIndex(game => game.gameId === action.payload.gameId)
            const newGamesArray = [...state.games]
            const correctGame = newGamesArray[gameIndex]
            const playerIndex = correctGame.players.findIndex(player => player.playerId === action.payload.playerId)
            const newPlayerArray = [...correctGame.players]
            const correctPlayer = newPlayerArray[playerIndex]
            correctPlayer.currentScore = action.payload.score
            return({
                ...state,
                games: [...state.games]
            })

        case(UPDATE_ROUND):
            const gameIndex2 = state.games.findIndex(game => game.gameId === action.payload.gameId)
            const newGamesArray2 = [...state.games]
            const correctGame2 = newGamesArray2[gameIndex2]
            correctGame2.currentRound += 1
            return({
                ...state,
                games: [...state.games]
            })
        
        case(UPDATE_CURRENT_HIGH_SCORE):
            const gameIndex3 = state.games.findIndex(game => game.gameId === action.payload.gameId)
            const newGamesArray3 = [...state.games]
            const correctGame3 = newGamesArray3[gameIndex3]
            correctGame3.currentHighScore = action.payload.currentHighScore
            return({
                ...state,
                games: [...state.games]
            })

        case(FIND_LEADER):
            const gameIndex4 = state.games.findIndex(game => game.gameId === action.payload.gameId)
            const newGamesArray4 = [...state.games]
            const correctGame4 = newGamesArray4[gameIndex4]
            correctGame4.currentLeader = action.payload.currentLeader
            return({
                ...state,
                games: [...state.games]
            })

        case(ENABLE_NEXT_BUTTON):
            return({
                ...state,
                disabledButtons: {...state.disabledButtons, nextButton: false}
            })

        case(DISABLE_NEXT_BUTTON):
            return({
                ...state,
                disabledButtons: {...state.disabledButtons, nextButton: true}
            })

        case(ENABLE_PLAY_BUTTON):
            return({
                ...state,
                disabledButtons: {...state.disabledButtons, playButton: false}
            })

        case(DISABLE_PLAY_BUTTON):
            return({
                ...state,
                disabledButtons: {...state.disabledButtons, playButton: true}
            })

        case(ENABLE_SAVE_BUTTON):
            return({
                ...state,
                disabledButtons: {...state.disabledButtons, saveGameButton: false}
            })

        case(DISABLE_SAVE_BUTTON):
            return({
                ...state,
                disabledButtons: {...state.disabledButtons, saveGameButton: true}
            })

        default:
            return state
    }
}

export default gameReducer;