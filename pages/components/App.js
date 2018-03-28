import React from 'react'

class App extends React.Component {
  render() {
    return (
      <div className="container-main">
        { this.props.children }
        <style jsx>{`
          .container-main{
            margin: 0;
            padding: 0;
            font-family: 'Lato', sans-serif;
            font-size: 14px;
            font-weight: 300;
            color: #359CD6;
            background: #E8E8E9;
          }
        `}</style>
      </div>
    )
  }
}

export default App