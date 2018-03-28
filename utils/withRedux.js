import App from '../pages/components/App'
import withRedux from 'next-redux-wrapper'
import Nav from '../pages/components/Nav'
import { initialStore } from '../store/createStore'

export default (mapStateToProps, mapDispatchToProps) => (C) => {
  const Layout = (props) => {
    return (
      <App {...props}>
        <Nav {...props}/>
        <C {...props} />
      </App>
    )
  }

  Layout.getInitialProps = async (data) => {
    const { store } = data
    if(C.getInitialProps) {
      await C.getInitialProps(data);
    }
  }

  return withRedux(
    initialStore,
    mapStateToProps,
    mapDispatchToProps
  )(Layout);
};