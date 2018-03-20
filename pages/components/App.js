import React from 'react'

class App extends React.Component {
  static getInitialProps() {
    console.log('data')
  }
  
  render() {
    return (
      <div>
        <h1>APP</h1>
        {this.props.children}
      </div>
    )
  }
}

export default App