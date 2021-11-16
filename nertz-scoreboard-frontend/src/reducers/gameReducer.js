

const gameReducer = (state, action) => {
    switch(action.type) {
        case('CREATE_GAME'):
            return state
        case('SET_WINNING_SCORE'):
            return state
        case('SET_ROUNDS'):
            return state
        default:
            return state
    }
}

export default gameReducer;