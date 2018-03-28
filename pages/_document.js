import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }
  render() {
    return (
      <html lang="th">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <title>Book-Tender</title>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body style={{ 
          fontSize: '14px',
          margin: '0',
          padding: '0',
          fontWeight: '300',
          color: '#359CD6',
          background: '#E8E8E9',
          fontFamily: 'Lato, sans-serif'
        }}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}