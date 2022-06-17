import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import nbaPlayerReducer from './reducer';


const store = createStore(nbaPlayerReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;