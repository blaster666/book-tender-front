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
    // this.props.fetchAllBooks()
  }

  render() {
    return (
      <div className="main-app">
        <div className="wrap-box">
          <div className="box-detail">
            <div className="detail-time">20h:40m:20s</div>
            <div className="detail-title">Lorem, ipsum.</div>
            <div className="detail-desc">Lorem, ipsum.</div>
            <div className="detail-picture">Lorem, ipsum.</div>
            <div className="detail-comment">Lorem, ipsum.</div>
          </div>
          <div className="all-box">
            
          </div>
        </div>
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
