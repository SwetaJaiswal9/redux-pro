import { FETCH_GAMESCORE_REQUEST, FETCH_GAMESCORE_SUCCESS, FETCH_GAMESCORE_FAILURE } from './typeGameScore';

const initialState = {
    loading : false,
    score : 0,
    error: ''
}

const gameScoreReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_GAMESCORE_REQUEST: 
        return{
            ...state,
            loading: true
        }

        case FETCH_GAMESCORE_SUCCESS:
        return{
            ...state,
            loading: false,
            score: action.payload,
            error: ''
        }

        case FETCH_GAMESCORE_FAILURE: 
        return{
            ...state,
            loading: false,
            score: [],
            error: action.payload
        }

        default: return state
}
}

export default gameScoreReducer;