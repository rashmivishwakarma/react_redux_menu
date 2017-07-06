import {combineReducers} from 'redux';
import menuDataReducer from './menuDataReducer';
import menuReducer from './menuReducer';

//COMBINE ALL REDUCERS AND PASS SINGLE ROOT REDUCER TO REDUX STORE 
const rootReducer = combineReducers({
    menuDataReducer: menuDataReducer,
    menuReducer: menuReducer
})

export default rootReducer;