const { parse } = require('url')
const next = require('next')
const express = require('express')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 3000

app.prepare().then(() => {
  const server = express()
  server.get('/tender', (req, res) => {
    app.render(req, res, '/tender', req.query)
  })

  server.get('*', (req, res) => {
    handle(req, res)
  })

  server.listen(port, () => {
    console.log(`server start at ${port}`)
  })
})