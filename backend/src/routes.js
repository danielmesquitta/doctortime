const { Router } = require('express')
const User = require('./app/models/User')

const routes = Router()

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'diego fernandes',
    email: 'diego@gmail.com',
    password_hash: '12345678',
  })

  return res.json(user)
})

module.exports = routes
