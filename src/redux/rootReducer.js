import { combineReducers } from 'redux';
import nbaPlayerReducer from './reducer';
import nbaPlayerDetailsReducer from './reducerDetails'

const rootReducer = combineReducers({
    nba: nbaPlayerReducer,
    details: nbaPlayerDetailsReducer

})

export default rootReducer;