import {createStore, combineReducers, applyMiddleware} from 'redux'

import storedData from './reducer/storedData'
import currentData from './reducer/currentData'
import logger from './middleware/logger'

const mainReducer = combineReducers({
    storedData,
    currentData
})

const store = createStore(mainReducer, applyMiddleware(logger))

export default store
