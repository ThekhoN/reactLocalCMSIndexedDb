import {createStore, combineReducers, applyMiddleware} from 'redux'

import storedData from './reducer/storedData'
import currentData from './reducer/currentData'
import logger from './middleware/logger'
import updateLocalStorage from './middleware/updateLocalStorage'

const mainReducer = combineReducers({
    storedData,
    currentData
})

//const store = createStore(mainReducer, applyMiddleware(logger, updateLocalStorage), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const store = createStore(mainReducer, applyMiddleware(logger, updateLocalStorage))

export default store
