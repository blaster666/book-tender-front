import React,{ Component } from 'react'
import Router from 'next/router'
// import withRedux from 'next-redux-wrapper'
import connect from '../utils/withRedux'
import { initialStore } from '../store/createStore'
import { bindActionCreators } from 'redux'
import {action} from '../store/createStore'

class Tender extends Component {
  static getInitialProps({ store }) {
    return {
      fe: JSON.stringify(store.getState().taeReducer[0].id)
    }
  }

  render() {
    return (
      <div>
        <h1>index</h1>
        <a onClick={ () => Router.push('/about')}>sss</a>
        {this.props.data.map((u,i) => <div key={i}>{u.name}</div>)}
        <button onClick={ () => this.props.action('tae') }>click</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.taeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    action
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tender)
