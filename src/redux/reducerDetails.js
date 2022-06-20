import { FETCH_NBAPLAYERDETAILS_REQUEST, FETCH_NBAPLAYERDETAILS_SUCCESS, FETCH_NBAPLAYERDETAILS_FAILURE } from './typesDetails';

const initialState = {
    loading : false,
    playerDetails : [],
    error: ''
}

const nbaPlayerDetailsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_NBAPLAYERDETAILS_REQUEST: 
        return{
            ...state,
            loading: true
        }

        case FETCH_NBAPLAYERDETAILS_SUCCESS:
        return{
            ...state,
            loading: false,
            playerDetails: action.payload,
            error: ''
        }

        case FETCH_NBAPLAYERDETAILS_FAILURE: 
        return{
            ...state,
            loading: false,
            playerDetails: [],
            error: action.payload
        }

        default: return state
}
}

export default nbaPlayerDetailsReducer;