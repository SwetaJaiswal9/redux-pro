import { combineReducers } from 'redux';
import nbaPlayerReducer from './reducer';
import nbaPlayerDetailsReducer from './reducerDetails';
import gameScoreReducer from './reducerGameStore';

const rootReducer = combineReducers({
    nba: nbaPlayerReducer,
    details: nbaPlayerDetailsReducer,
    game: gameScoreReducer

})

export default rootReducer;