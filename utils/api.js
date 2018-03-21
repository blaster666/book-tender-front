// https://book-tender.herokuapp.com/api/books
import axios from 'axios'

const fetchUrl = (path) => {
  return axios.get(`https://book-tender.herokuapp.com/api/books`)
}

export const getBooks = () => {
  return fetchUrl()
  .then(response => {
    const books = response.data
    const allBooks = Object.keys(books).map(key => ({ id: key, ...books[key] }))
    return Promise.resolve(allBooks)
  })
  .catch(err => Promise.reject(err))
}