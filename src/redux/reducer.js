import { FETCH_NBAPLAYER_REQUEST, FETCH_NBAPLAYER_SUCCESS, FETCH_NBAPLAYER_FAILURE } from './types';

const initialState = {
    loading : false,
    players : [],
    error: ''
}

const nbaPlayerReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_NBAPLAYER_REQUEST: 
        return{
            ...state,
            loading: true
        }

        case FETCH_NBAPLAYER_SUCCESS:
        return{
            ...state,
            loading: false,
            players: action.payload,
            error: ''
        }

        case FETCH_NBAPLAYER_FAILURE: 
        return{
            ...state,
            loading: false,
            players: [],
            error: action.payload
        }

        default: return state
}
}

export default nbaPlayerReducer;