const { parse } = require('url')
const next = require('next')
const morgan = require('morgan')
const express = require('express')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 3000

app.prepare().then(() => {
  const server = express()

  // server.use(morgan('tiny'))

  server.get('/tender', (req, res) => {
    app.render(req, res, '/tender', req.query)
  })
  server.get('/create', (req, res) => {
    app.render(req, res, '/create', req.query)
  })
  server.get('/about', (req, res) => {
    app.render(req, res, '/about', req.query)
  })
  server.get('/', (req, res) => {
    app.render(req, res, '/', req.query)
  })

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`server start at port${port}`)
  })
})