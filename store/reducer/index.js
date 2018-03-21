import { combineReducers } from 'redux'
import { taeReducer } from './taeReducer'
import { bookReducer } from './bookReducer'

const reducers = combineReducers({
  taeReducer,
  bookReducer
})

export default reducers
