import {combineReducers} from 'redux';
import homeReducer from './homeReducer'
import afterReducer from './afterReducer'
const rootReducer = combineReducers({
    homeReducer,afterReducer
})

export default rootReducer