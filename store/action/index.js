import { getBooks } from '../../utils/api'

export const action = (data) => {
  return (dispatch) => {
    return dispatch({
      type: 'TEST',
      name: data
    })
  }
}

export const fetchAllBooks = () => {
  return (dispatch) => {
    return getBooks()
    .then(books => dispatch({ type: 'GET_ALL_BOOK', data: books }))
  }
}

const makeBooks = (books) => {
  return {
    type: 'GET_ALL_BOOK',
    data: books
  }
}