import React,{ Component } from 'react'
import Router from 'next/router'
import styled from 'styled-components';

// import withRedux from 'next-redux-wrapper'
import connect from '../utils/withRedux'
import { initialStore } from '../store/createStore'
import { bindActionCreators } from 'redux'
import { action, fetchAllBooks } from '../store/action'
import CardSideBar from './components/CardSideBar'
import CardItem from './components/CardItem'
import 'isomorphic-unfetch'

class Tender extends Component {

  componentDidMount() {
    // this.props.fetchAllBooks()
  }

  render() {
    return (
      <MainApp>
        <WrapPage>
          <CardSideBar/>
          <AllCardItem>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
          </AllCardItem>
        </WrapPage>
      </MainApp>
    )
  }
}

const MainApp = styled.div`
  margin-top: 60px;
`

const WrapPage = styled.div`
  padding: 10px;
`

const AllCardItem = styled.div`
  display: grid;
  float: right;
  width: 74%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`

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
