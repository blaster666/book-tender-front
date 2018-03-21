import React,{ Component } from 'react'
import Router from 'next/router'
// import withRedux from 'next-redux-wrapper'
import connect from '../utils/withRedux'
import { initialStore } from '../store/createStore'
import { bindActionCreators } from 'redux'
import { action, fetchAllBooks } from '../store/action'
import 'isomorphic-unfetch'

class Tender extends Component {

  componentDidMount() {
    this.props.fetchAllBooks()
  }

  render() {
    return (
      <div>
        <h1>index</h1>
        {
          this.props.books.map((book) => {
            return (
              <h1 key={book.id}>
                {book.bookName}
                <img height="200" width="200" src={book.image}/>
              </h1>
            )
          })
        }
        <a onClick={ () => Router.push('/about')}>sss</a>
        <button onClick={ () => this.props.action('tae') }>click</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { bookReducer } = state
  return {
    books: state.bookReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    action,
    fetchAllBooks
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tender)
