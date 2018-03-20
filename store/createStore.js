import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducers from './reducer'

export const action = (data) => {
  return (dispatch) => {
    return dispatch({
      type: 'TEST',
      name: data
    })
  }
}

export const fetchData = () => {
  return (dispatch) => {
    return 
      fetch('https://api.opendota.com/api/heroes')
      .then(res => res.json())
      .then(res => dispatch({
        type: 'HERO',
        data: res
      }))
      .catch(err => console.log(err))
  }
}
export const initialStore = (initialState) => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)))
}