import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducer'

export const initialStore = (initialState) => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))
}