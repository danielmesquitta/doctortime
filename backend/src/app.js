const express = require('express')
const routes = require('./routes')
const { resolve } = require('path')
require('./database')

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    )
  }

  routes() {
    this.server.use(routes)
  }
}

module.exports = new App().server
