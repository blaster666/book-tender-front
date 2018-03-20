import App from '../pages/components/App'
import withRedux from 'next-redux-wrapper'
import { initialStore } from '../store/createStore'

export default (mapStateToProps, mapDispatchToProps) => (C) => {
  const Layout = (props) => {
    return (
      <App {...props}>
        <C {...props} />
      </App>
    )
  }

  Layout.getInitialProps = async (data) => {
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